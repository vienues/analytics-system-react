const cssnano = require('cssnano');
const customProperties = require('postcss-css-variables');
const cssImport = require('postcss-import');
const cssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    cssImport(),
    cssNesting(),
    cssnano({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: 'last 2 versions'
      },
      discardComments: {
        removeAll: true
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: true
    }),
    customProperties()
  ]
};