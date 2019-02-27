const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'server-dist'),
    filename: 'server-bundle.js'
  },
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader')
        }
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  },
};