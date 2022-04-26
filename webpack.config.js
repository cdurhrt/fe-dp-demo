const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./app-config.json');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: appConfig.title,
      // favicon: './public/favicon.ico',
    })
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
};