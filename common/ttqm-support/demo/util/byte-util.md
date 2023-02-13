```javascript
const { ByteUtil } = require('@ttqm/ttqm-support');

const testString = 'Hello, TTQM!';
const testStringByteArray = ByteUtil.stringToByteArray(testString);
console.log(testStringByteArray);
const resultString = ByteUtil.byteArrayToString(testStringByteArray);
console.log(resultString);
// stop script process manually
// 手动停止脚本运行
// 手動停止腳本運行
exit();
```
