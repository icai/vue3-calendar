import { createApp } from "vue";
import App from './modules/App'
// import Docs from './modules/Docs'
// import 'bootstrap-sass'
import pp from '../package.json' assert {type:'json'}

const routemaps = {
  '/': function () {
    createApp(App).mount('#app');
  },
  '/demo/': function () {
    createApp(Docs).mount('#app');
  }
}

const prefix = pp.name
var route = ''
if (window.location.pathname.indexOf(prefix)) {
  route = window.location.pathname.replace('/' + prefix, '')
} else {
  route = window.location.pathname
}
const app = routemaps[route]
app && app()
