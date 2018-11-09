module.exports = {
  parserOptions: {
    "ecmaVersion": 2017
  },
  env: {
    "es6": true
  },
  // rules: {
  //   'arrow-parens': ['error', 'always']
  // },
  overrides: [
    {
      files: [ 'src/*.js' ],
      rules: {
        'arrow-parens': ['warn', 'always']
      }
    }
  ]
}