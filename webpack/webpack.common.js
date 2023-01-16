const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const excludeNodeModulesExcept = require('babel-loader-exclude-node-modules-except');
const transpile = ['react-router', 'react-router-dom'];

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    strictExportPresence: true,
    rules: [{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true
          }
        }],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?,|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    })
  ],
}