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
    getDatePick() {
      class DatePick {
        dataDeal(data, text = '') {
          let arr = []
          for (let i = 0; i < data.length; i++) {
            let obj = {
              text: `${i+1}${text}`,
              value: i + 1
            }
            arr.push(obj)
          }
          return arr
        }
        initDate() {
          let self = this
          let t = new Date()
          let rangeY = 100
          let current_y = t.getFullYear()
          let data_y = []
          let data_m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          let data_d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
          let d_29 = [29]
          let d_30 = [29, 30]
          let d_31 = [29, 30, 31]
          for (let i = 0; i < rangeY; i++) {
            let obj = {
              text: `${current_y-i}年`,
              value: current_y - i
            }
            data_y.push(obj)
          }
          return {
            y: data_y,
            m: self.dataDeal(data_m, '月'),
            d28: self.dataDeal(data_d, '日'),
            d29: self.dataDeal([...data_d, ...d_29], '日'),
            d30: self.dataDeal([...data_d, ...d_30], '日'),
            d31: self.dataDeal([...data_d, ...d_31], '日')
          }
        }
        getDay(y, m = 1) {
          let d = 30
          let most = [1, 3, 5, 7, 8, 10, 12]
          let less = [4, 6, 9, 11]
          let lest = 2
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
    nongliFn() {
      class NongLi {
        dataDeal(data, text = '') {
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
        initDate() {
          let self = this
          let t = new Date()
          let rangeY = 100
          let current_y = t.getFullYear()
          let data_y = []
          let date_m_n = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '腊']
          let date_d = ['初一','初二','初三','初四', '初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五',
          '十六', '十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十']
          for (let i = 0; i < rangeY; i++) {
            let obj = {
              text: `${current_y-i}年`,
              value: current_y - i
            }
            data_y.push(obj)
          }
          return {
            y: data_y,
            m: self.dataDeal(date_m_n, '月'),
            d: self.dataDeal(date_d, '')
          }
        }
      }
      return new NongLi()
    },

    init() {
      let p = null
      let d = null
      if(this.dateType.value=='nongli') {
        p = this.nongliFn().initDate()
        d = p.d
      }else {
        p = this.getDatePick().initDate()
        this.watchDay()
        d = this.dayList
      }
      this.y = this.y ? this.y : p.y[0].value
      this.m = this.m ? this.y : p.m[0].value
      
      this.pickDate = [p.y, p.m, d]
    },
    watchDay() {
      let p = this.getDatePick().initDate()
      let d = this.getDatePick().getDay(this.y, this.m)
      if (d == 28) {
        this.dayList = p.d28
      } else if (d == 29) {
        this.dayList = p.d29
      } else if (d == 30) {
        this.dayList = p.d30
      } else {
        this.dayList = p.d31
      }
      return this.dayList
    },
    changeFn(i, e) {
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
