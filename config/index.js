import path from 'path'
import pp from '../package.json' assert {type:'json'}
import prodEnv from './prod.env.js'
import devEnv from './dev.env.js'
import npmEnv from './npm.env.js'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


export default {
  build: {
    env: prodEnv,
    index: path.resolve(__dirname, '../dist/index.html'),
    demo: path.resolve(__dirname, '../dist/demo/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: devEnv,
    index: path.resolve(__dirname, '../dist/index.html'),
    demo: path.resolve(__dirname, '../dist/demo/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    port: process.env.PORT || 4000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  npm: {
    env: npmEnv,
    assetsRoot: path.resolve(__dirname, '../lib'),
    productionSourceMap: true
  },
  doc: {
    env: prodEnv,
    index: path.resolve(__dirname, '../docs/index.html'),
    demo: path.resolve(__dirname, '../docs/demo/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path.join('/', pp.name, '/'),
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,

    publicPath: 'http://localhost:8080/',

    port: process.env.PORT || 4000,
    assetsDemoDirectory: 'demo',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }

}
