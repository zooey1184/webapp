<template>
  <page :styleWrap='{background: "#fafafa"}'>
    <div>
      <div class="tp_pane flex f_a_c f_j_sb">
        <button class="txt_btn btn">取消</button>
        <h4 class="title">个人信息</h4>
        <button class="btn bd_btn">完成</button>
      </div>
      <div>
        <input class="inp bd_n" type="text" v-model='nickname'>
      </div>
    </div>
  </page>
</template>

<script>
export default {
  data: ()=> ({
    nickname: 'hello'
  })
}
</script>

<style scoped lang="less">
.tp_pane {
  padding: 10px 16px;
  .txt_btn {
    background: transparent;
    color: #333;
    &:active {
      color: #15c774
    }
  }
  .bd_btn {
    background: #A96A30;
    color: #fff;
    &:active {
      opacity: .8;
    }
  }
  .btn {
    border: none;
    padding: 6px 13px;
    outline: none;
    border-radius: 3px;
    font-size: 16px;
    box-sizing: border-box
  }
  .title {
    font-size: 20px;
    color: #333333
  }
}
.inp {
  background: #fff;
  color: #999;
  width: 100%;
  padding-left: 16px;
  height: 50px;
  font-size: 16px;
}
</style>
