const webpack = require('webpack');
const config = require('./webpack.config.js');

const hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
Object.keys(config.entry).forEach((name) => {
  config.entry[name] = [hotClient].concat(config.entry[name]);
});

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
