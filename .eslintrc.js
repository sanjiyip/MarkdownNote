module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  rules: {
    strict: 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': 'off'
  }
};
