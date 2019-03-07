/**
 * @author: zooey
 * changer: zooey
 * Date: 18/08/29
 * desc: 插件-城市选择器
 * use: this.$alert.show({obj}) || this.$alert.show('string') && this.$alert.hide()
 */
import City from './src/city.vue'
import plugin from '@/components/mixins/plugin'

const CityPane = plugin(City, {
  name: 'city',
  showName: 'showToast',
  fullClassName: 'actionSheet--full',
  initOption: {
    name: 'sildeC'
  }
})
export default CityPane
