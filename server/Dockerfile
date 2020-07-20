FROM node:11.10-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci --network-concurrency 1
RUN npm run build

FROM node:11.10-alpine
WORKDIR /app
COPY --from=builder /app/lib                   ./lib
COPY --from=builder /app/node_modules          ./node_modules
COPY --from=builder /app/.graphqlconfig        ./
COPY --from=builder /app/graphql.config.json   ./
COPY --from=builder /app/.graphqlrc            ./
COPY --from=builder /app/package.json          ./

CMD ["npm", "run", "start:prod"]
