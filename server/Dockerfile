FROM node:11.10-alpine as builder
WORKDIR /app
COPY . .
RUN apk update && apk add git

# The server has a dependency on a git hosted package which uses a 'prepare' script to build the lib folder
# There is a bug in NPM which means that scripts are run as different user and consequently can not write
# files. The config setting below fixes this.
# More details here: https://github.com/npm/npm/issues/17346#issuecomment-320238079
RUN npm config set unsafe-perm true
RUN npm ci --network-concurrency 1
RUN npm run build

FROM node:11.10-alpine
WORKDIR /app
COPY --from=builder /app/lib                   ./lib
COPY --from=builder /app/node_modules          ./node_modules
COPY --from=builder /app/.graphqlconfig        ./
COPY --from=builder /app/graphql.config.json   ./
COPY --from=builder /app/.graphqlrc            ./
COPY --from=builder /app/app.json              ./
COPY --from=builder /app/package.json          ./

CMD ["npm", "run", "start:prod"]
