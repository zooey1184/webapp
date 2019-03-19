<template>
  <wave-wrap>
    <div class="home_item underline">
      <p>{{title}}</p>
      <div class="txt">
        <span class="txt_item" style="width: 80px;">{{eva}}测评</span>
        <span class="txt_item">{{discuss}}评论</span>
        <span class="txt_item right_item">好评率{{rate}}</span>
      </div>
    </div>
  </wave-wrap>
</template>

<script>
import waveWrap from '../../components/WaveWrap.vue'

export default {
  props: {
    title: String,
    eva: [String, Number], // 测评
    discuss: [String, Number],
    rate: [String, Number]
  },
  components: {
    waveWrap
  }
}
</script>

<style lang="less">
.home_item {
  padding-top: 12px;
  .title {
    font-size: 14px;
    color: #333333
  }
  .txt {
    font-size: 12px;
    margin-top: 8px;
    padding-bottom: 12px;
    position: relative;
  }
  .txt_item {
    display: inline-block;
  }
  .right_item {
    position: absolute;
    right: 0;
    top: 0;
    color: #A86A36
  }
}
.underline {
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #d5d5d5;
    content: "";
    transform: scaleY(.7);
  }
}
</style>

