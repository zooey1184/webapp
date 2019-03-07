import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eggUI from './components'
Vue.use(eggUI)
// const Promise = require('es6-promise').Promise

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
