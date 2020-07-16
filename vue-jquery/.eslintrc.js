module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: "off",
    quotes: "off",
    "comma-dangle": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "arrow-parens": "off",
    "max-len": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off"
  },
};
