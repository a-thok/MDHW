module.exports = {
  root: true,
  
  'env': {
    'browser': true,
    'node': true
  },

  'ecmaFeatures': {
    'arrowFunctions': true,
    'destructuring': true,
    'classes': true,
    'defaultParams': true,
    'blockBindings': true,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'restParams': true,
    'spread': true,
    'forOf': true,
    'generators': true,
    'templateStrings': true,
    'superInFunctions': true,
    'experimentalObjectRestSpread': true
  },
  
  extends: 'standard',
  
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow trailing spaces in blank lines
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    'space-before-function-paren': [2, {"anonymous": "always", "named": "never"}]
  }
}
