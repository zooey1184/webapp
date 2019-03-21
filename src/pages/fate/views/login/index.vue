<template>
  <page :styleWrap='{background: "#fff"}'>
    <div>
      <lazy-img :img='loginImg' pos='relative'></lazy-img>
      <div style="margin: 0 32px">
        <div class="flex f_a_c login_item">
          <p class="left_pane f_s0">手机号</p>
          <div class="f_g1 i_content">
            <input class="i_tel" type="tel" placeholder="请输入手机号">
            <p class="msg">{{tel_msg}}</p>
          </div>
        </div>
        <div class="flex f_a_c login_item">
          <p class="left_pane f_s0">验证码</p>
          <div class="f_g1 i_content">
            <input class="i_tel" type="tel" placeholder="请输入验证码">
            <p class="msg">{{code_msg}}</p>
          </div>
          <div class="count_down txt_c" :class="{active: true}">
            <count-down></count-down>
          </div>
        </div>
      </div>
      <button class="login_btn" @click='submitFn'>立即登录</button>
    </div>
  </page>
</template>

<script>
import loginImg from '../../assets/login_bg.png'
import countDown from '@/components/CountDown'
import { setTimeout } from 'timers';

export default {
  name: 'login-page',
  data: ()=> ({
    loginImg,
    tel_msg: '',
    code_msg: '',
    loginState: false
  }),
  components: {
    countDown
  },
  methods: {
    submitFn() {
      this.$login.show()
    }
  },
}
</script>

<style lang="less">
.login_item {
  height: 54px;
  .left_pane {
    width: 56px;
  }
}
.i_content {
  position: relative;
  margin-right: 12px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -3px;
    height: 1px;
    background: #bbb;
    left: 0;
  }
  .i_tel {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    display: inline-block;
    position: relative;
  }
  .msg {
    position: absolute;
    bottom: -20px;
    color: #EB5C75;
    font-size: 12px;
  }
}
.lg_btn {
  background: #D9D9D9;
  color: #9B9B9B;
}
.count_down {
  position: relative;
  padding: 10px 5px;
  .lg_btn();
  width: 120px;
  font-size: 13px;
  border-radius: 30px;
} 
.login_btn {
  .lg_btn();
  width: 65%;
  margin: 42px auto;
  display: block;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 30px;
  font-size: 16px;
}
</style>
