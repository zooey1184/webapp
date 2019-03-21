<template>
  <div>
    <div class="respage">
      <slot name='img'>
        <img class="icon_empty" src="../assets/empty_qa.png" alt="">
      </slot>
      <p class="desc">{{desc}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    desc: String
  }
}
</script>

<style lang="less" scoped>
.respage {
  img {
    width: 48px;
    display: block;
    margin: 12px auto;
    margin-top: 35px;
  }
  .desc {
    color: #9B9B9B;
    text-align: center;
    font-size: 14px;
  }
}

</style>
