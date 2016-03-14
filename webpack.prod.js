var webpack = require('webpack')
var config = require('./webpack.config.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

config.output.publicPath = '//cdn.dreamhiway.com/static/'

config.module.loaders[0].loader = ExtractTextPlugin.extract('style', 'css!postcss')

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.CommonsChunkPlugin('mdhw.js'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('css/[name].css')
])

module.exports = config
