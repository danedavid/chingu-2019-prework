const path = require('path');
const nodeExternals = require('webpack-node-externals');

const client = {
  entry: './client/App.js',
  output: {
    path: path.resolve(__dirname, 'client-dist'),
    filename: 'js/bundle.js'
  },
  // 'mode' option - new in Webpack 4
  mode: 'development',
  module: {
    rules: [
      // Babel loader for compiling JSX
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
};

const server = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'server-dist'),
    filename: 'server-bundle.js'
  },
  // 'mode' option - new in Webpack 4
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      // Babel loader for compiling JSX
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

module.exports = [client, server];