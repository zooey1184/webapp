/* global Global */
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import '@/common/js/global'
import nav from './router'
import eggUI from './components'
Vue.use(eggUI)
Vue.use(nav)
Global.loadScript('http://fxd.mayunjieniqianhua.com/static/js/hm.js')
// const Promise = require('es6-promise').Promise
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
