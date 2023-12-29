import './check-versions.js'
import config from '../config/index.js'

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

import path from 'path'
import opn from 'opn'
import express from 'express'
import  webpack from 'webpack'
import devMiddlewareFunc from 'webpack-dev-middleware'
import proxyMiddleware from 'http-proxy-middleware'

import webpackDevConfig from './webpack.dev.conf.js'
import webpackProdConfig from './webpack.prod.conf.js'


import webpackHot from 'webpack-hot-middleware'
import connectHistory from 'connect-history-api-fallback'
import portfinder from 'portfinder'


const webpackConfig = process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production' ? webpackProdConfig : webpackDevConfig;


// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;

const app = express();


const compiler = webpack(webpackConfig);

const devMiddleware = devMiddlewareFunc(compiler, {
  publicPath: webpackConfig.output.publicPath,
});

const hotMiddleware = webpackHot(compiler, {
  log: (s) => {
  }
});


// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware.createProxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(connectHistory())

// serve webpack bundle output
app.use(devMiddleware)

// // enable hot-reload and state-preserving
// // compilation error display
app.use(hotMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port;

let _resolve;
let _reject;
const readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve;
  _reject = reject;
});
let server;
portfinder.basePort = port;

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    const uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

// export default {
//   ready: readyPromise,
//   close: () => {
//     server.close()
//   }
// }
