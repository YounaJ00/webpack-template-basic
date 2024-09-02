const { plugin } = require("postcss");

module.exports = {
  presets: ['@babel/preset-env'],
  plugin: [
    '@babel/plugin-transform-runtime'
  ]
}