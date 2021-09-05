const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/artsy.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
            // presets: ['@babel/preset-env', '@babel/react'] // now it's telling me i have the wrong version
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};