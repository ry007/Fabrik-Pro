FROM ubuntu:18.04

RUN apt-get update -qq && apt-get install -y build-essential curl libfontconfig

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash - && apt-get install -y nodejs

RUN apt-get install -y ruby-dev

RUN gem install sass -v 3.2.19

WORKDIR /code

ADD . /code

RUN npm link gulp

RUN npm cache clean -f
RUN npm install -g n
RUN n stable

RUN npm install

RUN npm install -g webpack@1.13.1

CMD ["webpack", "--progress", "--watch", "--colors"]
