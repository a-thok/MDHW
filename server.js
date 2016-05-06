const webpack = require('webpack');
const config = require('./webpack.dev.js');
const compiler = webpack(config);

const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname)));
app.set('port', (process.env.PORT || 8080));

const webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  },
  noInfo: true,
  publicPath: config.output.publicPath
}));

const webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));

const proxy = require('proxy-middleware');
const url = require('url');
app.use('/Dict', proxy(url.parse('http://192.168.2.133:8085/Dict')));
app.use('/m/main', proxy(url.parse('http://192.168.2.133:8085/m/main')));
app.use('/m/HR', proxy(url.parse('http://192.168.2.133:8086/m/HR')));
app.use('/m/ZC', proxy(url.parse('http://192.168.2.133:8088/m/ZC')));
app.use('/m/ZB', proxy(url.parse('http://192.168.2.133:8090/m/ZB')));
app.use('/m/Zckj', proxy(url.parse('http://192.168.2.133:8091/m/Zckj')));
app.use('/m/DIY', proxy(url.parse('http://192.168.2.133:8092/m/DIY')));
app.use('/m/Srdz', proxy(url.parse('http://192.168.2.133:8093/m/Srdz')));
app.use('/m/Kj', proxy(url.parse('http://192.168.2.133:8087/m/Kj')));
app.use('/m/sys', proxy(url.parse('http://192.168.2.133:8085/m/sys')));
app.use('/m/user', proxy(url.parse('http://192.168.2.133:8085/m/user')));
app.use('/m/login', proxy(url.parse('http://192.168.2.133:8085/m/login')));
app.use('/m/reg', proxy(url.parse('http://192.168.2.133:8085/m/reg')));
app.use('/m/Third', proxy(url.parse('http://192.168.2.133:8085/m/Third')));

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${app.get('port')}`);
});
