var path = require('path');
var config = require("../../webpack.config.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.entry = {
  'rczp.company': [path.join(__dirname, '/rczp.company.js')],
  'rczp.search': [path.join(__dirname, '/rczp.search.js')]
};
config.plugins.push(new ExtractTextPlugin('css/rczp.css'))

module.exports = config;