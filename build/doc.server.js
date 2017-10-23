
require('./docs')
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = config.doc.env
var path = require('path')
var express = require('express')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var fs = require('fs');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.doc.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.doc.proxyTable

var app = express()


// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})




// serve pure static assets
var staticPath = path.posix.join(config.doc.assetsPublicPath, config.doc.assetsSubDirectory)
var demoPath = path.posix.join(config.doc.assetsPublicPath, config.doc.assetsDemoDirectory)
app.use(staticPath, express.static('./docs/static'))
app.use('/vue2-calendar/static', express.static('./docs/static'))

app.get('*',function(req, res, next){
  try {
    res.sendFile(path.join(__dirname , '../docs', req.url ,'index.html'));
  } catch(e){
    next();
  }
});


module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  // opn(uri)
})
