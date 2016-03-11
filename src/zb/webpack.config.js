var path = require('path')
var config = require('../../webpack.dev.js')

config.entry = {
  'zb.main': [path.join(__dirname, '/zb.main.js')]
}

// add hot-reload related code to entry chunks
var devServer = 'webpack/hot/dev-server'
var WebpackDevServer = 'webpack-dev-server/client?http://localhost:8053'
Object.keys(config.entry).forEach(function (name) {
  var extras = [devServer, WebpackDevServer]
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config
