<template>
  <div id="app">
    <transition :name='"page-"+get_router'>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'get_router'
    ])
  },
  watch: {
    '$route'(to, from) {
      this.$login.hide()
      if(window.directionPage=='backward') {
        if(this.$route.meta.onload) {
          this.$route.meta.onload()
        }
      }
      if(this.$route.meta.change) {
        this.$route.meta.change()
      }
      document.title = this.$route.meta.title
    }
  }
}
</script>

<style lang="less">
@import url('../../common/css/transition.less');
@import url('../../common/css/flex.less');
@import url('../../common/css/app.less');
@import url('../../common/css/js.less');
.generate-columns(20);
.detailPageClass {
  .gradient(background, 180deg, #fff, #fafafa);
}
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .grid-@{i} {
    width: (@i * 100% / @n);
    position: relative;
  }
  .generate-columns(@n, (@i + 1));
}
.txt_c {
  text-align: center
}
.mg_c {
  margin: 0 auto;
  display: block;
}
.bd_n {
  border: none;
  outline: none;
}
</style>
