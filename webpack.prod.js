/* global __dirname */

var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

config.entry = {
  'rczp.company': [path.join(__dirname, 'src/rczp/rczp.company.js')],
  'rczp.search': [path.join(__dirname, 'src/rczp/rczp.search.js')],
  'zc.index': [path.join(__dirname, 'src/zc/zc.index.js')],
  'zc.detail': [path.join(__dirname, 'src/zc/zc.detail.js')],
  'zc.progress': [path.join(__dirname, 'src/zc/zc.progress.js')]
}

config.output.publicPath = '//cdn.dreamhiway.com/static/'

config.module.loaders[0].loader = ExtractTextPlugin.extract('style', 'css!postcss')

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: 'js/common.js',
    chunks: ['rczp.company', 'rczp.search']
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('css/[name].css')
])

module.exports = config
