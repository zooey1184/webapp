<template>
  <page :styleWrap="{background: '#faf4ec'}">
    <div>
      <panel>
        <div>
          <juan-zhou title='大吉大利'></juan-zhou>
          <p>
            今天的你财运只能算一般，求财容易遇到问题，不利于投资经商，适合发展金融财务税务。但也需要保持清醒头脑，不能太过冲动，意气用事。
          </p>
          <img class="mg_c fate_img_title" src="../../assets/fate_title.png" alt="">
          <div style="padding: 8px 15px; ">
            <guide :list='list'></guide>
          </div>
        </div>
      </panel>

      <panel>
        <div>
          <p style="font-size: 16px; color:#A96A30; margin: 10px 18px;">今天的你财运只能算一般</p>
          <img class="mg_c fate_btn " src="../../assets/btn.png" alt="">
        </div>
      </panel>

      <panel>
        <div>
          <div class="flex f_a_c f_j_sa">
            <img class="year_png" src="../../assets/y.png" alt="">
            <img class="year_png" src="../../assets/year.png" alt="">
            <img class="year_png" src="../../assets/n.png" alt="">
          </div>
          <div>
            <huang-li :y='y' :n='n'></huang-li>
          </div>
        </div>
      </panel>
      
      <div style="height: 60px"></div>
    </div>
  </page>
</template>

<script>
import panel from './panel.vue'
import juanZhou from './juanZhou.vue'
import guide from './guide.vue'
import huangLi from './huangLi.vue'

export default {
  name: 'fate-page',
  components: {
    panel,
    juanZhou,
    guide,
    huangLi
  },
  data: ()=> ({
    list: [
      {name: '招财位', value: '西南方'},
      {name: '招财数字', value: '7'},
      {name: '招财色', value: '胭脂色'}
    ],
    y: ["架梁", "出土", "婚姻"],
    n: ["访友", "出门", "聚会"]
  })
}
</script>

<style lang="less">
.fate_img_title {
  width: 40%;
  margin-top: 20px;
}
.fate_btn {
  width: 55%;
  margin: 10px auto;
  &:active {
    opacity: .8;
  }
}
.year_png {
  height: 44px;
}
</style>
