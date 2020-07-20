FROM node:11.10-alpine as builder
ARG ANALYTICS_SERVER_HOST
ENV REACT_APP_ANALYTICS_SERVER_HOST=${ANALYTICS_SERVER_HOST}

WORKDIR /
COPY . .
RUN npm ci --network-concurrency 1
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build /usr/share/nginx/html

# docker build -t "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-client:$build" -f .\client\Dockerfile --build-arg ANALYTICS_SERVER_HOST=$url .
# docker push "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-client:$build"
