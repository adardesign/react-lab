import webpack from "webpack";
import { ReactLoadablePlugin } from 'react-loadable/webpack';

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname+"/dist/client/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  },
  plugins: [
  new webpack.BannerPlugin({
      banner: "__isBrowser__ = true;",
      raw: true,
      include: /\.js$/
    }),
  new ReactLoadablePlugin({
      filename: './dist/cleint-react-loadable.json',
    })

  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname+"/dist/server/",
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
    module: {
    rules: [
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "__isBrowser__ = false;",
      raw: true,
      include: /\.js$/
    })
  ]
};

module.exports = [browserConfig, serverConfig];
