const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client-dist'),
    filename: 'client-bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'client-dist'),
    port: 3000,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './client/'), 'node_modules'],
    extensions: ['.js', '.json'],
	  enforceExtension: false,
	  enforceModuleExtension: false,
    alias: {
      components: path.resolve(__dirname, './client/components'),
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new CopyWebpackPlugin([
      { from: './client/assets', to: 'assets' },
    ]),
  ]
};