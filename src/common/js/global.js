//  版本 ：v.1.2016.05.27
/* eslint-disable */
(function () {

  /**
   *
   * fn => 数字格式化
   * @param {string} [separator=',']  分割千分位
   * @param {number} [decimals=0]  保留小数位
   * @param {string} [decimal='.']  小数位分割
   * @param {string} [prefix='']  前缀
   * @param {string} [suffix='']  后缀
   * @returns
   */
  Number.prototype.formate = function (separator=',', decimals=0, decimal='.', prefix='', suffix='') {
    let num = this
    num = num.toFixed(decimals);
    num += '';
    const x = num.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? decimal + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    if (separator && typeof(separator)!=='number') {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + separator + '$2');
      }
    }
    return prefix + x1 + x2 + suffix
  }

  /**
   *
   * 调用方法后的函数
   * @param {*} fn
   * @returns
   */
  Function.prototype.after = function(fn) {
    const  __self = this
    return function() {
      const currentFn = __self.apply(this, arguments)
      fn.apply(this, arguments)
      return currentFn
    }
  }

  /**
   *
   * 调用方法前的函数
   * @param {*} fn
   * @returns
   */
  Function.prototype.before = function(fn) {
    const __self = this
    return function() {
      if (fn.apply(this, arguments) === false) return false
      return __self.apply(this, arguments)
    }
  }


  window.Global = {
    init: function(argument) {
      var self = this;
      // this.log("Global init");
      // this.baseSet();
      // this.SetFont();
      return this;
    },
    SetFont(v) {
      var v = v || 375;
      let clientRect = function () {
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
      var WH = clientRect()
      var f = WH.w / v * 100;
      f = f < 100 ? f : 100;
      var html = document.getElementsByTagName('html')[0]
      console.log(f)
      html.style.fontSize = `${f}px`
      // html.attr("style", "font-size:" + f + "px !important;");
      return this;
    },
    debounce(id, fn, time=100) {
      let t = `Global_debounce_${id}` // id 唯一识别标识
      let s = sessionStorage.getItem(t) || null
      if(s) return
      sessionStorage.setItem(t, id)
      fn()
      setTimeout(()=> {
        sessionStorage.removeItem(t)
      }, time)
    },
    listenModel() {
      class Center {
        constructor() {
          this.client = []
        }
        listen(k, f) {
          if (!this.client[k]) {
            this.client[k] = []
          }
          this.client[k].push(f)
        }
        publish() {
          let key = Array.prototype.shift.call(arguments)
          let fs = this.client[key]
          if (!fs || fs.length < 1) return false
          for (let i = 0; i < fs.length; i++) {
            fs[i].apply(this, arguments)
          }
        }
      }
      return new Center()
    },
    loadScript(url, callback) {
      var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement,
        script,
        options;

      if (typeof url === 'object') {
        options = url;
        url = undefined;
      }
      var s = options || {};
      url = url || s.url;
      callback = callback || s.success;
      script = document.createElement('script');
      script.async = s.async || false;
      script.type = 'text/javascript';
      if (s.charset) {
        script.charset = s.charset;
      }
      if (s.cache === false) {
        url = url + (/\?/.test(url) ? ' & ' : ' ? ') + '_ = ' + (new Date()).getTime();
      }
      script.src = url;
      head.insertBefore(script, head.firstChild);
      if (callback) {
        document.addEventListener ? script.addEventListener('load', callback, false) : script.onreadystatechange = function() {
          if (/loaded|complete/.test(script.readyState)) {
            script.onreadystatechange = null
            callback()
          }
        }
      }
    },
    Origin: function(e) {
      return this.baseUrl + (e || "")
    },
    Url: function() {
      var s = "";
      for (var i = 0; i < arguments.length; i++) {
        s += "/" + arguments[i];
      }
      return this.baseUrl + s.replace(/\/+/g, '/');
    },
    getUrlData: function(u) { //分解地址参数
      var url = u || window.location.href;
      url = url.split("?");
      if (url.length <= 1) {
        return {};
      }
      var search = url[1].split("#")[0];
      var params = {};
      if (!!search) {
        var tmp = search.split('&');
        for (var i = 0; i < tmp.length; i++) {
          var kv = tmp[i].split('=');
          if (kv.length == 2) {
            params[kv[0]] = decodeURIComponent(kv[1]);
          }
        }
      }
      return params;
    },
    jointUrl: function(p) {
      var str = "";
      for (let i in p) {
        str += "&" + i + "=" + p[i];
      }
      return str;
    },
    creatUrl: function(h, p) {
      var _h = h.split("#"),
        _hash = "";
      var d = Object.assign(this.getUrlData(h), p);
      if (_h.length == 2) _hash = '#' + _h[1];
      var u = h.split("?");
      return (u[0] + "?" + this.jointUrl(d) + _hash).replace("?&", "?").replace(/\?*$/g, "")
    },
    toSring: function(s) {
      return JSON.stringify(s);
    },
    
    Cookie: function(a, b, t) {
      if (a && b) {
        var exp = new Date();
        exp.setTime(exp.getTime() + (t || 0) * 1000 * 60);
        document.cookie = a + "=" + escape(b) + ((t == null) ? "" : ";expires=" + exp.toGMTString()) + ";path=/";
      } else if (a) {
        var arr, reg = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
          return unescape(arr[2]);
        else
          return null;
      } else {
        return '';
      }
    },
    
    listenPage(p) {
      function run(opt) {

        function getHiddenProp() {
          var prefixes = ['webkit', 'moz', 'ms', 'o'];
          if ('hidden' in document) return 'hidden';
          for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document)
              return prefixes[i] + 'Hidden';
          }
          return null;
        }

        function getVisibilityState() {
          var prefixes = ['webkit', 'moz', 'ms', 'o'];
          if ('visibilityState' in document) return 'visibilityState';
          for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'VisibilityState') in document)
              return prefixes[i] + 'VisibilityState';
          }
          return null;
        }

        function isShow() {
          var prop = getHiddenProp();
          if (!prop) return true;
          return !document[prop];
        }
        var visProp = getHiddenProp();
        var _self = this;
        window._listenPageOption = opt;
        window._pageReloadTimeSet = 0;
        window._pageLeaveTimeSet = 0;
        window.setTimeout(function() {
          _self.outLoad = true;
          _self.outClose = true;
        }, 3000)

        function result(m) {
          console.log("pageChange", m);
          var option = window._listenPageOption || {};
          var time = option.time || 4;
          if (m && option && option.onload) {
            var _cg = ((new Date()).getTime() - window._pageReloadTimeSet) / 1000;
            if (_cg < time) {
              return false;
            }
            window._pageReloadTimeSet = (new Date()).getTime();
            if (_self.outLoad) {
              setTimeout(function() {
                _self.outLoad = false;
                option.onload();
                setTimeout(function() {
                  _self.outLoad = true
                }, 200)
              }, 1000)
            }
          } else if (!m && option && option.onclose) {
            var _cg = ((new Date()).getTime() - window._pageLeaveTimeSet) / 1000;
            if (_cg < time) {
              return false;
            }
            window._pageLeaveTimeSet = (new Date()).getTime();
            if (_self.outClose) {
              _self.outClose = false;
              option.onclose();
              setTimeout(function() {
                _self.outClose = true
              }, 3000)
            }
          }
        }
        if (visProp) {
          var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
          window._pageListenFun = window._pageListenFun || null;
          document.removeEventListener(evtname, window._pageListenFun, false);
          window._pageListenFun = function() {
            var r = document[getVisibilityState()] == "visible" || isShow();
            result(r)
          }
          document.addEventListener(evtname, window._pageListenFun, false);
        }
        window.onfocus = function() {
          result(true)
        };
        window.onblur = function() {
          result(false)
        };
      }
      new run(p)
    },
    
    Crash: function(m, p) { //错误日志
      var self = this;
      if (!this.local && typeof _Log != "undefined") {
        _Log.Crash(encodeURIComponent(m.replace(/\s+/g, " ")), {
          mark: encodeURIComponent(window.location.href)
        })
      }
    }

  }
  window.Crash = Global.Crash;
  Global.init();

})()
