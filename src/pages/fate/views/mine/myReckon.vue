<template>
  <page>
    <div>
      <res-page desc='您还没有提问过大师哦'></res-page>
    </div>
  </page>
</template>

<script>
export default {
  components: {
    resPage:()=> import ('../../components/resPage.vue')
  }
}
</script>