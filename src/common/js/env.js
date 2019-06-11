/* global  Global */
/**
 * 判断环境的函数类
 */
export default function () {
  class Env {
    constructor () {
      this.kaifaEnv = ['127.0.0.1', 'localhost', 'www.zooey1184.com']
    }
    originHost (str = '127.0.0.1') {
      let kaifa = this.kaifaEnv
      let o = window.location.host
      let protocol = window.location.protocol // => http:  || https:
      let s = `${protocol}//${str}`
      let t = kaifa.some((item, index, arr) => {
        let r = new RegExp(item)
        return o.match(r)
      })
      if (t) {
        return s
      } else {
        return `${protocol}//${o}`
      }
    }
    env () {
      let kaifa = this.kaifaEnv
      let o = window.location.host
      let t = kaifa.some((item, index, arr) => {
        let r = new RegExp(item)
        return o.match(r)
      })
      return t
    }
    mode () {
      let originMode = 'localhost'
      let pro = window.location.host
      let protocol = window.location.protocol
      let slag = 'app'
      let fullpath = ''
      if (Global.getUrlData().origin_mode) {
        originMode = Global.getUrlData().origin_mode
        pro = originMode.replace(/_/g, '.')
        pro = `${protocol}//${pro}`
      } else {
        pro = `${protocol}//${pro}`
      }
      if (Global.getUrlData().slag) {
        slag = Global.getUrlData().slag
      }
      if (Global.getUrlData().fullpath) {
        fullpath = Global.getUrlData().fullpath
      }
      return {
        o: pro,
        s: slag,
        p: fullpath
      }
    }
  }
  return new Env()
}
