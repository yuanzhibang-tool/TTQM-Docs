> 一些通用脚本示例,这些示例在`TTQM`任何脚本中都可以使用

### 1.同步使用异步方法 :id=1

!>一些时候,可能需要同步返回一些异步(返回`Promise`)返回的数据,本示例用来展示如何同步获取异步返回的数据

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');

// 整个方法体都需要使用`async () => {}`包裹
const main = async () => {
  const filePath = FileUtil.getScriptDataPath('test.txt');
  // 检测文件是否存在
  const exist = FileUtil.existSync(filePath);
  console.log(exist);
  // exist = false
  // 写入文件
  FileUtil.createStringFileSync(filePath, 'test content');
  // 添加await,来时先同步返回
  const fileHash = await FileUtil.getFileHash(filePath);
  console.log(fileHash);
  // 获取文件内容
  const fileContent = FileUtil.readStringFileSync(filePath);
  console.log(fileContent);
  // fileContent = 'test content'
};
// 调用main函数
main();
```

### 2.使用证书加解密,文件操作,字符串计算`hash`

!>请查看[有哪些内置的脚本依赖库?](en/question/build-in-module?id=_6)

---

### 3.定时重复执行某些操作

```javascript
// 第二个参数单位为毫秒,每1s执行特定操作
let times = 0;
const intervId = setInterval(() => {
  console.log('interval action');
  times++;
  if (times == 4) {
    // 清理定时器
    clearInterval(intervId);
  }
}, 1000);

// 'interval action'将会输出四次
```

---

### 4.延迟执行某些操作

```javascript
// 第二个参数单位为毫秒,4s后执行特定操作
const timeoutId = setTimeout(() => {
  console.log('timeout action');
}, 4000);
// 清理延迟执行,清理后,延迟将不会执行
clearTimeout(timeoutId);
```

---

!>其他更多示例,请参照[有哪些内置的脚本依赖库?](en/question/build-in-module)
