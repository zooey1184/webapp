<template>
  <div class="comment_item">
    <div class="flex f_a_c f_j_sb">
      <div class="flex f_a_c">
        <slot name='img'></slot>
        <h4>{{title}}</h4>
      </div>
      <slot name='arrow'>
        <p>{{date}}</p>
      </slot>
    </div>
    <slot name='desc'>
      <p class="desc" :style='descSty'>{{desc}}</p>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    desc: String,
    styleDesc: {
      type: Object,
      default: ()=> ({})
    }
  },
  computed: {
    descSty: function() {
      let obj = {
        position: 'relative'
      }
      Object.assign(obj, this.styleDesc)
      return obj
    }
  }
}
</script>

<style lang="less">
.comment_item {
  padding: 0 20px;
}
.icon_header {
  width: 26px;
  margin-right: 5px;
}
.desc {
  margin-left: 31px;
  position: relative;
  line-height: 20px;
  padding-bottom: 5px;
  word-break: break-all;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #bbb;
  }
}
</style>
