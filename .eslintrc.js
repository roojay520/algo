module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  root: true,
  rules: { '@typescript-eslint/rule-name': 'error' },
};
