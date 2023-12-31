// esm
import path from "path";
import * as utils from "./utils.js";
import config from "../config/index.js";
import { merge } from "webpack-merge";
import baseWebpackConfig from "./webpack.base.conf.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";

import BundleAnalyzer from "webpack-bundle-analyzer";
import pp from "../package.json" assert {type:'json'};
import testEnv from "../config/test.env.js";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const env = process.env.NODE_ENV === "testing" ? testEnv : config.doc.env;

const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.doc.productionSourceMap,
      extract: true
    })
  },
  devtool: config.doc.productionSourceMap ? "source-map" : false,
  output: {
    path: config.doc.assetsRoot,
    filename: utils.assetsPath("js/[name].[chunkhash].js"),
    chunkFilename: utils.assetsPath("js/[id].[chunkhash].js"),
    publicPath: ["/", pp.aliasName, "/"].join("")
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    minimizer: [new CssMinimizerPlugin()]
  },
  plugins: [
    new VueLoaderPlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      "process.env": env
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath("css/[name].[contenthash].css"), //utils.assetsPath('css/[name].[contenthash].css')
      chunkFilename: utils.assetsPath("css/[name].[contenthash].css")
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename:
        process.env.NODE_ENV === "testing" ? "index.html" : config.doc.index,
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunks: ["vendor", "manifest", "index"],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: "auto"
    }),
    new HtmlWebpackPlugin({
      filename:
        process.env.NODE_ENV === "testing" ? "index.html" : config.doc.demo,
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunks: ["vendor", "manifest", "demo/index"],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: "auto"
      // Allows to control how chunks should be sorted before they are included to the html.
      // Allowed values: 'none' | 'auto' | 'dependency' |'manual' | {function} - default: 'auto'
    }),
    // keep module.id stable when vender modules does not change
    new webpack.ids.HashedModuleIdsPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: config.doc.assetsSubDirectory,
          globOptions: {
            ignore: ['.*']
          }
        }
      ]
    })
  ]
});

if (config.doc.productionGzip) {
  const CompressionWebpackPlugin = require("compression-webpack-plugin");

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp(
        "\\.(" + config.doc.productionGzipExtensions.join("|") + ")$"
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.doc.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = BundleAnalyzer.BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

export default webpackConfig;
