!> All built-in modules can be used in all scripts, including `Pre-Publish Script`, `Chart Option Script`, `Chart Script`, `User Script`

> TTQM has some built-in modules, such as network requests, etc. The built-in modules are listed below. Of course, you can also install the third-party modules yourself. For details, please refer to [FAQ?> How to add script third-party modules?](en/question/how-to-add-support-modules.md)

---

### 1. Network request library `axios` :id=1

> Usage demo, for more usage, please refer to [axios](https://www.npmjs.com/package/axios)

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

### 2. uuid generation library `uuid` :id=2

> Usage demo, for more usage, please refer to [uuid](https://www.npmjs.com/package/uuid)

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

### 3. Time and date tool library `Moment.js` :id=3

> Usage demo, please refer to [Moment.js](https://momentjs.com/docs/) for more usage

```javascript
var moment = require('moment');
const format = 'YYYY-MM-DD HH:mm:ss';
const dateString = moment().format(format); // ⇨ '2022-12-12 00:01:23'
```

---

### 4. Mock data library `Mock.js` :id=4

> Usage demo, for more usage, please refer to [Mock.js](https://github.com/nuysoft/Mock/wiki)

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
// 	"list": [{
// 			"id": "1"
// 		},
// 		{
// 			"id": "2"
// 		},
// 		{
// 			"id": "3"
// 		}
// 	]
// }
```

---

### 5. Encryption library `CryptoJs` :id=5

**Usage demo, please refer to [CryptoJs](https://cryptojs.gitbook.io/docs/) for more usage**

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

### 6. `ttqm-support` :id=6

> The module provides some frequently used classes.

<!-- tabs:start -->

<!-- tab:CommonHelper -->

[CommonHelper](../../common/ttqm-support/api/helper/common.md ':include')

<!-- tab:ChartHelper -->

[ChartHelper](../../common/ttqm-support/api/helper/chart.md ':include')

<!-- tab:UserScriptHelper -->

[UserScriptHelper](../../common/ttqm-support/api/helper/user-script.md ':include')

<!-- tab:ByteUtil -->

[ByteUtil](../../common/ttqm-support/api/util/byte-util.md ':include')

<!-- tab:CertUtil -->

[CertUtil](../../common/ttqm-support/api/util/cert-util.md ':include')

<!-- tab:EncryptUtil -->

[EncryptUtil](../../common/ttqm-support/api/util/encrypt-util.md ':include')

<!-- tab:FileUtil -->

[FileUtil](../../common/ttqm-support/api/util/file-util.md ':include')

<!-- tab:TimeUtil -->

[TimeUtil](../../common/ttqm-support/api/util/time-util.md ':include')

<!-- tab:TopicUtil -->

[TopicUtil](../../common/ttqm-support/api/util/topic-util.md ':include')

<!-- tab:TcpClient -->

[TcpClient](../../common/ttqm-support/api/net/tcp-client.md ':include')

<!-- tab:TcpServer -->

[TcpServer](../../common/ttqm-support/api/net/tcp-server.md ':include')

<!-- tab:WsClient -->

[WsClient](../../common/ttqm-support/api/net/ws-client.md ':include')

<!-- tab:WsServer -->

[WsServer](../../common/ttqm-support/api/net/ws-server.md ':include')

<!-- tabs:end -->

**Demo**

<!-- tabs:start -->

<!-- tab:CommonHelper -->

[CommonHelper](../../common/ttqm-support/demo/helper/common.md ':include')

<!-- tab:ChartHelper -->

[ChartHelper](../../common/ttqm-support/demo/helper/chart.md ':include')

<!-- tab:UserScriptHelper -->

[UserScriptHelper](../../common/ttqm-support/demo/helper/user-script.md ':include')

<!-- tab:ByteUtil -->

[ByteUtil](../../common/ttqm-support/demo/util/byte-util.md ':include')

<!-- tab:CertUtil -->

[CertUtil](../../common/ttqm-support/demo/util/cert-util.md ':include')

<!-- tab:EncryptUtil -->

[EncryptUtil](../../common/ttqm-support/demo/util/encrypt-util.md ':include')

<!-- tab:FileUtil -->

[FileUtil](../../common/ttqm-support/demo/util/file-util.md ':include')

<!-- tab:TimeUtil -->

[TimeUtil](../../common/ttqm-support/demo/util/time-util.md ':include')

<!-- tab:TopicUtil -->

[TopicUtil](../../common/ttqm-support/demo/util/topic-util.md ':include')

<!-- tab:TcpClient -->

[TcpClient](../../common/ttqm-support/demo/net/tcp-client.md ':include')

<!-- tab:TcpServer -->

[TcpServer](../../common/ttqm-support/demo/net/tcp-server.md ':include')

<!-- tab:WsClient -->

[WsClient](../../common/ttqm-support/demo/net/ws-client.md ':include')

<!-- tab:WsServer -->

[WsServer](../../common/ttqm-support/demo/net/ws-server.md ':include')

<!-- tabs:end -->
