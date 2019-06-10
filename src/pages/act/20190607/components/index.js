import plugin from '@/components/mixins/plugin'
import toast from '@/components/toast/src/toast.vue'
import load from '@/components/loading/src/load'
import ajax from '@/components/AjaxPro'
import mask from '@/components/markPro/src/mark'
import page from '@/components/PageWrap'

const components = [page]
const Toast = plugin(toast, {
  initOptions: {
    position: 'top',
    type: 'none',
    bg: '#f9d447',
    color: '#333',
    isOrigin: false,
    styleContent: {}
  },
  name: 'toast',
  showName: 'showToast',
  fullClassName: 'toast_pane',
  typeStrng: 'msg'
})
const Load = plugin(load, {
  initOption: {},
  name: 'load',
  showName: 'showLoading',
  fullClassName: 'load',
  typeString: 'title'
})
const Mask = plugin(mask, {
  initOptions: {
    styleContent: {
      top: '35%',
      width: '80%'
    }
  },
  name: 'mask',
  showName: 'showToast',
  fullClassName: 'mark--full'
})

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.use(Toast)
  Vue.use(Load)
  Vue.use(ajax)
  Vue.use(Mask)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
