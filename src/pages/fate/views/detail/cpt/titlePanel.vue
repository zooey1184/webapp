<template>
  <div class="detail_title">
    <slot>
      <img src="./tt.png" alt="">
    </slot>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="less">
.detail_title {
  position: relative;
  min-height: 30px;
  font-size: .16rem;
  width: 70%;
  padding: 20px;
  img {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
