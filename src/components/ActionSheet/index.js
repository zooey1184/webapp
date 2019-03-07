/**
 * @author: zooey
 * changer: zooey
 * Date: 18/08/24
 * desc: 插件-选择器
 * use: this.$alert.show({obj}) || this.$alert.show('string') && this.$alert.hide()
 */
import ActionSheet from './src/actionSheet.vue'
import plugin from '../mixins/plugin'

const sheet = plugin(ActionSheet, {
  name: 'sheet',
  showName: 'showToast',
  fullClassName: 'actionSheet--full',
  initOptions: {
    animate: 'slideC'
  }
})
export default sheet
