const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/css/style.css', './src/js/script.js'],
    header: './src/js/header.js',
    'mobile-menu': './src/js/mobile-menu.js'
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
      template: './src/pages/index.html',
      filename: 'index.html',
      chunks: ['main', 'header', 'mobile-menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
      chunks: ['main', 'header', 'mobile-menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',
      filename: 'contact.html',
      chunks: ['main', 'header', 'mobile-menu']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'images' }
      ]
    })
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
};
