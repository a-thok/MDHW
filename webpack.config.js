/* global __dirname */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  // externals: {},
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'font/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash:7]'
        }
      },
      // {
      //   test: require.resolve('angular'),
      //   loader: 'expose?angular'
      // },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
  postcss: function (webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('stylelint')(),
      require('postcss-cssnext')(),
      require('stylelint/node_modules/postcss-reporter')({
        clearMessages: true,
        // throwError: true
      })
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
