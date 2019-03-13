import Vue from 'vue'
import Router from '@/common/js/router-esm'
import store from '../store/index.js'
import home from './home'
import login from './login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: `/dubao/h5/fate/`,
  routes: [
    {
      path: '*',
      name: 'notFound',
      component: () => import('../views/404.vue'),
      meta: {
        title: '404'
      }
    },
    ...home,
    ...login
  ]
})
router.beforeEach((to, from, next) => {
  store.commit('SET_ROUTER', window.directionPage)
  setTimeout(() => {
    next()
  }, 20)
})
export default router
