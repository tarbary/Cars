const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    rules: [ {
      test: /\.(jsx|js)?$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    } ]
  }

  // module: {
  //   loaders: [ {
  //     loader: 'babel-loader',
  //     options: {
  //       // test: /\.jsx?$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: 'babel-loader',
  //       query: {
  //         plugins: ['transform-runtime'],
  //         presets: ['es2015', 'stage-0', 'react']
  //       }
  //     }
  //   } ]
  // }
}
