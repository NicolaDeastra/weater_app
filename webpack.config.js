const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryPath = path.join(__dirname, '/public/js');
const outputPath = path.join(__dirname, '/dist');

module.exports = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
};
