# 20190802-show-me-the-code

分享的可以是一個簡單概念、一個小技巧，大啟發。

**Agenda**

* 什麼是模組化設計
* 為什麼我們需要模組化
* 為什麼學習寫模組化對你有好處？
* 什麼是好的模組，需要具備什麼？
* 如何開始建構你的模組？
* 我的模組
* 如果你真的想不到有哪些需要你的貢獻？

### 什麼是模組化(modular)

* 藉由使用具有「簡潔、經過妥善測試、文件化的 API 的小型模組來處理複雜性問題。
* 定義精確的 API 可以解決整合的複雜性，而且小模組的目的是讓城市更容易了解與使用。

### 為什麼我們需要模組化 (模組化設計的優點 / 好在哪裡)

* 是處理複雜性的手段之一
* 改善可維護性

<!-- * 你能想像沒有 `lodash` 和 `express`，你要花多久時間寫一個網站後端嗎？ -->

### 為什麼學習寫模組化對你有好處？

* 你可以像廣大的世界學習
    * <https://github.com/babel/babel/tree/master/packages>
    * <https://github.com/webdriverio/webdriverio/tree/master/packages>
* 你可以跟別人一起合作
    * <https://playproject.io/editor-solidity/>
* 你可以用你的技能幫助別人
    * <https://www.npmjs.com/package/koa-gcs>
* 你可以得到別人的幫助

### 什麼是好的模組，需要具備什麼？

* 一個好的 API 要遵循 CRUST 原則
    * 一致（Consistent）
    * 彈性（Resilient）
    * 明確（Unambiguous）
    * 簡單（Simple）
    * 小巧（Tiny）: 單一功能原則
* 最大限度地遵循所有的介面，向下相容
* 簡潔的介面
* 測試
* 使用說明書 (README)
    * 描述功能
    * 必要環境
    * 安裝說明
    * 使用說明 / 範例
    * 許可宣告 (License) 

### 我的模組有哪些？

* 人人都可以是 maker，打照你的積木方塊。

* <https://www.npmjs.com/package/youtube-playlist-cli>
    * <https://www.npmjs.com/package/youtube-playlist-markdown>
    * <https://www.npmjs.com/package/youtube-playlist-summary>
* <https://playproject.io/editor-solidity/>
    * <https://www.npmjs.com/package/codemirror-solidity>
    * <https://www.npmjs.com/package/solcjs-core>
    * <https://www.npmjs.com/package/solc-import>
* <https://marketplace.visualstudio.com/items?itemName=alincode.SuperPasteURL>
    * <https://github.com/alincode/SuperPasteURL>
* <https://www.npmjs.com/package/koa-gcs>

### 貢獻你的技能

**常見的模組型態**

* 組合型模組
    * <https://www.npmjs.com/package/koa-gcs>
* 包覆型模組
    * <https://www.npmjs.com/package/solc>
* 前端元件型模組
    * <https://www.npmjs.com/package/twzipcode-vue>
* plugin
    * <https://www.npmjs.com/search?q=plugin>
* Hook / middleware
    * <https://www.npmjs.com/package/koa-jwt>

### 如何開始建構你的模組？

**release 之前最少要提供什麼**
* 使用說明書
* 測試
* 範例

**Tips**
* 不要急著做抽象化，等真正需求出現再開出 API。
* 拆分模組：可以先放入 /lib 資料夾中

### 善用工具

* yarn workspaces
    * <https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/>
    * <https://github.com/jamiebuilds/rfcs-1/blob/workspaces/accepted/0000-workspaces.md>
    * <https://github.com/pedronauck/yarn-workspaces-example>
* lerna
    * <https://github.com/lerna/lerna>

### 結語

* 你需要用到的，通常也是別人需要的。
* 整個世界都是你的練功場