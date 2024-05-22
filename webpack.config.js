const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const baseManifest = require("./src/manifest.json");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
        },
      ],
    }),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
