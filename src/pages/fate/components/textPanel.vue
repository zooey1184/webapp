<!-- 用于处理文字效果 -->
<template>
  <div>
    <span v-for="(item, index) in title" :key="index">
      <transition :name='getName'>
        <span class="inlineBlock" v-if='showTitlePane' :class='classContent' :style="{transitionDelay: `${(index/10)+delay}s`}">{{item}}</span>
      </transition>
    </span>
  </div>
</template>
<script>
export default {
  data: ()=> ({
    showTitlePane: false
  }),
  props: {
    title: {
      type: String,
      default: 'title'
    },
    delay: {
      type: Number,
      default: 0
    },
    classContent: {
      type: [Array, Object]
    },
    name: {
      type: String,
      default: 'rotate'  // 动画为避免ios上面多重动画导致的性能下降，ios默认为fade，如果要不同效果，可设置下划线 '_', 如：_rotate，此时安卓与ios动画相同
    },
  },
  computed: {
    getName: function() {
      let n = this.name
      let device = 'ios'
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        device = 'ios'
      } else {
        device = 'android'
      }
      if(device == 'ios') {
        if(n.match(/_/g)) {
          let s = n.substr(1)
          return s
        } else {
          return 'fade'
        }
      }else {
        if(n.match(/_/g)) {
          let s = n.substr(1)
          return s
        } else {
          return n
        }
      }
    }
  },
  created() {
    setTimeout(()=> {
      this.showTitlePane = true
    }, 200)
  }
}
</script>
<style scoped lang="less">
.inlineBlock {
  display: inline-block;
  margin: 0 1px;
  color: #fff;
}
</style>