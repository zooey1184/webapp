<template>
  <div class="more_title flex f_a_e f_j_sb">
    <h4>{{title}}</h4>
    <div class="moreText flex f_a_s" @click='moreFn'>
      <span>{{more}}</span>
      <i class="icon iconfont icon-ARROW"></i>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    
  }),
  props: {
    title: String,
    more: String
  },
  methods: {
    moreFn() {
      this.$emit('more')
    }
  }
}
</script>

<style lang="less">
.more_title {
  h3 {
    font-size: 16px;
    color: #333333;
    font-weight: 700;
  }
  .moreText {
    color: #B5B5B5;
    font-size: 12px;
    &:active {
      color: #0d8059
    }
  }
  .icon-ARROW {
    font-size: 16px;
    color: #B5B5B5;
  }
}
</style>
