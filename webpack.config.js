/* global __dirname */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  externals: {},
  devtool: 'eval-source-map',
  module: {
    //加载器配置
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=10000&name=font/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=img/[name].[ext]?[hash]'
      },
      // {
      //   test: require.resolve('angular'),
      //   loader: 'expose?angular'
      // },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new webpack.HotModuleReplacementPlugin(),
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
        // throwError: true,
        positionless: 'last'
      })
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
};