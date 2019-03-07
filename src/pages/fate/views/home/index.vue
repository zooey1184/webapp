<template>
  <page :footer='50'>
    <!-- <components :is='active'></components> -->
    <home v-show='active=="home"'></home>
    <fate v-show='active=="fate"'></fate>
    <master v-show='active=="master"'></master>
    <mine v-show='active=="mine"'></mine>
    <footer-panel slot='footer' @change='pick' :active='active'></footer-panel>
  </page>
</template>

<script>
import footerPanel from './footerPanel'

export default {
  name: 'home-page',
  data: ()=> ({
    active: 'home'
  }),
  components: {
    home: ()=> import ('./home'),
    fate: ()=> import ('../fate'),
    master: ()=> import ('../master'),
    mine: ()=> import ('../mine'),
    footerPanel
  },
  methods: {
    pick(item) {
      this.change(item.value)
    },
    change(val) {
      sessionStorage.setItem('active', val)
      this.active = val
    },
    init() {
      let act = sessionStorage.getItem('active')
      if(act) {
        let a = [
          {text: '首页', value: 'home'},
          {text: '大师亲测', value: 'master'},
          {text: '我的', value: 'mine'},
          {text: '运势', value: 'fate'}
        ]
        let b = a.find(item=> (item.value===act))
        if(b) {
          this.change(act)
          document.title = b.text
        } else {
          this.change('home')
        }
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
