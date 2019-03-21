<template>
  <page :styleWrap='{background: "#F4F4F4"}'>
    <div>
      <cell-wrap style="padding: 0 16px" :fullLine='true'>
        <cell title='name' :height='89'>
          <div slot='right' style="padding-top: 18px" class="flex f_a_c">
            <img style="width: 58px; margin-right: 12px" src="../../assets/icon_header.png" alt="">
            <img class="arrow_img" src="../../assets/arrow.png" alt="">
          </div>
        </cell>
        <cell title='name' :height='52' @click.native='$router.push("/changeInfo")'>
          <div slot='right' style="padding-top: 7px" class="flex f_a_c">
            <p style="margin-right: 12px" >helo</p>
            <img class="arrow_img" src="../../assets/arrow.png" alt="">
          </div>
        </cell>
      </cell-wrap>
    </div>
  </page>
</template>

<script>
import cell from '@/components/Cell'

export default {
  components: {
    ...cell,
  }
}
</script>

<style lang="less" scoped>
.arrow_img {
  width: 10px;
}
</style>