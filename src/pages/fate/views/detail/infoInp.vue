<template>
  <div class="info_wrap">
    <lazy-img :img='infoImg'  :styleBefore='{zIndex: -1, bottom: 0}'></lazy-img>
    <p style="font-size:12px; color: #4A4A4A">请务必提供准确的信息给到老师！测评以输入信息为准！</p>
    <div class="inp_content flex f_a_c">
      <span class="title">请输入您的大名</span>
      <input type="text" class="input_item f_g1" v-model='name'>
    </div>
    <div class="inp_content flex f_a_c">
      <span class="title">请选择您的姓名</span>
      <div class="radio_panel flex f_a_c">
        <div class="flex f_a_c">
          <p>男性</p>
          <radio :pick='sex'>
            <input type="radio" name="sex" value='male' v-model='sex'>
          </radio>
        </div>
        <div class="flex f_a_c">
          <p>女性</p>
          <radio :pick='sex'>
            <input type="radio" name="sex" value='female' v-model='sex'>
          </radio>
        </div>
      </div>
    </div>
    <div class="inp_content flex f_a_c">
      <span class="title">请输入出生日期</span>
      <input type="text" @click='pickTimeFn' class="input_item f_g1" readonly v-model='born'>
    </div>
    <button class="btn">立即测算</button>
    
    <picker ref="picker" :data="pickDate" :selectedIndex="[0,0,0]" @change="changeFn" @select="selectFn">
      <span slot='title' @click='changeDateFn'>{{dateType.text}}</span>
    </picker>
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
  mixins: [date],
  methods: {
    selectFn(i, e, v) {
      console.log(v);
      this.born = v.join(' ')
    },
    pickTimeFn() {
      this.$refs.picker.show()
    },
    changeDateFn() {
      if(this.dateType.value=='nongli') {
        this.dateType = {
          text: '切换到农历',
          value: 'xinli'
        }
      }else{
        this.dateType = {
          text: '切换到新历',
          value: 'nongli'
        }
      }
      this.init()
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="less">
.info_wrap {
  width: 100%;
  display: block;
  margin: 0 auto;
  position: relative;
  // border: 1px solid #aaa;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 15px #ccc;
  .inp_content {
    margin: 14px 0;
    .title {
      display: inline-block;
      vertical-align: middle;
      min-width: 80px;
      margin-right: 5px;
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
  }
}
</style>
