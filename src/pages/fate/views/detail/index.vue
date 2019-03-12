<template>
  <page>
    <div>
      <info-inp></info-inp>
      
    </div>
  </page>
</template>

<script>
import infoInp from './infoInp.vue'

export default {
  components: {
    infoInp
  },
  data: ()=> ({
    sex: ''
  })
}
</script>
