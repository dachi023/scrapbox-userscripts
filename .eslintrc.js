module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  globals: {
    $: false,
    scrapbox: false,
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
