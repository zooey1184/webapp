<template>
  <div class="top_panel">
    <div class="top_item grid-5" v-for='(item) in list' :key='item.value'>
      <!-- <lazy-img pos='relative' :img=''></lazy-img> -->
      <img :src="item.icon" alt="">
      {{item.text}}
    </div>
  </div>
</template>

<script>
import bagua from './img/3.png'
import love from './img/6.png'
import money from './img/5.png'
import bazi from './img/2.png'
import baname from './img/4.png'
import testname from './img/7.png'
import pig from './img/8.png'
import peidui from './img/1.png'

export default {
  data:()=> ({
    list: [
      {
        text: '八卦精批',
        value: 'bagua',
        icon: bagua
      },
      {
        text: '个人姻缘',
        value: 'love',
        icon: love
      },
      {
        text: '财运分析',
        value: 'money',
        icon: money
      },
      {
        text: '八字合婚',
        value: 'bazi',
        icon: bazi
      },
      {
        text: '八字起名',
        value: 'baname',
        icon: baname
      },
      {
        text: '姓名测试',
        value: 'testname',
        icon: testname
      },
      {
        text: '猪年运程',
        value: 'pig',
        icon: pig
      },
      {
        text: '配对姻缘',
        value: 'peidui',
        icon: peidui
      }
    ]
  })
}
</script>

<style lang="less">
.top_panel {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 18px;
  
}
.top_item {
  padding: 10px 16px;
  font-size: 12px;
  text-align: center;
  position: relative;
  img {
    width: 100%;
  }
  &:active {
    opacity: .8;
  }
}
</style>
