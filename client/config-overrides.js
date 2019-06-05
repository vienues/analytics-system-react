const path = require('path')
const fs = require('fs')

const rewireBabelLoader = require('react-app-rewire-babel-loader')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const rewireGqlTag = require('react-app-rewire-graphql-tag')

module.exports = function override(config, env) {
  config = rewireBabelLoader.include(rewireGqlTag(config, env), resolveApp('../common'))

  return config
}
