FROM python:3.11
RUN pip install Flask pymongo python-dotenv cmarkgfm
EXPOSE 8080