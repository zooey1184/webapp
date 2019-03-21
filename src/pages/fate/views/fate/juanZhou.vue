<template>
  <div class="juanzhou_ mg_c">
    <img class="mg_c" src="../../assets/fate_jz.png" alt="">
    <p>今日运势</p>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped lang="less">
.juanzhou_ {
  position: relative;
  width: 80%;
  padding-top: 10px;
  padding-bottom: 10px;
  img {
    position: relative;
    width: 100%;
  }
  p {
    position: absolute;
    font-size: 12px;
    color: #CFAD7E;
    width: 100%;
    text-align: center;
    top: 25%;
  }
  h3 {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 32px;
    color: #000;
    top: 38%;
    font-weight: 500
  }
}
</style>
