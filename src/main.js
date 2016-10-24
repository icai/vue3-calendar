import Vue from 'vue'
import App from './modules/App'
import Docs from './modules/Docs'
require('bootstrap-sass')

var pp = require('../package.json')

var routemaps = {
  '/': function () {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      template: '<App/>',
      components: { App }
    })
  },
  '/demo/': function () {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      template: '<Docs/>',
      components: { Docs }
    })
  }
}

var prefix = pp.name
var route = ''
if (window.location.pathname.indexOf(prefix)) {
  route = window.location.pathname.replace('/' + prefix, '')
} else {
  route = window.location.pathname
}
var app = routemaps[route]
app && app()
