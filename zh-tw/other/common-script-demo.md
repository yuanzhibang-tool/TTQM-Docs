> 一些通用腳本示例,這些示例在`TTQM`任何腳本中都可以使用

### 1.同步使用異步方法 :id=1

!>一些時候,可能需要同步返回一些異步(返回`Promise`)返回的數據,本示例用來展示如何同步獲取異步返回的數據

```javascript
const { FileUtil } = require("@ttqm/ttqm-support");

// 整個方法體都需要使用`async () => {}`包裹
const main = async () => {
  const filePath = FileUtil.getScriptDataPath("test.txt");
  // 檢測文件是否存在
  const exist = FileUtil.existSync(filePath);
  console.log(exist);
  // exist = false
  // 寫入文件
  FileUtil.createStringFileSync(filePath, "test content");
  // 添加await,來時先同步返回
  const fileHash = await FileUtil.getFileHash(filePath);
  console.log(fileHash);
  // 獲取文件內容
  const fileContent = FileUtil.readStringFileSync(filePath);
  console.log(fileContent);
  // fileContent = 'test content'
};
// 調用main函數
main();
```

### 2.使用證書加解密,文件操作,字符串計算`hash`

!>請查看[有哪些內置的腳本依賴庫?](zh-tw/question/build-in-module?id=_6)

---

### 3.定時重複執行某些操作

```javascript
// 第二個參數單位為毫秒,每1s執行特定操作
let times = 0;
const intervId = setInterval(() => {
  console.log("interval action");
  times++;
  if (times == 4) {
    // 清理定時器
    clearInterval(intervId);
  }
}, 1000);

// 'interval action'將會輸出四次
```

---

### 4.延遲執行某些操作

```javascript
// 第二個參數單位為毫秒,4s後執行特定操作
const timeoutId = setTimeout(() => {
  console.log("timeout action");
}, 4000);
// 清理延遲執行,清理後,延遲將不會執行
clearTimeout(timeoutId);
```

---

!>其他更多示例,請參照[有哪些內置的腳本依賴庫?](zh-tw/question/build-in-module)
