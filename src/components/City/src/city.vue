<template>
  <div class="C-City">
    <transition name="fade">
      <div class="City--full" v-if='showToast' :style='{background: bg}' @click='showToast=false'></div>
    </transition>
    <transition :name='animate'>
      <div class="City__content" v-if='showToast' :style="{transitionDelay: '50ms'}">
        <div class="top">
          <div class="city_text">
            <span v-for='(item, index) in selectList' :key='index'>{{item.text}}</span>
          </div>
          <p class="city_btn" @click='cancleBtn'>取消</p>
        </div>
        <div class="content" ref='contains'>
          <div class="content_multi" :style="p_style">
            <p v-for='(item, index) in p' :style="{color: (selectIndex && selectIndex[0]==index)? '#d43f33' : '#4375EA' }" :key='index' @click='selectPFn(item, index)'>{{item.text}}</p>
          </div>
            <div class="content_multi" :style="c_style" v-show='showCity'>
            <p v-for='(item, index) in c' :key='index' :style="{color: (selectIndex && selectIndex[1]==index)? '#d43f33' : '#4375EA', textAlign: 'left' }" @click='selectCFn(item, index)'>{{item.text}}</p>
          </div>
          <div class="content_multi"  v-show='showArea'  :style="area_style">
            <p v-for='(item, index) in a' :style="{color: (selectIndex && selectIndex[2]==index)? '#d43f33' : '#4375EA' }" :key='index' @click='selectAFn(item, index)'>{{item.text}}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { provinceList, cityList, areaList } from './address'
import {clientRect} from '@/common/js/base'

export default {
  name: 'city',
  data: ()=> ({
    showToast: false,
    bg: 'rgba(0,0,0,0.5)',
    animate: 'slideC',
    showCity: false,
    showArea: false,
    p: [],
    c: [],
    a: [],
    selectList: [[], [], []],
    selectIndex: [],
    active: {width: '100%'},
    left: {width: '100%'}
  }),
  computed: {
    p_style: function() {
      let obj = {width: '100%'}
      if(this.showCity && this.showArea) {
        obj = {width: '80px', background: '#ddd'}
      }else if(this.showCity && !this.showArea) {
        obj = {width: '50%', background: '#eee'}
      }
      return obj
    },
    c_style: function() {
      let obj = {width: '100%'}
      if(this.showCity && this.showArea) {
        obj = {width: '120px', background: '#eee'}
      }else if(this.showCity && !this.showArea) {
        obj = {width: '50%', background: '#fff'}
      }
      return obj
    },
    area_style: function() {
      let obj = {}
      if(this.showArea) {
        let r = this.$refs.contains
        let p = clientRect().w
        if(r) {
          p = r.getBoundingClientRect().width>10 ? r.getBoundingClientRect().width : p
        }
        obj = {width: `${p-200}px`}
      }
      return obj
    }
  },
  methods: {
    cancleFn($event) {
      if($event.target.classList.contains('City__content')) {
        this.showToast = false
        this.showArea = false
        this.showCity = false
      }
    },
    cancleBtn() {
      this.showToast = false
      // this.showArea = false
      // this.showCity = false
    },
    selectPFn(item, index) {
      this.showArea = false
      this.showCity = true
      this.c = cityList[item.value]
      this.selectList[0] = item
      this.selectList[1] = []
      this.selectList[2] = []
      this.selectIndex[0] = index
      this.selectIndex[1] = null
      this.selectIndex[2] = null
    },
    selectCFn(item, index) {
      this.showArea = true
      this.a = areaList[item.value]
      this.selectList[1] = item
      this.selectList[2] = []
      this.selectIndex[1] = index
      this.selectIndex[2] = null
    },
    selectAFn(item, index) {
      this.selectList[2] = item
      this.$set(this.selectList, 2, item)
      this.$set(this.selectIndex, 2, index)
      this.cancleBtn()
      this.change(this.selectList, this.selectIndex)
    },
    change(i, k) {
      // 对外开放接口
    }
  },
  created() {
    this.p = provinceList
  }
}
</script>

<style scoped lang="less">
@h_sum: 350px;
@h_top: 45px;
@blue: #4375EA;
.C-City {
  .City--full {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 89
  }
  .City__content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: @h_sum;
    background: #fff;
    z-index: 90;
    .top {
      height: @h_top;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      border-bottom: 1px solid #eee;
      padding: 0 10px;
      .city_btn {
        white-space: nowrap;
        &:active {
          color: #f09114
        }
      }
    }
    .city_text {
      span {
        display: inline-block;
        margin-right: 10px;
        color: #999
      }
    }
    .content {
      position: relative;
      overflow: hidden;
      height: (@h_sum - @h_top);
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      .content_multi {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        -webkit-transition: all 0.3s linear;
        transition: all 0.3s linear;
        height: 100%;
        -ms-flex-negative: 0;
            flex-shrink: 0;
        background: #fff;
        overflow-x: hidden;
        overflow-y: auto;
        white-space: nowrap;

        p {
          height: 35px;
          color: @blue;
          line-height: 35px;
          font-size: 15px;
          text-align: center;
          position: relative;
          padding: 0 10px;
          -webkit-transition: all 0.3s linear;
          transition: all 0.3s linear;
          &:active {
            background: rgb(238, 238, 238);
          }
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 1px;
            background: #eee;
            -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
          }
        }
      }
      .active_three {
        background: #ddd;
      }
      .active_two {
        background: #fafafa;
      }
    }
  }
}

// cubic-bezier(.05,.43,.51,1.12);
.slideC-enter-active, .slideC-leave-active{
  -webkit-transition: all 0.28s ease-out;
  transition: all 0.28s ease-out
}
.slideC-enter, .slideC-leave-to {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
  opacity: 0
}
</style>
