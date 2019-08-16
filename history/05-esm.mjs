import { foo } from './foobar'
import foobar from './foobar'
console.log(foo()) // 'foo'
console.log(foobar()) // 'bar'

// node --experimental-modules 04-esm.mjs

// === foobar.mjs ===
// function foo() {
//   return 'foo'
// }
// function bar() {
//   return 'bar'
// }
// export { foo }
// export default bar
