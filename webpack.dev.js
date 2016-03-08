var webpack = require('webpack')
var config = require('./webpack.config.js')

// eval-source-map is faster for development
config.devtool = 'eval-source-map'

config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
])

module.exports = config
