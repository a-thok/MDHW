/* global __dirname */

var path = require('path');
var config = require("../../webpack.config.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.entry = {
  'zc.index': [path.join(__dirname, '/zc.index.js')]
};
config.plugins.push(new ExtractTextPlugin('css/zc.css'))

module.exports = config;