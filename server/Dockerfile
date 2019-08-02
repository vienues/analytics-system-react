FROM node:11.10-alpine as builder
COPY ./server /app
RUN apk update && apk add git

WORKDIR /app
# RUN sh scripts/replace-server-hostnames.sh $DOMAIN_NAME
RUN yarn install --network-concurrency 1

# CREATE SERVER ARTIFACT
FROM node:11.10-alpine
WORKDIR /app

COPY --from=builder /app                       /app
COPY --from=builder /app/.graphqlconfig        /app/.graphqlconfig
COPY --from=builder /app/graphql.config.json   /app/graphql.config.json
COPY --from=builder /app/.graphqlrc            /app/.graphqlrc
COPY --from=builder /app/app.json              /app/app.json

CMD ["yarn", "start"]

# docker build -t "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-server:$build" -f .\server\Dockerfile .
# docker push "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-server:$build"
