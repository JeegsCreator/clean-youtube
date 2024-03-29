const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const baseManifest = require("./src/manifest.json");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");

module.exports = {
  mode: "production",
  entry: {
    home: "./src/routes/home/index.js",
    profile: "./src/routes/profile/index.js",
    watch: "./src/routes/watch/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Clean Youtube", // change this to your app title
    //   meta: {
    //     charset: "utf-8",
    //     viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    //     "theme-color": "#000000"
    //   },
    //   manifest: "manifest.json",
    //   filename: "index.html",
    //   template: "./static/index.html",
    //   hash: true
    // }),
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
