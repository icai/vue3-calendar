import Vue from 'vue'
import App from './modules/App'
import Docs from './modules/Docs'
require('bootstrap-sass')

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

var app = routemaps[window.location.pathname]
app && app()
