const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}

module.exports = {
  mode: 'none',
  entry: resolve('index.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: 'index.html'
    })
  ]
}
