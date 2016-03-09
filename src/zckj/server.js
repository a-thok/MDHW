var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js')

var compiler = webpack(config)
var serverConfig = require('../../server.config.js')

var server = new WebpackDevServer(compiler, serverConfig)

server.listen(8052, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8052')
})
