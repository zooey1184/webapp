<template>
  <div class="footer">
    <div 
      v-for='(item, index) in footer' 
      :key='index'
      @click='pick(item)'
      class="footer_item" :class="{active_item: item.value==active}">
      <img class="icon" :src="item.icon.acted" v-if='item.value==active' alt="">
      <img class="icon" :src="item.icon.act" v-else alt="">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
import icoHome from './img/btm_home.png'
import icoHomed from './img/btm_home_1.png'
import icoMaster from './img/btm_master.png'
import icoMastered from './img/btm_master_1.png'
import icoFate from './img/btm_fate.png'
import icoFated from './img/btm_fate_1.png'
import icoMine from './img/btm_mine.png'
import icoMined from './img/btm_mine_1.png'

export default {
  data: ()=> ({
    footer: [
      {
        text: '首页',
        value: 'home',
        icon: {
          act: icoHome,
          acted: icoHomed
        }
      },
      {
        text: '大师',
        value: 'master',
        icon: {
          act: icoMaster,
          acted: icoMastered
        }
      },
      {
        text: '运势',
        value: 'fate',
        icon: {
          act: icoFate,
          acted: icoFated
        }
      },
      {
        text: '我的',
        value: 'mine',
        icon: {
          act: icoMine,
          acted: icoMined
        }
      },
    ]
  }),
  props: {
    active: {
      type: String,
      default: 'home'
    }
  },
  methods: {
    pick(item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="less">
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 12px;
  background: #fff;
  padding-top: 4px;
  z-index: 9;
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  .icon {
    width: 24px;
    display: block;
    margin: 2px auto;
  }
  p {
    text-align: center;
  }
}
.footer_item {
  width: 25%;
  height: 100%;
  text-align: center;
}
.active_item {
  color: #A96A30
}
</style>
