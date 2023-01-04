from os import environ
from flask import Flask, render_template
from pymongo import MongoClient


MONGO_ADDR = environ.get('MONGO_ADDR', 'localhost')
MONGO_PORT = int(environ.get('MONGO_PORT', 27017))
MONGO_DBNAME = environ.get('MONGO_DBNAME', 'local')


app = Flask(__name__)

client = None
posts = []
categories = []

try:
    client = MongoClient(MONGO_ADDR, MONGO_PORT, serverSelectionTimeoutMS=1)
    client.server_info()
    db = client[MONGO_DBNAME]
    posts = db.posts.find()
    categories = db.categories.find()
except:
    print('No connection')

@app.route("/")
def home():
    return render_template(
        'pages/posts.html',
        posts=posts,
        categories=categories
    )
