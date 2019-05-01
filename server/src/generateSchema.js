// This is a standalone script - no point in translating to TS
Object.defineProperty(exports, '__esModule', { value: true })
require('reflect-metadata')
const fs = require('fs')
const type_graphql = require('type-graphql')
const graphql_js = require('graphql')

;(async () => {
  const schema = await type_graphql.buildSchema({
    resolvers: [`${__dirname}\\..\\lib\\GraphQL\\**\\*.resolver.js`],
  })
  const sdl = graphql_js.printSchema(schema)
  fs.writeFileSync(__dirname + '\\..\\schema.graphql', sdl)
})()
