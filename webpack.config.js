const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    common: "@/js/common.js",
    top: "@/js/index.js",
    about: "@/about/js/index.js",
    work: "@/work/js/index.js",
    skill: "@/skill/js/index.js",
    contact: "@/contact/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    strictModuleErrorHandling: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["common", "top"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/about/index.html",
      filename: "about.html",
      chunks: ["common", "about"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/work/index.html",
      filename: "work.html",
      chunks: ["common", "work"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/skill/index.html",
      filename: "skill.html",
      chunks: ["common", "skill"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact/index.html",
      filename: "contact.html",
      chunks: ["common", "contact"]
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  mode: "development",
  devServer: {
    static: ["dist"],
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
            ],
            plugins: [
              ["@babel/plugin-transform-strict-mode", { "strict": true }],
            ],
          },
        },
      },
    ],
  },
  target: ["web", "es5"],
};