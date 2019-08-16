// Module Pattern
// 利用函數的 closure 特性來避免汙染全域的問題，並提供封裝的功能，
// 將函式和變數限制在一個範圍內存取與使用。
const counter = (function() {
  let i = 0

  // closure
  return {
    get: function() {
      return i
    },
    set: function(val) {
      i = val
    },
    increment: function() {
      return ++i
    },
  }
})()

counter.get() // 0
counter.set(3)
counter.increment() // 4
counter.increment() // 5

// <https://addyosmani.com/resources/essentialjsdesignpatterns/book/>
