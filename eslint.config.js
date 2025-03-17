const { FlatCompat } = require('@eslint/eslintrc')
const compat = new FlatCompat()

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      // ecmaFeatures: {
      //   jsx: true,
      // },
      globals: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
        cypress: true,
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
      jest: require('eslint-plugin-jest'),
      cypress: require('eslint-plugin-cypress'),
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['webpack.config.js', 'node_modules/*', 'dist/*'],
  },
  ...compat.extends('plugin:react/recommended'),
]
