'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PRODUCTION = process.env.NODE_ENV !== 'development'; // 判断测试还是打包
const RELEASE = process.env.NODE_ENV === 'production';  // 判断打包到内网还是外网
console.log(process.env.NODE_ENV);

let publicPath;
if (process.env.NODE_ENV === 'development') {
  publicPath = '/';
} else {
  if (process.env.NODE_ENV === 'production') {
    publicPath = '//cdn.dreamhiway.com/mstatic/';
  } else {
    publicPath = 'http://192.168.2.10:81/mstatic/';
  }
}

const config = {
  entry: {
    'common': ['font-awesome/css/font-awesome.css', 'es6-promise', 'whatwg-fetch', 'fastclick'],
    'rczp': [path.join(__dirname, 'src/rczp')],
    'kjfw': [path.join(__dirname, 'src/kjfw')],
    'zc': [path.join(__dirname, 'src/zc')],
    'zckj': [path.join(__dirname, 'src/zckj')],
    'zb': [path.join(__dirname, 'src/zb')],
    'cysj': [path.join(__dirname, 'src/cysj')],
    'srdz': [path.join(__dirname, 'src/srdz')],
    'cqbh': [path.join(__dirname, 'src/cqbh')],
    'uc': [path.join(__dirname, 'src/uc')],
    'home': [path.join(__dirname, 'src/home')],
    'zxsj': [path.join(__dirname, 'src/zxsj')],
    'gsss': [path.join(__dirname, 'src/gsss')]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath,
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
      'goToSearch': 'goToSearch.js',
      'xhr': 'xhr.js'
    }
  },
  devtool: PRODUCTION ? 'source-map' : 'cheap-source-map',
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
    new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js', Infinity),
    new webpack.DefinePlugin({
      __SERVER__: !PRODUCTION,
      __DEVELOPMENT__: !PRODUCTION,
      __DEVTOOLS__: !PRODUCTION,
      CDN_HOST: RELEASE ? JSON.stringify('upload.dreamhiway.com') : JSON.stringify('192.168.2.10:81'),
      MAIN_HOST: RELEASE ? JSON.stringify('www.dreamhiway.com') : JSON.stringify('192.168.2.177:8085'),
      HR_HOST: RELEASE ? JSON.stringify('hr.dreamhiway.com') : JSON.stringify('192.168.2.177:8086'),
      ZC_HOST: RELEASE ? JSON.stringify('zc.dreamhiway.com') : JSON.stringify('192.168.2.177:8088'),
      ZB_HOST: RELEASE ? JSON.stringify('zb.dreamhiway.com') : JSON.stringify('192.168.2.177:8090'),
      ZCKJ_HOST: RELEASE ? JSON.stringify('zckj.dreamhiway.com') : JSON.stringify('192.168.2.177:8091'),
      DIY_HOST: RELEASE ? JSON.stringify('diy.dreamhiway.com') : JSON.stringify('192.168.2.177:8092'),
      SRDZ_HOST: RELEASE ? JSON.stringify('srdz.dreamhiway.com') : JSON.stringify('192.168.2.177:8093'),
      KJ_HOST: RELEASE ? JSON.stringify('kj.dreamhiway.com') : JSON.stringify('192.168.2.177:8087'),
      'process.env': {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
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
