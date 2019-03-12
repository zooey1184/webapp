<template>
  <div class="nav_panel flex f_a_c f_j_sb">
    <div>
      <img class="icon_nav" src="./img/nav_fate.png" alt="">
    </div>
    <h3>title</h3>
    <div class="nav_msg">
      <img class="icon_nav" src="./img/nav_msg.png" alt="">
      <div class="new_msg_circle" v-if='count'>
        <span v-if='showNum'>{{count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: [Number, String]
    }
  },
  computed: {
    showNum() {
      if(this.count && this.count >= 10) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less">
.nav_panel {
  padding: 20px;
  h3 {
    color: #B68C76;
    font-size: 20px;
  }
  .nav_msg {
    position: relative;
    .new_msg_circle {
      position: absolute;
      right: -3px;
      top: 0;
      width: 13px;
      height: 13px;
      background: #EB5C75;
      color: #fff;
      border-radius: 10px;
      text-align: center;
      &>span {
        font-size: 12px;
        transform: scale(.8);
        position: relative;
        top: -5px;
        display: inline-block
      }
    }
  }
}
.icon_nav {
  width: 20px;
}
</style>
