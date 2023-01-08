from os import environ
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask import Flask, render_template
from flask import redirect, url_for


MONGO_ADDR = environ.get('MONGO_ADDR', 'localhost')
MONGO_PORT = int(environ.get('MONGO_PORT', 27017))
MONGO_DBNAME = environ.get('MONGO_DBNAME', 'levach')


class Fake:
    def find(self, *args):
        return []

app = Flask(__name__)

posts = Fake()
categories = Fake()

try:
    client = MongoClient(host='test_mongodb',
                         port=27017,
                         username='root',
                         password='pass',
                         authSource="admin")
    db = client["levach"]
    posts = db.posts
    categories = db.categories
except:
    print('No connection')

print(posts)

@app.route('/')
def index():
    return redirect(url_for('posts_get'))

@app.route('/posts')
def posts_get():
    print('=========================================================================')
    print(posts)
    return render_template(
        'pages/posts.html',
        posts=posts.find(),
        categories=categories.find()
    )

@app.route('/post/<post_id>')
def post_get(post_id):
    return render_template(
        'pages/posts.html',
        posts=posts.find({"_id" : ObjectId(post_id)}),
        categories=categories.find()
    )