<template>
  <transition name='slide'>
    <div v-if='showLogin' class="full_loginWrap">
      
      <login></login>
      <i class="icon iconfont icon-close" @click='close'></i>
    </div>
  </transition>
</template>

<script>
import login from '../views/login/index.vue'
import { setTimeout } from 'timers';

export default {
  components: {
    login
  },
  data: ()=> ({
    showLogin: false
  }),
  methods: {
    close() {
      this.showLogin = false
    }
  }
}
</script>

<style lang="less">
.full_loginWrap {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 11;
  .icon-close {
    font-size: 15px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>

