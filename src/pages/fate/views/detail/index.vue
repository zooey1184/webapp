<template>
  <page :classWrap='{detailPageClass: true}'>
    <div class="detail_wrap">
      <div class="detail_title" style="padding: 20px;">
        <img src="../../assets/detail_title_bg.png" alt="">
        <text-panel name='leftSlide' title='helloworld'></text-panel>
      </div>
      <div style="position: relative">
        <p class="txt">
          站在人生的岔路口，有时候钱和事业并不能两存，一份不合适的工作，可能会让你赚钱很辛苦，甚至赚得很少，所以找到适合自己的行业和岗位很重要。你知道自己朝哪方面发展会更加顺利吗？对于你来说做什么工作会最赚钱呢？
        </p>
        <lazy-img :img='detailImg' :styleBefore='{ bottom: "-50px"}'></lazy-img>
      </div>
      <div style="padding: 20px;">
        <info-inp></info-inp>
      </div>
      <h3 class="comment_title">评论</h3>
      <comment></comment>
    </div>
  </page>
</template>

<script>
import infoInp from './infoInp.vue'
import textPanel from '../../components/textPanel.vue'
import detailImg from '../../assets/detail_bg.png'
import comment from './comment.vue'

export default {
  components: {
    infoInp,
    textPanel,
    comment
  },
  data: ()=> ({
    detailImg: detailImg
  })
}
</script>

<style lang="less">
.detail_wrap {
  font-size: 14px;
  color: #333;
  position: relative;
  .txt {
    text-align: justify;
    position: relative;
    text-indent:2em;
    padding: 0 20px;
    z-index: 2;
  }
  .detail_title {
    position: relative;
    img {
      position: relative;
      width: 100%;
      height: auto;
    }
    &>div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 14%;
      color: #fff;
      font-size: 16px;
    }
  }
  .comment_title {
    color: #333333;
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }
}
</style>
