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


const env = process.env.NODE_ENV === "testing" ? testEnv : config.build.env;

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? 'source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    publicPath: ['/', pp.aliasName, '/'].join('')
  },
  optimization: {
    // minimize: true,
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendor",
    //       chunks: "all"
    //     }
    //   }
    // },
    // minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new VueLoaderPlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),

    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'), //utils.assetsPath('css/[name].[contenthash].css')
      chunkFilename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunks: ['vendor', 'manifest', 'index'],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'auto'
    }),
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.demo,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunks: ['vendor', 'manifest', 'demo/index'],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'auto'
    }),
    // keep module.id stable when vender modules does not change
    new webpack.ids.HashedModuleIdsPlugin(),
    // split vendor js into its own file

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
    //       return false;
    //     }
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    // copy custom static assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: config.build.assetsSubDirectory,
          globOptions: {
            ignore: ['.*']
          }
        }
      ]
    })
  ]
})

if (config.build.productionGzip) {
  // const CompressionWebpackPlugin = require('compression-webpack-plugin')

  // webpackConfig.plugins.push(
  //   new CompressionWebpackPlugin({
  //     asset: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: new RegExp(
  //       '\\.(' +
  //       config.build.productionGzipExtensions.join('|') +
  //       ')$'
  //     ),
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  // )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = BundleAnalyzer.BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

export default webpackConfig
