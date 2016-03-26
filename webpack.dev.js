const webpack = require('webpack');
const config = require('./webpack.config.js');

const hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
Object.keys(config.entry).forEach((name) => {
  const extras = [hotClient];
  config.entry[name] = extras.concat(config.entry[name]);
});

config.output.publicPath = '/';

config.devtool = 'eval-source-map';

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
