# BUILD CLIENT
FROM alpine:edge as client_builder
ARG DOMAIN_NAME="localhost"
RUN apk update         \
 && apk add nodejs     \
            nodejs-npm \
            yarn       \
            git
RUN npm install --global lerna
COPY ./lerna.json /lerna.json
COPY ./package.json /package.json
COPY ./client /app
COPY ./common /common

RUN sh ./app/scripts/replace-client-hostnames.sh $DOMAIN_NAME
WORKDIR /

RUN lerna bootstrap
RUN cd /app && npm run build

# CREATE CLIENT ARTIFACT
FROM nginx:alpine
LABEL maintainer="Lluis Marquez - lluis@weareadaptive.com; Bernardo Salazar - bernardo@weareadaptive.com"
RUN mkdir -p /etc/nginx/ssl
WORKDIR /app

COPY --from=client_builder /app/build                       /usr/share/nginx/html/
COPY --from=client_builder /common                          /usr/share/nginx/html/common/
COPY --from=client_builder /app/scripts/nginx-boot.sh       /app/scripts/nginx-boot.sh
RUN chmod +x /app/scripts/nginx-boot.sh

CMD ["sh", "-c", "/app/scripts/nginx-boot.sh"]

# docker build --no-cache -t eu.gcr.io/adaptive-reactive-analytics/reactive-analytics-client:dev -f client/Dockerfile --build-arg DOMAIN_NAME="$domain_name.adaptivecluster.com" .
