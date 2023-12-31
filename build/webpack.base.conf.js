import { fileURLToPath } from 'url';

import path from 'path'
import * as utils from './utils.js'
import config from '../config/index.js'
import vueLoaderConfig from './vue-loader.conf.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


export default {
  entry: {
    'index': './src/views/index.js',
    'demo/index': './src/views/demo/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@root': resolve(''),
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      // 'vue$': 'vue/dist/vue.esm-browser.js',
      'vue$': 'vue/dist/vue.esm.js',
      // "bootstrap-sass$": resolve("node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss"),
      // "bootstrap-sprockets$": resolve("node_modules/bootstrap-sass/assets/stylesheets/_bootstrap-sprockets.scss")
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
                /* your options here */
            }
          }
        ]
      }
    ]
  }
}
