#!/bin/sh
cd /code && \
python3.6 manage.py migrate --noinput && \
python3.6 manage.py runserver 0.0.0.0:8000
