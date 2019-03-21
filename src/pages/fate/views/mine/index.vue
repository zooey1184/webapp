<template>
  <page :styleWrap='{background: "rgba(240,240,240,.3)"}'>
    <div>
      <lazy-img :img='bg' :styleBefore='{zIndex: -1}'></lazy-img>
      <img class="mg_c title_img" src="../../assets/person_title.png" alt="">
      <div>
        <item title='login' style='padding: 20px 0' :showLine='false'>
          <img slot='left' class="mine_header" src="../../assets/header.png" alt="">
        </item>
        <div style="height: 15px; background: #eee; width: 100%;"></div>

        <item title='login'>
          <img slot='left' class="icon_mine f_s0" src="../../assets/icon_bagua.png" alt="">
        </item>
        <item title='login'>
          <img slot='left' class="icon_mine f_s0" src="../../assets/icon_qa.png" alt="">
        </item>
        <item title='login'>
          <img slot='left' class="icon_mine f_s0" src="../../assets/icon_sale.png" alt="">
        </item>
        <item title='login'>
          <img slot='left' class="icon_mine f_s0" src="../../assets/star.png" alt="">
        </item>
      </div>
      <button class="bd_n lgout_btn" @click='$router.push("/login")'>login</button>
    </div>
  </page>
</template>

<script>
import item  from '../../components/item.vue'

export default {
  data: ()=> ({
    bg: '//r.51gjj.com/resource/jr/fate/fate_bg.png',
  }),
  components: {
    item
  }
}
</script>

<style lang="less">
.title_img {
  width: 50%;
  padding: 20px 0;
  z-index: 3;
}
.mine_header {
  width: 52px;
  margin: 0 12px;
}
.icon_mine {
  width: 20px;
  margin-left: 16px;
  margin-right: 12px;
}
@bc: #d43f33;
@bca: #ee7e22;
.lgout_btn {
  margin-top: 55px;
  height: 49px;
  color: @bc;
  font-size: 16px;
  border-top: 1px solid @bc;
  border-bottom: 1px solid @bc;
  background: transparent;
  width: 100%;
  &:active {
    opacity: .8;
    color: @bca;
    border-top: 1px solid @bca;
    border-bottom: 1px solid @bca;
  }
}
</style>
