const path = require('path');

module.exports = {
  entry: {
    main: "@/js/common.js",
    // about: "./src/about/js/about.js",
    // work: "./src/work/js/work.js",
    // skill: "./src/skill/js/skill.js",
    // contact: "./src/contact/js/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    strictModuleErrorHandling: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
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