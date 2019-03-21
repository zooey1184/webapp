<template>
  <div class="wrap mg_c">
    <img class="bd_lt" src="../../assets/bd_lt.png" alt="">
    <img class="bd_rt" src="../../assets/bd_rt.png" alt="">
    <slot></slot>
    <img class="bd_lb" src="../../assets/bd_lb.png" alt="">
    <img class="bd_rb" src="../../assets/bd_rb.png" alt="">
  </div>
</template>

<style lang="less">
.wrap {
  position: relative;
  min-height: 92px;
  width: 90%;
  padding: 10px;
  color: #A96A30;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.bd {
  width: 114px;
  display: block;
}
.bd_lt {
  position: absolute;
  left: 0;
  top: 0;
  .bd
}
.bd_rt {
  position: absolute;
  right: 0;
  top: 0;
  .bd
}
.bd_lb {
  position: absolute;
  left: 0;
  bottom: 0;
  .bd
}
.bd_rb {
  position: absolute;
  bottom: 0;
  right: 0;
  .bd
}
</style>
