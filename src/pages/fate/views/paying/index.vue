<template>
  <page :classWrap='{detailPageClass: true}'>
    <div>
      <lazy-img :img='payingImg' :styleBefore='{zIndex: -1}'></lazy-img>
      <div>
        <p class="left_time">jishitejia:<left-time @over='overFn'></left-time></p>
        <p class="sale_price_title txt_c">吉时特价</p>
        <h2 class="price_panel">￥{{price}}</h2>
        <p class="txt_c">
          <span>原价</span>
          <span class="origin_price">￥199.00</span>
        </p>
      </div>
      <p class="choose_pay_title">选择支付方式</p>
      <cell-wrap :styleWrap='{padding: "0 20px"}' :lineAni='false' :height='64'>
        <cell :width='130' :rightStyle='{right: "20px"}'>
          <div slot='left' class="flex f_a_c">
            <img style="width: 25px; margin-right: 16px" src="../../assets/ali_pay.png" alt="">
            <p>支付宝支付</p>
          </div>
        </cell>
        <cell :width='120' :rightStyle='{right: "20px"}'>
          <div slot='left' class="flex f_a_c">
            <img style="width: 25px; margin-right: 16px" src="../../assets/wx_pay.png" alt="">
            <p>微信支付</p>
          </div>
        </cell>
      </cell-wrap>
    </div>
  </page>
</template>

<script>
import payingImg from '../../assets/detail_bg.png'
import leftTime from './leftTime.vue'
import cell from '@/components/Cell'

export default {
  data: ()=> ({
    payingImg,
    price: '1.00'
  }),
  methods: {
    overFn() {
      console.log('have over ')
    }
  },
  components: {
    leftTime,
    ...cell
  }
}
</script>

<style lang="less">
.left_time {
  color: #9B9B9B;
  text-align: center;
  margin: 10px 0;
}
.sale_price_title {
  margin-bottom: 16px;
  margin-top: 32px;
  font-size: 16px;
  color: #D1342C;
}
.price_panel {
  text-align: center;
  color: #333333;
  font-size: 48px;
}
.origin_price {
  text-decoration:line-through;
  color: #9B9B9B;
}
.choose_pay_title {
  color: #333333;
  margin-top: 72px;
  position: relative;
  font-size: 16px;
  padding-left: 16px;
  height: 40px;
  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    left: 0;
    width: 100%;
    height: 1px;
    background: #eee;
  }
}
</style>
