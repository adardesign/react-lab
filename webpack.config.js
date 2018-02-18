const path = require("path");
const WebpackMonitor = require("webpack-monitor");
const webpack = require("webpack");
const config = {
  entry: ["babel-polyfill", "./src/components/Index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
  },
  plugins: [
    new WebpackMonitor({
      capture: true,
      launch: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /node_modules/,
      compressor: {
        warnings: false
      }
    })
  ]
};
module.exports = config;
