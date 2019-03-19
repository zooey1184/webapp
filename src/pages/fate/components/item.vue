<template>
  <div class="flex f_a_c">
    <slot name='left'></slot>
    <div class="flex f_a_c f_j_sb f_g1" :class="{underline: showLine}" :style='styleContent'>
      <p>{{title}}</p>
      <img style='width: 10px; margin-right: 16px' src="../assets/arrow.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    height: {
      type: [Number, String],
      default: '48'
    },
    showLine: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    styleContent: function() {
      let obj = {
        height: `${this.height}px`
      }
      return obj
    }
  }
}
</script>

