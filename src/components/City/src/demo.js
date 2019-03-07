export default {
  methods: {
    demoCityF () {
      this.$city.show({
        change: (i) => {
          console.log(i)
        }
      })
    }
  }
}
