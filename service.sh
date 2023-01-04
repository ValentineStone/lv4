#!/usr/bin/env bash

cd "$(dirname "$BASH_SOURCE")"
source venv/bin/activate
flask --debug run --host 0.0.0.0 --port 8080
