var config = require("../../webpack.config.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.entry = {
  'rczp.company': [__dirname + '/rczp.company.js'],
  'rczp.search': [__dirname + '/rczp.search.js']
};
config.plugins.push(new ExtractTextPlugin('css/rczp.css'))

module.exports = config;