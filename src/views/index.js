import Vue from 'vue'
import App from '@/modules/App'
import 'bootstrap/dist/css/bootstrap.min.css'
new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<App/>',
  components: { App }
})
