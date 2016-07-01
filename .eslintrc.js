module.exports = {
  'extends': 'airbnb',
  
  'rules': {
    "comma-dangle": [2, "never"],
    "no-console": 0,
    "no-param-reassign": 0,
    // "object-shorthand": 0,
    "max-len": 0,
    // "consistent-return": 0,
    "no-shadow": 0,
    "no-alert": 0,
    "quote-props": 0,
    // "strict": 0,
    // "prefer-const": 0,
    "func-names": 0,
    "react/prop-types": 0,
    // "no-case-declarations": 0,
    "react/jsx-first-prop-new-line": 0,
    "import/no-unresolved": 0,
    "jsx-a11y/img-has-alt": 0,
    "no-useless-escape": 0
  },
  
  'globals': {
    CDN_HOST: true,
    UPLOAD_HOST: true,
    MAIN_HOST: true,
    HR_HOST: true,
    ZC_HOST: true,
    ZB_HOST: true,
    ZCKJ_HOST: true,
    DIY_HOST: true,
    SRDZ_HOST: true,
    SBCS_HOST: true,
    KJ_HOST: true
  }
}
