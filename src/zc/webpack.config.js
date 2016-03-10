var path = require('path')
var config = require('../../webpack.dev.js')

config.entry = {
  'zc.main': [path.join(__dirname, '/zc.main.js')],
  'zc.detail': [path.join(__dirname, '/zc.detail.js')],
  'zc.progress': [path.join(__dirname, '/zc.progress.js')],
  'zc.search': [path.join(__dirname, '/zc.search.js')],
  'zc.category': [path.join(__dirname, '/zc.category.js')],
  'zc.comment': [path.join(__dirname, '/zc.comment.js')]
}

// add hot-reload related code to entry chunks
var devServer = 'webpack/hot/dev-server'
var WebpackDevServer = 'webpack-dev-server/client?http://localhost:8050'
Object.keys(config.entry).forEach(function (name) {
  var extras = [devServer, WebpackDevServer]
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config
