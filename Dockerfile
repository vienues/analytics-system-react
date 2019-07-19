# BUILD LOCAL
FROM node:8.11.3-alpine as localhost_builder

RUN       apk update && apk add git
RUN       npm install --global lerna
COPY      . /app
WORKDIR   /app
RUN       yarn install && yarn bootstrap
CMD       yarn start
