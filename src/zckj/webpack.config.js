var path = require('path')
var config = require('../../webpack.dev.js')

config.entry = {
  'zckj.main': [path.join(__dirname, '/zckj.main.js')],
  'zckj.index': [path.join(__dirname, '/zckj.index.js')],
  'zckj.detail': [path.join(__dirname, '/zckj.detail.js')]
}

// add hot-reload related code to entry chunks
var devServer = 'webpack/hot/dev-server'
var WebpackDevServer = 'webpack-dev-server/client?http://localhost:8052'
Object.keys(config.entry).forEach(function (name) {
  var extras = [devServer, WebpackDevServer]
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config
