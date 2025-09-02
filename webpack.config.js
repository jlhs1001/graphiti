const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ ".ts", ".js"],
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public", "static", "bundle"),
  },
  devServer: {
    // TODO: Fix reload issue
    // hot: "only",
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    watchFiles: ["src/**/*", "public/**/*"],
  },
  watchOptions: {
    ignored: ["**/node_modules"],
    poll: 1000,
  }
};