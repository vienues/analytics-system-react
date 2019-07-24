# BUILD SERVER
FROM alpine:edge as server_builder
ARG DOMAIN_NAME="localhost"
RUN apk update         \
 && apk add nodejs     \
            nodejs-npm \
            yarn       \
            git
COPY ./server /app
WORKDIR /app

RUN sh scripts/replace-server-hostnames.sh $DOMAIN_NAME
RUN yarn install --network-concurrency 1

# CREATE SERVER ARTIFACT
FROM node:9-alpine
LABEL maintainer="Lluis Marquez - lluis@weareadaptive.com; Bernardo Salazar - bernardo@weareadaptive.com"
WORKDIR /app

COPY --from=server_builder /server                       /server
COPY --from=server_builder /server/.graphqlconfig        /server/.graphqlconfig
COPY --from=server_builder /server/graphql.config.json   /server/graphql.config.json
COPY --from=server_builder /server/.graphqlrc            /server/.graphqlrc
COPY --from=server_builder /server/app.json              /server/app.json

CMD ["yarn", "start"]

# docker build --no-cache -t eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-server:0.0.1 -f server/Dockerfile --build-arg DOMAIN_NAME="$domain_name.adaptivecluster.com" .
