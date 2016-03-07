var config = require("./webpack.dev.js")

var serverConfig = {
  hot: true,
  inline: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false
  },
  // noInfo: true,
  publicPath: config.output.publicPath,
  proxy: {
    "*": {
      target: "http://192.168.2.17:8086",
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
}

module.exports = serverConfig
