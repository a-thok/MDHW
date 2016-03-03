/* global __dirname */

var path = require('path')
var config = require("../../webpack.dev.js")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

config.entry = {
  'zc.index': [path.join(__dirname, '/zc.index.js')]
};

// add hot-reload related code to entry chunks
var devServer = 'webpack/hot/dev-server'
var WebpackDevServer = 'webpack-dev-server/client?http://localhost:8050'
Object.keys(config.entry).forEach(function (name) {
  var extras = [devServer, WebpackDevServer]
  config.entry[name] = extras.concat(config.entry[name])
})

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('css/zc.css')
])

module.exports = config
