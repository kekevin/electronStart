import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */

// // // reset css
// import "assets/css/reset.css";
// // // base css
// import "assets/css/base.css";

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
