;(function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require
          if (!f && c) return c(i, !0)
          if (u) return u(i, !0)
          var a = new Error("Cannot find module '" + i + "'")
          throw ((a.code = 'MODULE_NOT_FOUND'), a)
        }
        var p = (n[i] = { exports: {} })
        e[i][0].call(
          p.exports,
          function(r) {
            var n = e[i][1][r]
            return o(n || r)
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        )
      }
      return n[i].exports
    }
    for (
      var u = 'function' == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i])
    return o
  }
  return r
})()(
  {
    1: [
      function(require, module, exports) {
        const uppercaseModule = require('./uppercase.js/index.js')
        const { a, b, c } = require('./uppercase.js/index.js')

        console.log(uppercaseModule.uppercase('test'))
        console.log(a, b, c)
      },
      { './uppercase.js': 2 },
    ],
    2: [
      function(require, module, exports) {
        // CommonJS (CJS)
        exports.uppercase = str => str.toUpperCase()

        exports.a = 1
        exports.b = 2
        exports.c = 3
      },
      {},
    ],
  },
  {},
  [1]
)
