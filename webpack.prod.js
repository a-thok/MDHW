const webpack = require('webpack');
const config = require('./webpack.config.js');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImporter = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');

const PRODUCTION = process.env.NODE_ENV === 'production';  // 判断打包到内网还是外网

config.output.publicPath = PRODUCTION ? '//cdn.dreamhiway.com/mstatic/' : 'http://192.168.2.80:81/mstatic/';

config.devtool = 'source-map';

config.module.loaders[0].loader = ExtractTextPlugin.extract('css!postcss');
config.module.loaders[1].loader = 'babel';
config.module.loaders[2].loader = 'url';
config.module.loaders[3].loader = 'file';

config.plugins = (config.plugins || []).concat([
  new CleanPlugin('dist'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('css/[name].css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

config.postcss = function (webpack) {
  return [
    postcssImporter({
      addDependencyTo: webpack
    }),
    postcssCssnext()
  ];
};

module.exports = config;
