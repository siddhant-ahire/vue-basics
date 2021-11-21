import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router';
import store from './store'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
