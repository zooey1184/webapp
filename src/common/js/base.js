/**
 * 获取地址栏 或 类似地址栏字符串转化 obj
 * @export
 * @param {*} search
 * @returns {}
 */
export function getUrlData (search) {
  let s = search || window.location.search
  // 为了兼容ie
  let a1 = s.match(/\?/g) ? s.split('?') : []
  let obj = {}
  if (a1.length > 0) {
    a1 = a1[1].match('=') ? a1[1].split('&') : []
    for (let i = 0; i < a1.length; i++) {
      obj[a1[i].split('=')[0]] = a1[i].split('=')[1]
    }
  }
  return obj
}

/**
 * 日期格式化输出
 * @export
 * @param {*} [t=new Date()]
 * @param {string} [split='-']
 * @param {number} [date=0]
 * @returns year-moon-day (hour:min:sec)
 */
export function timeFormate (t = new Date(), split = '-', date = 0) {
  let time = new Date(t)
  let y = time.getFullYear()
  let m = (time.getMonth() + 1) < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1
  let d = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()
  let h = ''
  let min = ''
  let sec = ''
  let secT = ''
  if (date) {
    h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    min = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
    sec = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()
    secT = ` ${h}:${min}:${sec}`
  }
  let formate = `${y}${split}${m}${split}${d}`
  return `${formate}${secT}`
}

/**
 * 获取body的dom位置宽高元素
 * @export
 * @returns {w: number, h: number}
 */
export function clientRect () {
  let posi = {
    w: 375,
    h: 603
  }
  if (!window.innerWidth) {
    posi.w = document.documentElement.clientWidth
    posi.h = document.documentElement.clientHeight
  } else {
    posi.w = window.innerWidth
    posi.h = window.innerHeight
  }
  return posi
}

/**
 * 自动添加style前缀
 * @export
 * @param {*} name
 * @returns name || pre+name
 */
export function autoAddStylePre (name) {
  let arr = ['-moz-', '-webkit-', '-o-', '-ms-']
  let styleHtml = document.documentElement.style
  if (name in styleHtml) {
    return name
  } else {
    let i = arr.find((item) => {
      return `${item}${name}` in styleHtml
    })
    return `${i}${name}`
  }
}

/**
 * 校验函数
 * add =》添加校验规则; test=> 校验某项tag=》需要校验的tag，data=》需要校验的输入
 * @export
 * @returns
 */
export function checkItem () {
  class Rule {
    constructor () {
      this.rules = []
      this.arr = []
    }
    add (rule) {
      let a = this.rules
      let b = a.some((item) => {
        return item.tag === rule.tag
      })
      if (b) return
      a.push(rule)
      this.rules = a
    }
    test (tag, data) {
      let t = this.rules
      let a = this.arr
      for (let i = 0; i < t.length; i++) {
        if (t[i]) {
          a.push(t[i])
        }
      }
      t = a
      let res = false
      for (let i = 0; i < t.length; i++) {
        if (tag === t[i].tag) {
          if (data.match(t[i].rule)) {
            res = true
          } else {
            res = false
          }
          return {
            res: res,
            msg: t[i].msg || ''
          }
        }
      }
    }
  }
  return new Rule()
}
