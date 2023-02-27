!>您必須在安裝第三方依賴之前,請確保您的電腦已經安裝了`node環境`,沒有安裝的話,請根據文檔安裝[如何安裝指定版本的 node?](zh-tw/question/how-to-install-node-version-specified.md)

---

### 1.命令行中切換到安裝模塊路徑 :id=1

> 在`應用 > 設置`中拷貝`cd命令`

![複製命令](_media/how-to-add-support-modules/1.jpg ':size=500')

---

### 2.安裝需要使用到的庫,例如需要使用到`lodash` :id=2

```bash
# 粘貼第一步中拷貝的命令
cd /第三方支持模塊路徑

# 安裝lodash庫
npm install lodash

# !如果中國大陸安裝較慢,請指定源
npm install lodash --registry=https://registry.npmmirror.com
```

### 3.即可在腳本中使用 :id=3

```javascript
var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
```

---

### 4.安裝@types,增強編輯器類型提示

!>從 `TTQM` `1.1.0` 開始內置的腳本編輯器支持代碼提示和補全功能,你可以在 [https://www.npmjs.com](https://www.npmjs.com) 上搜索您需要提示的模塊,例如需要安裝`lodash`的類型定義, 搜索`@types/lodash`,如果存在,請使用 `npm install @types/lodash` 安裝,或者直接使用 `npm install @types/對應包名稱`進行安裝,安裝成功則代表包含該庫.
