const path = require('path')
const fs = require('fs')
const { babelInclude, override } = require('customize-cra')
const rewireGqlTag = require('react-app-rewire-graphql-tag')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = override(rewireGqlTag, babelInclude([resolveApp('src'), resolveApp('../common')]))
