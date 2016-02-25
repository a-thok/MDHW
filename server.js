var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");

for (var prop in config.entry) {
  config.entry[prop].unshift("webpack/hot/dev-server")
  config.entry[prop].unshift("webpack-dev-server/client?http://localhost:8080")
}
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  historyApiFallback: false,
  stats: {
    colors: true
  },
  // noInfo: true,
  publicPath: '/',
  proxy: {
    // 转发api数据
    "*": {
      target: "http://192.168.2.17:8085",
      secure: false,
      bypass: function (req, res, proxyOptions) {
        if (req.headers.accept.indexOf('html') !== -1) {
          if (req.path !== '/login') {
            return req.path;
          }
        }
      }
    }
  },
});
server.listen(8080);