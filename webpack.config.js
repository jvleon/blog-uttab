var path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
      filename: 'build/bundle.js',
      path: __dirname
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
