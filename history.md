# 模組化的常見格式

* Module Pattern
* CommonJS (CJS)
  * 只有一種宣告方式
  * 檔案與模組的關係是一對一的

```js
let { stat, exists, readFile } = require('fs');
```

* AMD (Asynchronous Module Definition)

> 當一個模塊可以在服務器端環境中使用時選擇 CJS，否則就選擇 AMD。

* ESM (ES Harmony)：ES6 規格加入了 JS 原生的模組語法，通常稱為 ECMAScript 模組
  * 提供了一種靜態的宣告式 API
  * 每一個檔案都是一個模組，有它自己的範圍與環境。

```sh
npx browserify 03-run.js -o 04-bundle.js
```

### module loader (加載器)

* RequireJS
    * 有多種宣告方式
    * 每個檔案都可以有許多動態定義的模組
* AngularJS
  * 有多種宣告方式
  * 有許多種工廠、服務、供應商等等宣告方式

### ESM vs CommonJS

* ESM 比 CJS 好的主要優勢在於 ESM 可以靜態匯入依賴項目。靜態匯入大幅改善模組系統的自我檢查能力，因為模組系統可以被靜態分析，並且可用詞彙從系統的各個模組的抽象語法樹 (AST) 取出。