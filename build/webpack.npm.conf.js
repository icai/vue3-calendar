"use strict";
const path = require("path");
const webpack = require("webpack");
const utils = require("./utils");
const config = require("../config");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// @ts-ignore
const pp = require("../package");

const banner = [
  pp.aliasName + " v" + pp.version,
  "(c) " + new Date().getFullYear() + " " + pp.author,
  pp.homepage
].join("\n");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const env = config.npm.env;

function build(name) {
const minimize = !!name.match(/\.min/);
// @ts-ignore
let webpackConfig = merge(baseWebpackConfig, {
    mode: minimize ? 'production' : 'none',
    module: {
      rules: utils.styleLoaders({
        sourceMap: config.build.productionSourceMap,
        extract: true
      }, minimize)
    },
    output: {
      path: resolve("lib"),
      filename: name,
      libraryTarget: "umd",
      libraryExport: "default",
      library: "Calendar",
      umdNamedDefine: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css"
      }),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        "process.env": env
      }),

      new webpack.BannerPlugin(banner)
    ]
  });
  webpackConfig.entry = {};
  webpackConfig.entry[name.replace(/\.(js|vue)/, "")] =
    "./src/components/Calendar.vue";

  if (minimize) {
    webpackConfig = merge(webpackConfig, {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSPlugin({})
        ]
      },
      plugins: [
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        }),
        new CopyWebpackPlugin([{
          from: "./src/components/Calendar.vue",
          transform (content) {
            const fs = require('fs');
            const cssfile = fs.readFileSync(path.resolve(__dirname, './../lib/calendar.css'));
            return content.toString().replace(/<(style)[^>]*?>[\s\S]+<\/\1>/, (all, $1)=> {
              return `<${$1} lang="css">${cssfile}</${$1}>`
            }).replace(/~assets\/fonts/g, './fonts')
          }
        },{
          from: "./src/components/Calendar.vue",
          to: "[name].scss.[ext]",
          transform (content) {
            return content.toString().replace(/~assets\/fonts/g, './fonts')
          }
        },{
          from: "./src/assets/fonts/*",
          to: "fonts/",
          // @ts-ignore
          transformPath (targetPath, absolutePath) {
            return targetPath.replace('src/assets/fonts/', '');
          }
        }])
      ]
    });
  }
  return webpackConfig;
}

module.exports =  [build("calendar.js"), build("calendar.min.js")];
