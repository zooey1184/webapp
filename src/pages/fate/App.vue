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
  methods: {
    
  },
  watch: {
    '$route'(to, from) {
      console.log(this.get_router);
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
  },
  mounted() {
    
  }
}
</script>

<style lang="less">
@import url('../../common/css/transition.less');
@import url('../../common/css/flex.less');
// @import url('../../common/css/app.less');
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




* {
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
  -webkit-overflow-scrolling : touch;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "微软雅黑", "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  &>div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
  }
}
.pre (@style, @value){
  -webkit-@{style}: @value;
     -moz-@{style}: @value;
      -ms-@{style}: @value;
       -o-@{style}: @value;
          @{style}: @value;
}
.transition(@arg){
  .pre(transition, @arg);
}
.transform(@arg){
  .pre(transform, @arg);
}
.page-forward-enter-active,
.page-backward-enter-active,
.page-forward-leave-active,
.page-backward-leave-active,
.page-fade-enter-active,
.page-fade-leave-active
{
  .transition(transform 0.4s);
  position: absolute;
}
.page-forward-enter,
.page-backward-leave-active
{
  .transform(translate(100%));
}
.page-fade-enter,
.page-fade-leave-active {
  opacity: 0;
}
.page-forward-enter,
.page-backward-leave-active,
.page-forward-enter-to,
.page-backward-leave-to,
.page-fade-enter,
.page-fade-leave-to
{
  z-index: 2 !important;
}


</style>
