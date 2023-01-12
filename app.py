from os import environ
import os
from dotenv import load_dotenv
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask import Flask, render_template
from flask import redirect, url_for, abort
from flask import request
from werkzeug.wrappers import Request, Response, ResponseStream

load_dotenv()


MONGO_HOST = environ.get('MONGO_HOST', 'localhost')
MONGO_PORT = int(environ.get('MONGO_PORT', 27017))
MONGO_USER = environ.get('MONGO_USER', 'user')
MONGO_PASS = environ.get('MONGO_PASS', 'pass')
MONGO_DBNAME = environ.get('MONGO_DBNAME', 'local')
MONGO_AUTH_SOURCE = environ.get('MONGO_AUTH_SOURCE', 'admin')
FLASK_HOST = environ.get('FLASK_HOST', 'localhost')
FLASK_PORT = int(environ.get('FLASK_PORT', 8080))

print('============================ Running flask @ ' + FLASK_HOST + ':' + str(FLASK_PORT))
print('============================ Connected to mongo @ ' + MONGO_HOST + ':' + str(MONGO_PORT))


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


class Fake:
    def find(self, *args):
        return []

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

@app.template_filter()
def debug(text):
  print(text)
  return ''


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