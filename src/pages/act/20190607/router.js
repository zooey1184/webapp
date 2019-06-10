import router from '@/components/navRouter/index'

const components = [
  {
    name: 'copyright',
    component: () => import('./copyright.vue')
  }
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component.component))
  Vue.use(router)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
