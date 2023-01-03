<p align="center">
<img src="static/logo-black.png">
</p>
# Levach

This is a very early version of the website, everything is prone to chnage.

## Setup

Use the latest version of Python. Flask supports Python 3.7 and newer

1. `git clone https://github.com/marxunion/Democritus`
2. `cd Democritus`
3. `git switch flask`
4. - win `py -3 -m venv venv`
   - linux `python3 -m venv venv`
5. - win `venv\Scripts\activate.bat`
   - linux `venv/bin/activate`
6. `pip install Flask pymongo python-dotenv`
7. copy `.env.example` into `.env` and change it according to your setup

## Run

1. `flask --debug run`

## References

Flask - https://flask.palletsprojects.com/en/2.2.x/