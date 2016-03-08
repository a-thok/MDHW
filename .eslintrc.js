module.exports = {
  root: true,

  'env': {
    'browser': true,
    'node': true
  },

  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },

  'extends': 'standard',

  plugins: [
    'html',// required to lint *.vue files
    'standard'
  ],

  'globals': {
    // '$': true
  },

  'rules': {
    'arrow-parens': 0,// allow paren-less arrow functions
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,// allow debugger during development
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],// allow trailing spaces in blank lines
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }]
  }
}
