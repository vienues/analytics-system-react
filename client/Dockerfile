FROM node:11.10-alpine as builder
WORKDIR /
ARG ANALYTICS_SERVER_HOST
ENV REACT_APP_ANALYTICS_SERVER_HOST=${ANALYTICS_SERVER_HOST}
RUN npm install --global lerna
COPY ./lerna.json /lerna.json
COPY ./package.json /package.json
COPY ./common /common
COPY ./client /app
RUN lerna bootstrap

WORKDIR /app
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./client/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# docker build -t "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-client:$build" -f .\client\Dockerfile --build-arg ANALYTICS_SERVER_HOST=$url .
# docker push "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-client:$build"
