/**
 * @author: zooey
 * changer: zooey
 * date: 18/07/09
 * desc: 插件-加载器
 * use: this.$load.show(obj | null | string)    this.$load.hide()
 */
import Loading from './src/load.vue'
import plugin from '@/components/mixins/plugin'
const LoadPlugin = plugin(Loading, {
  initOption: {},
  name: 'load',
  showName: 'showLoading',
  fullClassName: 'load',
  typeString: 'title'
})
export default LoadPlugin
