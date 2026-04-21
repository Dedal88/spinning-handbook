const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/css/style.css', './src/js/script.js'],
    styles: ['./src/css/style.css'],
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]'
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 55
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
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
      chunks: ['styles', 'header', 'mobile-menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',
      filename: 'contact.html',
      chunks: ['styles', 'header', 'mobile-menu']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: 'src/assets/images', 
          to: 'images',
          globOptions: {
            ignore: ['**/fon1.jpg', '**/fon2.jpg', '**/fon3.jpg']
          }
        }
      ]
    })
  ],
  performance: {
    maxAssetSize: 1500000, 
    maxEntrypointSize: 1500000,
    hints: 'warning'
  },
  devServer: {
    static: './dist',
    hot: true,
  },
};
