!>TTQM 内置了一些库,如网络请求等,具体支持的库在下放列出来,当然您也可以自己安装拓展库,具体请参照 [常见问题?>如何添加脚本依赖库?](zh-cn/question/how-to-add-support-modules.md)

---

### 1.网络请求库`axios` :id=1

**用法示例,更多用法请参照[axios](https://www.npmjs.com/package/axios)**

```javascript
const axios = require('axios');

// a get request
axios
  .get('/user?ID=12345')
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });

// a post request

axios
  .post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

---

### 2.uuid 生成库`uuid` :id=2

**用法示例,更多用法请参照[uuid](https://www.npmjs.com/package/uuid)**

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

### 3.时间日期工具库`Moment.js` :id=3

**用法示例,更多用法请参照[Moment.js](https://momentjs.com/docs/)**

```javascript
var moment = require('moment');
const format = 'YYYY-MM-DD HH:mm:ss';
const dateString = moment().format(format); // ⇨ '2022-12-12 00:01:23'
```

---

### 4.模拟数据生成库`Mock.js` :id=4

**用法示例,更多用法请参照[Mock.js](https://github.com/nuysoft/Mock/wiki)**

```javascript
var mockjs = require('mockjs');
// if you need to use other modules, you can install other modules via npm, please read the doc: https://doc.ttqm.app/#/en/question/how-to-add-support-modules

// generate mock data
var mockData = mockjs.mock({
  'list|3': [
    {
      'id|+1': 1,
    },
  ],
});

// {
//   "list":[
//     {
//       "id": "1"
//     },
//     {
//       "id": "2"
//     },
//     {
//       "id": "3"
//     }
//   ]
// }
```

---

### 5.加密库`CryptoJs` :id=5

**用法示例,更多用法请参照[CryptoJs](https://cryptojs.gitbook.io/docs/)**

```javascript
var CryptoJS = require('crypto-js');

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(
  'my message',
  'secret key 123'
).toString();

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
```

### 6.`CryptoJs` :id=5

**用法示例,更多用法请参照[CryptoJs](https://cryptojs.gitbook.io/docs/)**

```javascript
var CryptoJS = require('crypto-js');

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(
  'my message',
  'secret key 123'
).toString();

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
```
