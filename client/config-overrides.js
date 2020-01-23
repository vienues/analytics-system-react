const path = require('path')
const fs = require('fs')
const { babelInclude, override, useEslintRc } = require('customize-cra')
const rewireGqlTag = require('react-app-rewire-graphql-tag')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = override(
  rewireGqlTag,
  useEslintRc(resolveApp('../.eslintrc')),
  babelInclude([resolveApp('src'), resolveApp('../common')]),
)
