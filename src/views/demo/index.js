import Vue from 'vue'
import Docs from '@/modules/Docs'
import 'bootstrap-sass'
new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<Docs/>',
  components: { Docs }
})
