FROM python:latest
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client libpq-dev \
	&& rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
RUN pip install django psycopg2 boto3 django-storages python-dotenv
EXPOSE 8000
CMD ["/bin/sh", "entrypoint.sh"]