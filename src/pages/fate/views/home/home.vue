<template>
  <page :styleWrap='{background: "#F4F4F4"}'>
    <div>
      <lazy-img :img='bg' :styleBefore='{zIndex: -1}'></lazy-img>
      <nav-panel></nav-panel>
      <top-panel></top-panel>

      <div style="padding: 20px">
        <img style="width: 100%" src="./img/banner.png" alt="">
      </div>

      <div style="padding: 0 16px;">
        <more-title title='热门测算' more='更多测算'></more-title>
        <div class="hot_panel">
          <div class="hot_item">
            <img src="//r.51gjj.com/resource/jr/fate/hot_1.png" alt="">
          </div>
          <div class="hot_item">
            <img src="//r.51gjj.com/resource/jr/fate/hot_2.png" alt="">
          </div>
          <div class="hot_item">
            <img src="//r.51gjj.com/resource/jr/fate/hot_3.png" alt="">
          </div>
          <div class="hot_item">
            <img src="//r.51gjj.com/resource/jr/fate/hot_4.png" alt="">
          </div>
        </div>
      </div>

      <div>
        <div style="padding: 0 16px;  margin-top: 32px">
          <more-title title='有问有答' more='全部回答'></more-title>
        </div>
        
        <div class="answer_panel flex">
          <div class="ans_item grid-8 f_g1 f_s0">
            <img src="//r.51gjj.com/resource/jr/fate/ans_1.png" alt="">
          </div>
          <div class="ans_item grid-8 f_g1 f_s0">
            <img src="//r.51gjj.com/resource/jr/fate/ans_2.png" alt="">
          </div>
          <div class="ans_item grid-8 f_g1 f_s0">
            <img src="//r.51gjj.com/resource/jr/fate/ans_3.png" alt="">
          </div>
          <div class="ans_item grid-8 f_g1 f_s0">
            <img src="//r.51gjj.com/resource/jr/fate/ans_4.png" alt="">
          </div>
          <div style="width: 1px" class=" f_g1 f_s0"></div>
        </div>
      </div>

      <div style="padding: 0 16px; margin-top: 32px">
        <more-title title='更多测算' more='全部测算'></more-title>
        <div style="margin-top: 4px;">
          <item title='2019我适合从事什么工作？' eva='2917' discuss="507" rate='98.7%'></item>
          <item title='2019我适合从事什么工作？' eva='2917' discuss="507" rate='98.7%'></item>
        </div>
      </div>
      <div style="height: 60px;"></div>
    </div>
  </page>
</template>

<script>
import topPanel from './topPanel.vue'
import moreTitle from './moreTitle.vue'
import navPanel from './navPanel.vue'
import item from './item.vue'

export default {
  name: 'home',
  data: ()=> ({
    bg: '//r.51gjj.com/resource/jr/fate/fate_bg.png',
  }),
  components: {
    lazyImg: ()=> import ('../../components/LazyImg.vue'),
    topPanel,
    moreTitle,
    navPanel,
    item
  }
}
</script>

<style lang="less">
.full_abs {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.hot_panel {
  margin-top: 8px;
}
.hot_item {
  display: inline-block;
  width: 50%;
  padding: 1px 3px;
  box-sizing: border-box;
  img {
    width: 100%
  }
  &:nth-child(2n+1) {
    padding-left: 0
  }
  &:nth-child(2n) {
    padding-right: 0
  }
  &:active {
    opacity: 0.8;
  }
}
.answer_panel {
  width: 100%;
  position: relative;
  overflow-x: auto;
  padding: 8px 16px;
  .ans_item {
    margin-right: 7px;
    display: inline-block;
    img {
      width: 100%;
    }
    &:active {
      opacity: .8
    }
  }
}
</style>
