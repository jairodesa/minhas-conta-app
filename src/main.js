import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
import http from '@/http'
import store from '@/store/store'

Vue.config.productionTip = false
Vue.prototype.$http = http


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
