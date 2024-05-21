module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 'warn',
    eqeqeq: 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },
  globals: {
    process: 'readonly',
    NodeJS: 'readonly'
  }
};
