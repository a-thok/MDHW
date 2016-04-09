'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PRODUCTION = process.env.NODE_ENV === 'production';
console.log(PRODUCTION);

const config = {
  entry: {
    'common': ['font-awesome/css/font-awesome.css', 'es6-promise', 'whatwg-fetch', 'fastclick'],
    'rczp': [path.join(__dirname, 'src/rczp/rczp.js')],
    'kjfw': [path.join(__dirname, 'src/kjfw/kjfw.js')],
    'zc': [path.join(__dirname, 'src/zc/zc.js')],
    'zckj': [path.join(__dirname, 'src/zckj/zckj.js')],
    'zb': [path.join(__dirname, 'src/zb/zb.js')],
    'cysj': [path.join(__dirname, 'src/cysj/cysj.js')],
    'srdz': [path.join(__dirname, 'src/srdz/srdz.js')],
    'cqbh': [path.join(__dirname, 'src/cqbh/cqbh.js')],
    'uc': [path.join(__dirname, 'src/uc/uc.js')],
    'home': [path.join(__dirname, 'src/home/home.js')],
    'zxsj': [path.join(__dirname, 'src/zxsj/zxsj.js')],
    'gsss': [path.join(__dirname, 'src/gsss/gsss.js')]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: PRODUCTION ? 'http://192.168.2.10:81/mstatic/' : '/', // '//cdn.dreamhiway.com/mstatic/'
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css'],
    root: path.resolve('./src/common/js'),
    alias: {
      'func': 'func.js',
      'render': 'render.js',
      'slider': 'slider.js',
      'filter': 'filter.js',
      'doSearch': 'doSearch.js',
      'goToSearch': 'goToSearch.js'
    }
  },
  devtool: PRODUCTION ? 'source-map' : 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: PRODUCTION ? ExtractTextPlugin.extract('style', 'css!postcss') : 'style!css?sourceMap!postcss'
      },
      {
        test: /\.jsx?$/,
        loader: PRODUCTION ? 'babel' : 'babel!eslint',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: PRODUCTION ? 'url' : 'url?sourceMap',
        query: {
          limit: 10000,
          name: 'font/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: PRODUCTION ? 'file' : 'url?sourceMap',
        query: {
          name: 'img/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js', Infinity)
  ],
  postcss: function (webpack) {
    return PRODUCTION ? [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')()
    ] : [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('stylelint')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')({
        clearMessages: true
        // throwError: true
      })
    ];
  }
};

// add shared js and css to common chunck
const BASE_CSS_PATH = path.join(__dirname, './src/common/css/base.css');
const PATH_ARRAY = ['func', 'render', 'filter', 'slider', 'doSearch']
  .map((item) => path.join(__dirname, `./src/common/js/${item}.js`));
config.entry.common.push(BASE_CSS_PATH);
config.entry.common = config.entry.common.concat(PATH_ARRAY);

// add different plugins for production and development
let extraPlugins;
if (PRODUCTION) {
  extraPlugins = [
    new CleanPlugin('dist'),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __SERVER__: !PRODUCTION,
      __DEVELOPMENT__: !PRODUCTION,
      __DEVTOOLS__: !PRODUCTION,
      'process.env': {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ];
} else {
  const hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
  Object.keys(config.entry).forEach((name) => {
    config.entry[name] = [hotClient].concat(config.entry[name]);
  });

  extraPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}
config.plugins = config.plugins.concat(extraPlugins);

module.exports = config;
