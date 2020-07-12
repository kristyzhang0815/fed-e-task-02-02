const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./public",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "vue-style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "vue-style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /.png$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            name: "[name].[ext]",
            limit: 10 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "作业",
      BASE_URL: "/public/",
      template: "./public/index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/style.css",
    }),
  ],
};
