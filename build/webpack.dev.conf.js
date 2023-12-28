import * as utils from "./utils.js";
import webpack from "webpack";
import config from "../config/index.js";
import { merge } from "webpack-merge";
import baseWebpackConfig from "./webpack.base.conf.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";


export default merge(baseWebpackConfig, {
  mode: "development",
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-cheap-module-source-map is faster for development
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.dev.index,
      template: "index.html",
      inject: true,
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: config.dev.demo,
      template: "index.html",
      inject: true,
      chunks: ["demo/index"]
    })
  ]
});
