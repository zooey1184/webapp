<template>
  <page>
    <div>
      <cell-wrap>
        <cell title='name' :height='89'>
          <div slot='right' class="flex f_a_c">
            <img src="../../assets/icon_header.png" alt="">
            <img src="../../assets/arrow.png" alt="">
          </div>
        </cell>
        <cell title='name' :height='52'></cell>
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