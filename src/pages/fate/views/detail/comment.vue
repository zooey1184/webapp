<template>
  <div class="comment_item">
    <div class="flex f_a_c f_j_sb">
      <div class="flex f_a_c">
        <img class="icon_header" src="./icon_header.png" alt="">
        <h4>name</h4>
      </div>
      <p>2019-03-13</p>
    </div>
    <p class="desc">fasdfasdfasdfsaffadfdfasdfsaffadfdfasdfsaffadfdfasdfsaffadfafadfafasd</p>
  </div>
</template>

<style lang="less">
.comment_item {
  padding: 0 20px;
}
.icon_header {
  width: 26px;
  margin-right: 5px;
}
.desc {
  margin-left: 31px;
  position: relative;
  line-height: 20px;
  padding-bottom: 5px;
  word-break: break-all;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #bbb;
  }
}
</style>
