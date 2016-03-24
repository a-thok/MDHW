var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    'common': ['font-awesome/css/font-awesome.css', 'es6-promise', 'whatwg-fetch', 'fastclick', path.join(__dirname, './src/common/css/base.css')],
    'rczp': [path.join(__dirname, 'src/rczp/rczp.js')],
    'kjfw': [path.join(__dirname, 'src/kjfw/kjfw.js')],
    'zc': [path.join(__dirname, 'src/zc/zc.js')],
    'zckj': [path.join(__dirname, 'src/zckj/zckj.js')],
    'zb': [path.join(__dirname, 'src/zb/zb.js')],
    'cysj': [path.join(__dirname, 'src/cysj/cysj.js')],
    'srdz': [path.join(__dirname, 'src/srdz/srdz.js')]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css'],
    root: path.resolve('./src/common/js'),
    alias: {
      'func': 'func.js',
      'render': 'render.js',
      'slider': 'slider.js',
      'filter': 'filter.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?sourceMap',
        query: {
          limit: 10000,
          name: 'font/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js', Infinity)
  ],
  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('stylelint')(),
      require('postcss-cssnext')(),
      require('stylelint/node_modules/postcss-reporter')({
        clearMessages: true
        // throwError: true
      })
    ]
  }
}

;['func', 'render', 'filter', 'slider'].forEach((item) => {
  config.entry.common.push(path.join(__dirname, `./src/common/js/${item}.js`))
})

module.exports = config
