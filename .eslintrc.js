module.exports = {
  env: {
    node: true,
    es6: true,
    browser: false
  },
  extends: ['airbnb', 'eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: [],
  rules: {
    'import/newline-after-import': ['off', { count: 2 }],
    'eslint.autoFixOnSave': true,
    'eslint.alwaysShowStatus': true,
    'constructor-super': 'warn',
    'no-this-before-super': 'warn'
  }
}
