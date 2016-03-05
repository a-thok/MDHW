/* global __dirname */

var path = require('path')
var config = require("../../webpack.dev.js")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

config.entry = {
  'kjfw.index': [path.join(__dirname, '/kjfw.index.js')]
};

// add hot-reload related code to entry chunks
var devServer = 'webpack/hot/dev-server'
var WebpackDevServer = 'webpack-dev-server/client?http://localhost:8051'
Object.keys(config.entry).forEach(function (name) {
  var extras = [devServer, WebpackDevServer]
  config.entry[name] = extras.concat(config.entry[name])
})

config.module.loaders[0].loader = 'style!css!postcss'

module.exports = config
