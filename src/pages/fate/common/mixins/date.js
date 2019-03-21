export default {
  data: () => ({
    pickDate: [],
    dayList: [],
    y: null,
    m: null,
    d: null,
    dateType: {
      text: '切换到农历',
      value: 'xinli'
    }
  }),
  methods: {
    getDatePick () {
      class DatePick {
        dataDeal (data, text = '') {
          let arr = []
          for (let i = 0; i < data.length; i++) {
            let obj = {
              text: `${i + 1}${text}`,
              value: i + 1
            }
            arr.push(obj)
          }
          return arr
        }
        initDate () {
          let self = this
          let t = new Date()
          let rangeY = 100
          let currentY = t.getFullYear()
          let dataY = []
          let dataM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          let dataDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
          let nonthDay29 = [29]
          let nonthDay30 = [29, 30]
          let nonthDay31 = [29, 30, 31]
          for (let i = 0; i < rangeY; i++) {
            let obj = {
              text: `${currentY - i}年`,
              value: currentY - i
            }
            dataY.push(obj)
          }
          return {
            y: dataY,
            m: self.dataDeal(dataM, '月'),
            d28: self.dataDeal(dataDay, '日'),
            d29: self.dataDeal([...dataDay, ...nonthDay29], '日'),
            d30: self.dataDeal([...dataDay, ...nonthDay30], '日'),
            d31: self.dataDeal([...dataDay, ...nonthDay31], '日')
          }
        }
        getDay (y, m = 1) {
          let d = 30
          let most = [1, 3, 5, 7, 8, 10, 12]
          if (m === 2) {
            if (y % 4 === 0) {
              d = 29
            } else {
              d = 28
            }
          } else {
            let b = most.some((i, k, a) => {
              return i === m
            })
            if (b) {
              d = 31
            } else {
              d = 30
            }
          }
          return d
        }
      }
      return new DatePick()
    },
    nongliFn () {
      class NongLi {
        dataDeal (data, text = '') {
          let arr = []
          for (let i = 0; i < data.length; i++) {
            let obj = {
              text: `${data[i]}${text}`,
              value: i
            }
            arr.push(obj)
          }
          return arr
        }
        initDate () {
          let self = this
          let t = new Date()
          let rangeY = 100
          let currentY = t.getFullYear()
          let dataY = []
          let dateMonth = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '腊']
          let dateDay = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '廿十', '廿十一', '廿十二', '廿十三', '廿十四', '廿十五', '廿十六', '廿十七', '廿十八', '廿十九', '卅十']
          for (let i = 0; i < rangeY; i++) {
            let obj = {
              text: `${currentY - i}年`,
              value: currentY - i
            }
            dataY.push(obj)
          }
          return {
            y: dataY,
            m: self.dataDeal(dateMonth, '月'),
            d: self.dataDeal(dateDay, '')
          }
        }
      }
      return new NongLi()
    },

    init () {
      let p = null
      let d = null
      if (this.dateType.value === 'nongli') {
        p = this.nongliFn().initDate()
        d = p.d
      } else {
        p = this.getDatePick().initDate()
        this.watchDay()
        d = this.dayList
      }
      this.y = this.y ? this.y : p.y[0].value
      this.m = this.m ? this.y : p.m[0].value
      this.pickDate = [p.y, p.m, d]
    },
    watchDay () {
      let p = this.getDatePick().initDate()
      let d = this.getDatePick().getDay(this.y, this.m)
      if (d === 28) {
        this.dayList = p.d28
      } else if (d === 29) {
        this.dayList = p.d29
      } else if (d === 30) {
        this.dayList = p.d30
      } else {
        this.dayList = p.d31
      }
      return this.dayList
    },
    changeFn (i, e) {
      let type = this.dateType.value
      let p = type === 'nongli' ? this.nongliFn().initDate() : this.getDatePick().initDate()
      let d = type === 'nongli' ? p.d : this.watchDay()
      if (i === 0) {
        this.y = p.y[e].value
      } else if (i === 1) {
        this.m = p.m[e].value
      }
      this.pickDate = [p.y, p.m, d]
    }
  }
}
