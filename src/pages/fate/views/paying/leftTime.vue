<template>
  <span>
    {{t}}
  </span>
</template>

<script>
export default {
  data: ()=> ({
    t: '29:59'
  }),
  mounted() {
    let s = 59
    let m = 29
    let t = setInterval(()=> {
      if(m<1 && s<=0) {
        clearInterval(t)
        this.$emit('over')
      } else {
        if(s<=0) {
          m--
          s = 59
        } else {
          s--
        }
        let mm = m<10? `0${m}` : m
        let ss = s<10? `0${s}` : s
        this.t = `${mm}:${ss}`
      }
    }, 1000)
  }
}
</script>