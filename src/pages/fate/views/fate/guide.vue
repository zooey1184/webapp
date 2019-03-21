<template>
  <div class="flex f_a_c f_j_sb">
    <div class="f_s0 guide_item" v-for='(item, index) in list' :key='index'>
      <p>{{item.name}}</p>
      <p class="guide_blod">{{item.value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: ()=> ([])
    }
  }
}
</script>

<style lang="less">
.guide_item {
  min-width: 40px;
  text-align: center;
  p {
    text-align: center;
    font-size: 12px;
  }
  .guide_blod {
    font-size: 16px;
    color: #A96A30;
    margin-top: 4px;
  }
}
</style>
