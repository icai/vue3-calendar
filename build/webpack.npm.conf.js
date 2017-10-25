'use strict'
const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const pp = require('../package')

const banner = [
  pp.aliasName +' v' + pp.version,
  '(c) ' + (new Date().getFullYear()) + ' ' + pp.author,
  pp.homepage
].join('\n')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const env = config.npm.env

function build(name) {
  const minimize = !!name.match(/\.min/)
  let webpackConfig = {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    output: {
      path: resolve('lib'),
      filename: name,
      libraryTarget: "umd",
      libraryExport: "default",
      library: "Calendar",
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: utils.cssLoaders({
              sourceMap: true,
              extract: true
            }, minimize),
            transformToRequire: {
              video: 'src',
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src')]
        }
      ]
    },
    plugins: [        
      new webpack.DefinePlugin({
        'process.env': env
      }),
      new webpack.BannerPlugin(banner),
      new ExtractTextPlugin({
        filename: '[name].css' //utils.assetsPath('css/[name].[contenthash].css')
      })
    ]
  }
  webpackConfig.entry = {};
  webpackConfig.entry[name.replace(/\.(js|vue)/, '')] = "./"
  webpackConfig = merge(webpackConfig, {
    module: {
      rules: utils.styleLoaders({
        sourceMap: config.npm.productionSourceMap,
        extract: true
      })
    }
  })

  if (minimize) {
    webpackConfig = merge(webpackConfig, {
      plugins: [
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          sourceMap: true
        }),
        new CopyWebpackPlugin([
          { from: './src/components/Calendar.vue' }
        ])
      ]
    })
  }
  return webpackConfig
}

module.exports = [build('calendar.js'), build('calendar.min.js')]