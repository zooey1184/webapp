<template>
  <transition name='fade'>
    <img :src="img" class="lazy_img" :style="stylePanel" :key='1' alt="" v-show='showIMG'>
    <!-- <div v-show='!showIMG' class="lazy_img" :style="stylePanel" :key='2'></div> -->
  </transition>
</template>

<script>
export default {
  name: 'lazy-img',
  data: ()=> ({
    showIMG: false
  }),
  props: {
    img: {
      type: [Object, String],
    },
    pos: {
      type: String,
      default: 'absolute'
    },
    styleBefore: {
      type: Object,
      default: ()=> ({})
    }
  },
  computed: {
    stylePanel: function() {
      let obj = {
        position: this.pos
      }
      Object.assign(obj, this.styleBefore)
      return obj
    }
  },
  created() {
    let img = new Image()
    img.src = this.img
    img.onload = ()=> {
      this.showIMG = true
    }
  }
}
</script>

<style lang="less">
.lazy_img {
  position: absolute;
  width: 100%;
  left: 0;
  left: 0;
}
</style>
