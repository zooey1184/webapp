<template>
<page :state='pageState' :styleWrap='{background: "#f9d447"}' :footer='0'>
  <div>
    <img class="w_100" src="./img/top.png" alt="">
  </div>
  <div>
    <div class="inp_item">
      <input type="tel" v-model='phone' placeholder="请输入手机号">
    </div>
    <div class="inp_item" v-if='invite'>
      <input type="text" readonly v-model='invite' placeholder="邀请人">
    </div>
    <div class="inp_item">
      <input type="password" v-model='pwd' placeholder="设置登录密码">
    </div>
    <div class="inp_item">
      <input type="tel" v-model='code' placeholder="请输入验证码">
      <div class="count_down" v-if='showCode'>
        <count-down :state='codeState' @change='getCode'></count-down>
      </div>
    </div>
    <button class='inp_item bd_n mg_c invite_btn' @click="submitFn">立即申请</button>
    <div style="padding-left: 10%">
      <ck-box v-model='ck'>
        <p style="font-size: 15px">同意
          <span @click='$nav.push("copyright")'>《使用协议》</span>
        </p>
      </ck-box>
    </div>
  </div>
</page>
</template>

<script>
import CountDown from '@/components/CountDown';
import ckBox from '@/components/Form/box'
import api from './api'
import md5 from 'md5'

export default {
  components: {
    CountDown,
    ckBox
  },
  data: ()=> ({
    pageState: 'loading',
    phone: '',
    pwd: '',
    code: '',
    ck: false,
    codeState: false,
    invite: '',
    showCode: true
  }),
  methods: {
    rule() {
      return {
        phone: {
          r: /^1\d{10}$/,
          m: '手机号不正确'
        },
        pwd: {
          r: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
          m: '输入6到16位字母与数字组合的密码'
        },
        code: {
          r: /\d{4,6}/,
          m: '验证码不正确'
        }
      }
    },
    checkFn(s=true) {
      let rule = this.rule()
      let {phone, pwd, code} = rule
      let r = {phone, pwd}
      if(s) {
        r = {phone, pwd, code}
      }
      for(let i in r) {
        if(!rule[i].r.test(this[i])) {
          this.$toast.show(r[i].m)
          return false
        }
      }
      return true
    },
    typeLoad() {
      let iosFn = ()=> {
        window.location.href = 'https://copy.im/a/stKNNb'
      }
      let androidFn = ()=> {
        window.location.href = `https://copy.im/a/2WsXT6`
      }
      let ways = {
        ios: iosFn,
        android: androidFn
      }
      return ways
    },
    downLoad() {
      if (/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)) {
        this.typeLoad().ios()
      }else {
        this.typeLoad().android()
      }
    },
    submitFn() {
      const self = this
      if(this.ck) {
        if(this.checkFn()) {
          let p = Global.getUrlData()
          let data  ={
            loginName: self.phone,
            loginPwd: md5(self.pwd),
            type: 'register ',
            channelCode: p.channelCode,
            vcode: this.code
          }
          if(p.invitationCode) {
            data.invitationCode = p.invitationCode
          }
          this.$ajax({
            url: api().register,
            type: 'get',
            data: data,
            success: r=> {
              if(r.code==200) {
                this.downLoad()
              } else {
                this.$toast.show(r.msg)
              }
            }
          })
        }
      } else {
        this.$toast.show('请选择同意《用户使用协议》')
      }
    },
    ua() {
      const u = navigator.userAgent
      const ua = u.toLowerCase()
      return {
        isQQ: ua.indexOf('mqqbrowser') > -1,
        isWX: /MicroMessenger/i.test(ua),
        isANDROID: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('android') > -1,
        isIOS: /(iPhone|iPad|iPod|iOS|Mac)/i.test(ua),
        isWEBAPP: u.indexOf('Safari') == -1,
        isMOBILE: /AppleWebKit.*Mobile.*/i.test(ua),
        isWEIBO: /WeiBo/i.test(ua) // 微博内置浏览器
      }
    },
    checkUA (arr) {
      // 1=>qq  2=>wechat  3=>weibo  4=>other
      let ua = this.ua()
      let b = true
      for(let i=0; i<arr.length; i++) {
        if(arr[i]==1) {
          if(ua.isQQ) {
            b = false
          }
        }
        if(arr[i]==2) {
          if(ua.isWX) {
            b = false
          }
        }
        if(arr[i]==3) {
          if(ua.isWEIBO) {
            b = false
          }
        }
        if(arr[i]==4) {
          if(ua.isWEBAPP) {
            b = false
          }
        }
      }
      return b
    },
    codereset() {
      this.codeState = true
      this.$toast.show({
        msg: '已发送，请注意查收',
        type: 'success',
        position: 'middle',
        color: '#fff',
        bg: '#333'
      })
      setTimeout(()=> {
        this.codeState = false
        this.showCode = false
        setTimeout(()=> {
          this.showCode = true
        }, 10)
      }, 60000)
    },
    getCode() {
      const self = this
      let ck = this.checkFn(false)
      if(ck) {
        this.$ajax({
          url: api().getCode,
          type: 'get',
          data: {
            phone: self.phone,
            type: 'register'
          },
          success: r=> {
            if(r.code==200) {
              this.codereset()
            } else if(r.code==400) {
              this.$mask.show({
                msg: r.msg + ', 请下载App登录吧',
                btn: [{text: '确定', type: 'confirm'}],
                confirmFn: ()=> {
                  this.downLoad()
                  this.$mask.hide()
                }
              })
            } else {
              this.$toast.show(r.msg)
            }
          }
        })
      }
    }
  },
  mounted() {
    let p = Global.getUrlData()
    this.invite = p.invitationCode
    if(p.fortest && p.fortest=='z') {
      this.phone = '15960018047'
      this.pwd = '123456q'
      this.ck = true
    }
    if(this.inWeb()) {
      setTimeout(()=> {
        this.pageState = 'success'
        kdlcJsApiShareBack();
        function kdlcJsApiShareBack(){
          if (typeof(kdlcJsApi) != 'undefined') {
            kdlcJsApi.pageAddShare('{"isShare":1,"shareBtnTitle":"\u6309\u94ae\u6587\u6848","shareTitle":"\u5206\u4eabtitle","sharePageTitle":"\u5206\u4eab\u6709\u5956\u63cf\u8ff0","shareContent":"\u5206\u4eab\u63cf\u8ff0","shareUrl":"http:\/\/www.koudailc.com","shareImg":"http:\/\/res.koudailc.com\/article\/20160506\/3572c6e05464b6.png","sharePlatform":["wx","wechatf","qq","qqzone","sina","sms"],"shareSuccessAlert":"\u5206\u4eab\u6210\u529f\u5f39\u6846\u6587\u6848","shareIsUp":1,"shareUpId":11,"shareUpType":1,"shareUpUrl":"http:\/\/www.koudailc.com"}');
          };
          return 'kdlc_share_back';
        }
      }, 50)
    } else {
      this.$toast.show('您好，请通过正规途径申请!')
    }
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
  line-height: 42px;
  border-radius: 5px;
  overflow: hidden;
  .mg_c;
  margin-bottom: 15px;
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
    top: 0;
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

