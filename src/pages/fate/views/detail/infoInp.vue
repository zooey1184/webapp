<template>
  <div class="info_wrap">
    <lazy-img :img='infoImg'  :styleBefore='{zIndex: 0, bottom: 0}'></lazy-img>
    <p style="font-size:12px; color: #4A4A4A">请务必提供准确的信息给到老师！测评以输入信息为准！</p>
    <div class="inp_content flex f_a_c">
      <span class="title">请输入您的大名</span>
      <input type="text" class="input_item f_g1" v-model='name'>
    </div>
    <div class="inp_content flex f_a_c">
      <span class="title">请选择您的性别</span>
      <div class="radio_panel flex f_a_c">
        <div class="flex f_a_c">
          <img style="width: 15px;" src="../../assets/male.png" alt="">
          <p class="txt_sex">男性</p>
          <radio :pick='sex'>
            <input type="radio" name="sex" value='male' v-model='sex'>
          </radio>
        </div>
        <div class="flex f_a_c" style="margin-left: 10px">
          <img style="width: 15px;" src="../../assets/female.png" alt="">
          <p class="txt_sex">女性</p>
          <radio :pick='sex'>
            <input type="radio" name="sex" value='female' v-model='sex'>
          </radio>
        </div>
      </div>
    </div>
    <div class="inp_content flex f_a_c">
      <span class="title">请输入出生日期</span>
      <input type="text" @click='pickTimeFn' class="input_item f_g1" readonly v-model='date'>
    </div>
    <button class="btn" @click='goPaying'>立即测算</button>
  </div>
</template>

<script>
import radio from '../../components/radio/index.vue'
import date from '../../common/mixins/date'
import picker from '@/components/Picker/Picker.vue'
import infoImg from '../../assets/info_panel_bg.png'

export default {
  data: ()=> ({
    name: '',
    sex: '',
    infoImg: infoImg,
    born: ''
  }),
  components: {
    radio,
    picker
  },
  props: {
    date: String
  },
  mixins: [date],
  methods: {
    pickTimeFn() {
      this.$emit('pickDate')
    },
    goPaying() {
      this.$router.push('/paying')
    }
  }
}
</script>

<style lang="less">
.info_wrap {
  width: 100%;
  display: block;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 15px #ccc;
  .inp_content {
    margin: 14px 0;
    z-index: 3;
    .title {
      display: inline-block;
      vertical-align: middle;
      min-width: 100px;
      margin-right: 5px;
      z-index: 3;
    }
    .input_item {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      border: none;
      height: 28px;
      font-size: 16px;
      background: transparent;
      outline: none;
      border-bottom: 1px solid #aaa;
    }
    .radio_panel {
      position: relative;
    }
  }
  .btn {
    position: relative;
    margin: 0 auto;
    width: 40%;
    box-sizing: border-box;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 30px;
    font-size: 15px;
    display: block;
    background: #D1342C;
    color: #fff;
    &:active {
      opacity: .8;
    }
  }
  .txt_sex {
    padding: 0 3px;
  }
}
</style>
