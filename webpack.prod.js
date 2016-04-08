const webpack = require('webpack');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// config.output.publicPath = '//cdn.dreamhiway.com/mstatic/';
config.output.publicPath = 'http://192.168.2.10:81/mstatic/';

config.devtool = 'source-map';

config.module.loaders[0].loader = ExtractTextPlugin.extract('style', 'css!postcss');
config.module.loaders[2].loader = 'url';
config.module.loaders[3].loader = 'file';

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('css/[name].css')
]);

module.exports = config;
