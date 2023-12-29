import path from "path";
import * as utils from "./utils.js";
import config from "../config/index.js";
import { merge } from "webpack-merge";
import baseWebpackConfig from "./webpack.base.conf.js";
import { VueLoaderPlugin } from "vue-loader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import pp from "../package.json" assert {type:'json'};
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


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
        minimize: true,
        minimizer: [
          new TerserPlugin(),
          new CssMinimizerPlugin({})
        ]
      },
      externals: {
        vue: 'Vue'
      },
      plugins: [
        new CopyWebpackPlugin({
          patterns: [{
            from: "./src/components/Calendar.vue",
            transform (content) {
              const cssfile = fs.readFileSync(path.resolve(__dirname, './../lib/calendar.css'));
              // @/directives/transfer replace to ./directives/transfer
              return content.toString()
              .replace(/@\/directives\/transfer/g, './directives/transfer')
              .replace(/<(style)[^>]*?>[\s\S]+<\/\1>/, (all, $1)=> {
                return `<${$1} lang="css">${cssfile}</${$1}>`
              })
            }
          }, {
            // copy uitls
            from: "./src/utils",
            to: "./utils",
            info: { minimized: false },
          }, {
            // copy lang
            from: "./src/locale",
            to: "./locale",
            info: { minimized: false },
          }, {
            // copy directives
            from: "./src/directives",
            to: "./directives",
            info: { minimized: false },
          }]
        })
      ]
    });
  }
  return webpackConfig;
}

export default [build("calendar.min.js"), build("calendar.js")]

