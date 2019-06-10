<template>
  <page :state='pageState' :styleWrap='{background: "#f9d447"}'>
    <div>
      <img class="w_100" src="./img/top.png" alt="">
    </div>
    <div>
      <div class="inp_item">
        <input type="tel" v-model='phone' placeholder="请输入手机号">
      </div>
      <div class="inp_item">
        <input type="tel" v-model='pwd' placeholder="设置登录密码">
      </div>
      <div class="inp_item">
        <input type="tel" v-model='code' placeholder="请输入验证码">
        <div class="count_down">
          <count-down></count-down>
        </div>
      </div>
      <button class='inp_item bd_n mg_c invite_btn' @click="submitFn">立即申请</button>
    </div>
  </page>
</template>

<script>
import page from '@/components/PageWrap'
import CountDown from '@/components/CountDown';
import { setTimeout } from 'timers';

export default {
  components: {
    page,
    CountDown
  },
  data: ()=> ({
    pageState: 'loading',
    phone: '',
    pwd: '',
    code: ''
  }),
  methods: {
    submitFn() {
      this.$toast.show('请通过正规渠道')
    }
  },
  mounted() {
    setTimeout(()=> {
      this.pageState = 'success'
    }, 50)
  }
}
</script>

<style lang="less">
@import url('../../../common/css/app.less');
// 兼容过渡色 (属性， 角度：90deg, 颜色1， 颜色2)
.gradient (@val:background, @deg:90deg, @color1: #f88e79, @color2: #f85573) {
  @{val}: @color1;
  @{val}: -webkit-linear-gradient(@deg, @color1 , @color2);
  @{val}: -o-linear-gradient(@deg, @color1, @color2);
  @{val}: -moz-linear-gradient(@deg, @color1, @color2);
  @{val}: linear-gradient(@deg, @color1, @color2);
}
.w_100 {
  width: 100%;
}
.mg_c {
  margin: 0 auto;
  display: block;
}
.bd_n {
  border: none;
  outline: none
}
.inp_item {
  width: 80%;
  height: 42px;
  border-radius: 5px;
  overflow: hidden;
  .mg_c;
  margin-bottom: 20px;
  position: relative;
  input {
    .w_100;
    padding-left: 10px;
    height: 100%;
    .bd_n;
    font-size: 15px;
  }
  .count_down {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 15px;
  }
}
.invite_btn {
  .gradient();
  color: #fff;
  font-size: 15px;
  &:active {
    opacity: .8;
  }
}
</style>

