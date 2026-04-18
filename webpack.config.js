const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/css/styles.css', './script.js'],
    header: './header.js',
    'mobile-menu': './mobile-menu.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './about.html',
      filename: 'about.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './contact.html',
      filename: 'contact.html',
      chunks: ['main']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'Images', to: 'Images' }
      ]
    })
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
};
