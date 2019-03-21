<template>
  <div class="flex f_a_s f_j_sb huangliPage">
    <div class="left">
      <p v-for='(item, index) in y' :key='index'>{{item}}</p>
    </div>
    <div class="middle" v-if='changeD'>
      <h3>{{changeD.nongLi}}</h3>
      <p class="f_sm offset_tb">{{changeD.ganzhi}}</p>
      <h3 class="f_lg">{{changeD.xinLi}}</h3>
    </div>
    <div class="right">
      <p v-for='(item, index) in n' :key='index'>{{item}}</p>
    </div>
  </div>
</template>

<script>
import huangli from '../../common/mixins/huangli.js'

export default {
  data: ()=> ({
    dateO: null, // 原始数据
    changeD: null // 转化后的时间
  }),
  props: {
    y: {
      type: Array,
      default: ()=> ([])
    },
    n: {
      type: Array,
      default: ()=> ([])
    }
  },
  methods: {
    exChange() {
      this.dateO = huangli.shengCheng()
      let dateO = this.dateO
      return {
        nongLi: dateO.day,
        ganzhi: `${dateO.y}${huangli.shengXiao()}年 ${dateO.m}月 ${dateO.d}日`,
        xinLi: `${dateO.ymd.y}-${dateO.ymd.m+1}-${dateO.ymd.d}`
      }
    }
  },
  mounted() {
    this.changeD = this.exChange()
  }
}
</script>

<style lang="less">
@fh: 30px;
@fc: #B83435;
.huangliPage {
  color: @fc;
  padding: 12px 7px;
}
.txt_c {
  text-align: center;
}
.left, .right {
  .txt_c;
  width: 18%;
  p {
    border-bottom: 1px solid @fc;
    height: @fh;
    line-height: @fh;
    font-size: 16px;
  }
}
.middle {
  .txt_c();
  h3 {
    font-size: 22px;
  }
  .f_sm {
    font-size: 12px;
    line-height: 12px;
  }
  .offset_tb {
    margin-top: 8px;
    margin-bottom: 12px;
  }
}
</style>
