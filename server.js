var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.dev.js')

var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
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
    // '*': {
    //   target: 'http://192.168.2.17:8086',
    //   secure: false,
    //   bypass: function (req, res, proxyOptions) {
    //     if (req.headers.accept.indexOf('html') !== -1) {
    //       if (req.path !== '/login') {
    //         return req.path;
    //       }
    //     }
    //   }
    // },
    '/Dict/City*': {
      target: 'http://192.168.2.145:8085',
      secure: false
    },
    '/m/HR/*': {
      target: 'http://192.168.2.177:8086',
      secure: false
    },
    '/m/ZC/*': {
      target: 'http://192.168.2.177:8088',
      secure: false
    },
    '/m/MS/*': {
      target: 'http://192.168.2.177:8091',
      secure: false
    },
    '/m/DIY/*': {
      target: 'http://192.168.2.177:8092',
      secure: false
    },
    '/m/ZB/*': {
      target: 'http://192.168.2.177:8090',
      secure: false
    },
    '/m/main/*': {
      target: 'http://192.168.2.177:8085',
      secure: false
    },
    '/m/Srdz/*': {
      target: 'http://192.168.2.177:8093',
      secure: false
    }
  }
})

server.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080')
})
