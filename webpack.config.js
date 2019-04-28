'use strict'


module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + './src/public/assets/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};