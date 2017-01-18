var config = require('./webpack.config.js')

config.entry = {
  'vuejs-paginator-axios': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VuePaginatorAxios',
  libraryTarget: 'umd'
}


module.exports = config
