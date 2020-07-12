const merge = require("webpack-merge");
const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(), 
    new CopyWebpackPlugin({
    patterns: [{
      from: path.join(__dirname, 'public'),
      to: 'public'
    }]
  })],
});