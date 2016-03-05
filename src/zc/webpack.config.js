/* global __dirname */

var path = require('path')
var config = require("../../webpack.dev.js")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

config.entry = {
  'zc.main': [path.join(__dirname, '/zc.main.js')],
  'zc.detail': [path.join(__dirname, '/zc.detail.js')],
  'zc.progress': [path.join(__dirname, '/zc.progress.js')]
};

// add hot-reload related code to entry chunks
var devServer = 'webpack/hot/dev-server'
var WebpackDevServer = 'webpack-dev-server/client?http://localhost:8050'
Object.keys(config.entry).forEach(function (name) {
  var extras = [devServer, WebpackDevServer]
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config
