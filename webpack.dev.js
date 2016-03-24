var webpack = require('webpack')
var config = require('./webpack.config.js')

var hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true'
Object.keys(config.entry).forEach(function (name) {
  var extras = [hotClient]
  config.entry[name] = extras.concat(config.entry[name])
})

config.output.publicPath = '/'

config.devtool = 'eval-source-map'

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
])

module.exports = config
