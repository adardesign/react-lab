import webpack from "webpack";

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname+"/dist/",
    filename: "bundle.js"
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
  plugins: []
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname+"/dist/",
    filename: "server.js"
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
  plugins: []
};

module.exports = [browserConfig, serverConfig];
