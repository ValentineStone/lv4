FROM python:3.11
RUN pip install Flask pymongo python-dotenv
EXPOSE 8080