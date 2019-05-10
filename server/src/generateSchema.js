// This is a standalone script - no point in translating to TS
Object.defineProperty(exports, '__esModule', { value: true })
require('reflect-metadata')
const fs = require('fs')
const type_graphql = require('type-graphql')
const graphql_js = require('graphql')
const path = require('path')

;(async () => {
  require('child_process').execSync(`cd ${path.join(__dirname, '..')} && tsc`)
  const schema = await type_graphql.buildSchema({
    resolvers: [path.normalize(`${__dirname}/../lib/graph-ql/**/*.resolver.js`)],
  })
  const sdl = graphql_js.printSchema(schema)
  const filePath = path.join(__dirname, '..', 'schema.graphql')
  fs.writeFileSync(filePath, sdl)
  // create the __generated__ folder in client if it does not exist
  const generatedFolder = path.join(__dirname, '..', '..', 'client', 'src', '__generated__')
  if (!fs.existsSync(generatedFolder)) {
    fs.mkdirSync(generatedFolder)
  }
})()
