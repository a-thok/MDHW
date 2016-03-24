var webpack = require('webpack')
var config = require('./webpack.dev.js')
var compiler = webpack(config)

var express = require('express')
var path = require('path')
var app = express()
app.use('/', express.static(path.join(__dirname)))
app.set('port', (process.env.PORT || 8080))

var webpackDevMiddleware = require('webpack-dev-middleware')
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  },
  noInfo: true,
  publicPath: config.output.publicPath
}))

var webpackHotMiddleware = require('webpack-hot-middleware')
app.use(webpackHotMiddleware(compiler))

var proxy = require('proxy-middleware')
var url = require('url')
app.use('/Dict', proxy(url.parse('http://192.168.2.145:8085/Dict')))
app.use('/m/main', proxy(url.parse('http://192.168.2.177:8085//m/main')))
app.use('/m/HR', proxy(url.parse('http://192.168.2.177:8086//m/HR')))
app.use('/m/ZC', proxy(url.parse('http://192.168.2.177:8088//m/ZC')))
app.use('/m/ZB', proxy(url.parse('http://192.168.2.177:8090//m/ZB')))
app.use('/m/MS', proxy(url.parse('http://192.168.2.177:8091//m/MS')))
app.use('/m/DIY', proxy(url.parse('http://192.168.2.177:8092//m/DIY')))
app.use('/m/Srdz', proxy(url.parse('http://192.168.2.177:8093//m/Srdz')))

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + app.get('port'))
})
