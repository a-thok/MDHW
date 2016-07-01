const path = require('path');
const webpack = require('webpack');
const postcssImporter = require('postcss-import');
const stylelint = require('stylelint');
const postcssCssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

const PRODUCTION = process.env.NODE_ENV === 'production';  // 判断打包到内网还是外网
console.log(process.env.NODE_ENV);

const config = {
  entry: {
    'common': ['normalize.css', 'es6-promise', 'whatwg-fetch', 'fastclick'],
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
    'gsss': [path.join(__dirname, 'src/gsss')],
    'company': [path.join(__dirname, 'src/company')],
    'sbcs': [path.join(__dirname, 'src/sbcs')],
    'person': [path.join(__dirname, 'src/person')]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
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
      'xhr': 'xhr.js',
      'overflow': 'overflow.js',
      'goTop': 'goTop.js',
      'showMenu': 'showMenu.js',
      'share': 'share.js',
      'favorite': 'favorite.js'
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel!eslint',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?sourceMap',
        query: {
          limit: 10000,
          name: 'font/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?sourceMap',
        query: {
          name: 'img/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js', Infinity),
    new webpack.DefinePlugin({
      // __SERVER__: !PRODUCTION,
      // __DEVELOPMENT__: !PRODUCTION,
      // __DEVTOOLS__: !PRODUCTION,
      CDN_HOST: PRODUCTION ? JSON.stringify('cdn.dreamhiway.com') : JSON.stringify('192.168.2.10:81'),
      UPLOAD_HOST: JSON.stringify('upload.dreamhiway.com'),
      MAIN_HOST: PRODUCTION ? JSON.stringify('www.dreamhiway.com') : JSON.stringify('192.168.2.18:8085'),
      HR_HOST: PRODUCTION ? JSON.stringify('hr.dreamhiway.com') : JSON.stringify('192.168.2.18:8086'),
      ZC_HOST: PRODUCTION ? JSON.stringify('zc.dreamhiway.com') : JSON.stringify('192.168.2.18:8088'),
      ZB_HOST: PRODUCTION ? JSON.stringify('zb.dreamhiway.com') : JSON.stringify('192.168.2.18:8090'),
      ZCKJ_HOST: PRODUCTION ? JSON.stringify('zckj.dreamhiway.com') : JSON.stringify('192.168.2.18:8091'),
      DIY_HOST: PRODUCTION ? JSON.stringify('diy.dreamhiway.com') : JSON.stringify('192.168.2.18:8092'),
      SRDZ_HOST: PRODUCTION ? JSON.stringify('srdz.dreamhiway.com') : JSON.stringify('192.168.2.18:8093'),
      KJ_HOST: PRODUCTION ? JSON.stringify('kj.dreamhiway.com') : JSON.stringify('192.168.2.18:8087'),
      SBCS_HOST: PRODUCTION ? JSON.stringify('tmall.dreamhiway.com') : JSON.stringify('192.168.2.29:8097'),
      'process.env': {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  postcss(webpack) {
    return [
      postcssImporter({
        addDependencyTo: webpack
      }),
      stylelint(),
      postcssCssnext(),
      postcssReporter({
        clearMessages: true
        // throwError: true
      })
    ];
  }
};

// add shared js and css to common chunck
const BASE_CSS_PATH = path.join(__dirname, './src/common/css/base.css');
const PATH_ARRAY = ['func', 'render', 'filter', 'slider', 'doSearch', 'goToSearch', 'xhr', 'overflow', 'goTop', 'showMenu', 'share', 'favorite']
  .map((item) => path.join(__dirname, `./src/common/js/${item}.js`));
config.entry.common.push(BASE_CSS_PATH);
config.entry.common = config.entry.common.concat(PATH_ARRAY);

module.exports = config;
