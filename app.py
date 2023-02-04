from os import environ
import os
import sys
from dotenv import load_dotenv
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask import Flask, render_template
from flask import redirect, url_for, abort
from flask import request
from werkzeug.wrappers import Request, Response, ResponseStream
import cmarkgfm
import markupsafe
from werkzeug.exceptions import HTTPException
import secrets

from app_utils import Fake, nested_path

load_dotenv()

MONGO_HOST = environ.get('MONGO_HOST', 'localhost')
MONGO_PORT = int(environ.get('MONGO_PORT', 27017))
MONGO_USER = environ.get('MONGO_USER', 'user')
MONGO_PASS = environ.get('MONGO_PASS', 'pass')
MONGO_DBNAME = environ.get('MONGO_DBNAME', 'local')
MONGO_AUTH_SOURCE = environ.get('MONGO_AUTH_SOURCE', 'admin')
FLASK_HOST = environ.get('FLASK_HOST', 'localhost')
FLASK_PORT = int(environ.get('FLASK_PORT', 8080))

print('Running flask @ ' + FLASK_HOST + ':' + str(FLASK_PORT), file=sys.stderr)
print('Connected to mongo @ ' + MONGO_HOST + ':' + str(MONGO_PORT), file=sys.stderr)

app = Flask(__name__)

class middleware():
    def __init__(self, app):
        self.app = app
    def __call__(self, environ, start_response):
        request = Request(environ)
        # do middleware things
        return self.app(environ, start_response)


app.wsgi_app = middleware(app.wsgi_app)
app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

client = None
app = Flask(__name__)

posts = Fake()
categories = Fake()

try:
    client = MongoClient(
        host=MONGO_HOST,
        port=MONGO_PORT,
        username=MONGO_USER,
        password=MONGO_PASS,
        authSource=MONGO_AUTH_SOURCE,
        serverSelectionTimeoutMS=1
    )
    db = client[MONGO_DBNAME]
    posts = db.posts
    categories = db.categories
except:
    print('No connection')

@app.errorhandler(HTTPException)
def http_error(exc):
    return render_template(
        'pages/error.html',
        code = exc.code,
        name = exc.name,
        description = exc.description
    ), exc.code

@app.template_filter()
def debug(text):
    print(text, file=sys.stderr)
    return ''


@app.template_filter()
def markdown(text):
    return markupsafe.Markup(
        '<div class="markdown-body">'
        + cmarkgfm.github_flavored_markdown_to_html(str(text))
        + '</div>'
    )
    
@app.template_filter()
def rudate(date):
    return date.strftime('%H:%M %d.%m.%y') if date else ''

@app.route('/')
def index():
    return redirect(url_for('posts_get'))

@app.route('/posts')
def posts_get():
    return render_template(
        'pages/posts.html',
        posts=posts.find(),
        categories=categories.find()
    )

@app.route('/post/<post_id>')
def post_get(post_id):
    post = posts.find_one({'_id' : ObjectId(post_id)})
    if not post:
        abort(404)
    return render_template(
        'pages/post.html',
        post=post,
        categories=categories.find()
    )

@app.route('/ADMIN/POST_COMMENT', methods=['POST'])
def admin_postcomment_post():
    content = request.form.get('content', '')
    post_id = request.form.get('post_id', '')
    comment_id = request.form.get('comment_id', '')
    comments_subpath = nested_path(comment_id, 'comments', field_last=True)
    edit_secret = secrets.token_urlsafe(256)
    try:
        post = posts.update_one(
            {'_id' : ObjectId(post_id)},
            { '$push': { comments_subpath: {
                'content': content,
                'edit_secret': edit_secret,
            }}}
        )
        print(comments_subpath, file=sys.stderr)
        return redirect(url_for(
            'post_get',
            post_id=post_id,
            edit_secret=edit_secret,
            _anchor='editable',
        ))
    except Exception as e:
        abort(500, str(e))

@app.route('/ADMIN/EDIT_COMMENT', methods=['POST'])
def admin_editcomment_post():
    content = request.form.get('content', '')
    post_id = request.form.get('post_id', '')
    comment_id = request.form.get('comment_id', '')
    edit_secret = request.form.get('edit_secret', '')
    FIX_edit_secret = edit_secret
    if edit_secret.startswith('ADMIN_FAKE_SECRET_') and edit_secret.endswith(comment_id):
        edit_secret = None
        FIX_edit_secret = secrets.token_urlsafe(256)
    comments_subpath = nested_path(comment_id, 'comments')
    print(comments_subpath, file=sys.stderr)
    print(edit_secret, file=sys.stderr)
    print(content, file=sys.stderr)
    try:
        post = posts.find_one(
            {'_id' : ObjectId(post_id), comments_subpath + '.edit_secret': edit_secret }
        )
        print(post, file=sys.stderr)
        post = posts.update_one(
            {'_id' : ObjectId(post_id), comments_subpath + '.edit_secret': edit_secret },
            { '$set': {
                comments_subpath + '.content': content,
                comments_subpath + '.edit_secret': FIX_edit_secret
            }}
        )
        return redirect(url_for(
            'post_get',
            post_id=post_id,
            edit_secret=FIX_edit_secret,
            _anchor='editable',
        ))
    except Exception as e:
        abort(500, str(e))

@app.route('/ADMIN/DELETE_COMMENT/<post_id>/<comment_id>')
def admin_delete_comment(post_id, comment_id):
    comment_indexes = list(x - 1 for x in map(int, comment_id.split('_')))
    comment_subpath = nested_path(comment_id, 'comments')
    try:
        posts.update_one(
            {'_id' : ObjectId(post_id)},
            {'$set' : {
                comment_subpath + '.content':  '',
                comment_subpath + '.deleted': True
            }}
        )
        return redirect(url_for('post_get', post_id=post_id, _anchor=comment_id))
    except Exception as e:
        abort(500, str(e))

@app.route('/components')
def components():
    return render_template('pages/components.html')

@app.route('/editpost/<post_id>')
def editpost(post_id):
    edit_secret = request.args.get('edit_secret')
    post = {}
    if not post_id == 'new':
        post = posts.find_one({'_id' : ObjectId(post_id)})
    if not post:
        abort(404)
    elif not post.get('edit_secret') == edit_secret:
        abort(403)
    return render_template(
        'pages/editpost.html',
        post=post,
        categories=categories.find()
    )

@app.route('/ADMIN/EDIT_POST', methods=['POST'])
def admin_editpost_post():
    post_id = request.form.get('post_id', 'new')
    content = request.form.get('content', '')
    title = request.form.get('title', '')
    tags = request.form.get('tags', '').split(' ')
    edit_secret = request.form.get('edit_secret', secrets.token_urlsafe(256))
    try:
        if post_id == 'new':
            post = posts.insert_one({
                'edit_secret': edit_secret,
                'content': content,
                'title': title,
                'tags': tags,
            })
        else:
            post = posts.update_one({
                '_id' : ObjectId(post_id),
                'edit_secret': edit_secret
            }, { '$set': {
                'content': content,
                'title': title,
                'tags': tags,
            }})
        return redirect(url_for(
            'post_get',
            post_id=post.inserted_id if post_id == 'new' else post_id,
            edit_post='true',
            edit_secret=edit_secret,
        ))


    except Exception as e:
        abort(500, str(e))