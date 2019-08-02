FROM node:11.10-alpine as builder
WORKDIR /
COPY . .
RUN apk update && apk add git
RUN yarn install --network-concurrency 1

FROM node:11.10-alpine
WORKDIR /app
COPY --from=builder /                       /app
COPY --from=builder /.graphqlconfig        /app/.graphqlconfig
COPY --from=builder /graphql.config.json   /app/graphql.config.json
COPY --from=builder /.graphqlrc            /app/.graphqlrc
COPY --from=builder /app.json              /app/app.json

CMD ["yarn", "start"]

# docker build -t "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-server:$build" -f .\server\Dockerfile .
# docker push "eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-server:$build"
