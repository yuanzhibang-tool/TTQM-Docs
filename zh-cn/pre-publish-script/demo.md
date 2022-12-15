### 1.生成 `uuid`和 `unix` 时间戳(精确到秒,并返回字符串)

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
// only the built-in variables and variables pipes are used!
module.exports = {};
```

<!-- tab:模板消息 -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

<!-- tab:输出 -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

<!-- tabs:end -->

### 2.将消息所有叶子节点转换为字符串

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
// only the built-in variables and variables pipes are used!
module.exports = {
  pipe: {
    // pipe is used to process the full message body
    // leafNodeToString is a built-in pipe, covert all leaf node to string, the value is not used,you can set the value with null;
    leafNodeToString: null,
  },
};
```

<!-- tab:模板消息 -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

---

<!-- tab:输出 -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": "1.0",
    "y": "3.0"
  }
}
```

<!-- tabs:end -->

---

### 3.获取当前格式化时间

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
// only the built-in variables and variables pipes are used!
module.exports = {};
```

<!-- tab:模板消息 -->

```json
{
  "current_time": "{{$|date:'yyyy-MM-DD HH:mm:ss'}}",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

---

<!-- tab:输出 -->

```json
{
  "current_time": "2022-12-14 15:36:13",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

<!-- tabs:end -->

---

### 4.对消息内容加签,来实现服务器消息安全验证

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
var crypto = require('crypto');
module.exports = {
  pipe: {
    addSignInfo: (publishMessage) => {
      try {
        var messageString = publishMessage.message;
        var messageObject = JSON.parse(messageString);
        var guid = messageObject.guid;
        var currentTime = messageObject.current_time;
        var secretKey = 'c479942357f195d9818';
        var signString = `{${guid}}.{${currentTime}}.{${secretKey}}`;
        var shasum = crypto.createHash('sha1');
        shasum.update(signString);
        var sign = shasum.digest('hex');
        messageObject.sign = sign;
        // you need return the message in string format
        return JSON.stringify(messageObject);
      } catch (error) {
        // if any error is thrown, return the original message of publishMessage
        return publishMessage.message;
      }
    },
  },
};
```

<!-- tab:模板消息 -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

---

<!-- tab:输出 -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": 1.0,
    "y": 3.0
  },
  "sign": "2357f1c-4799-495d-9818-a6b72816ffa3"
}
```

<!-- tabs:end -->

---

### 5.使用公钥证书加密消息体,并返回加密消息体

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
const crypto = require('crypto');

// encrypt with cert in pem format
const certEncrypt = (certPem, stringContent) => {
  const cert = new crypto.X509Certificate(certPem);
  const publicKey = cert.publicKey;
  // encrypt and covert to base64 encode
  const encryptedBase64 = crypto
    .publicEncrypt(publicKey, stringContent)
    .toString('base64');
  return encryptedBase64;
};

// decrypt with cert in pem format
const certDecrypt = (certPem, encyptedBase64Content) => {
  const cert = new crypto.X509Certificate(certPem);
  const publicKey = cert.publicKey;
  const encyptedContent = Buffer.from(encyptedBase64Content, 'base64');
  const decryptContent = crypto
    .publicDecrypt(publicKey, encyptedContent)
    .toString();
  return decryptContent;
};

// encrypt with public key in pem format
const publicKeyEncrypt = (publicKeyPem, stringContent) => {
  const publicKey = crypto.createPublicKey(publicKeyPem);
  // encrypt and covert to base64 encode
  const encryptedBase64 = crypto
    .publicEncrypt(publicKey, stringContent)
    .toString('base64');
  return encryptedBase64;
};

// decrypt with public key in pem format
const publicKeyDecrypt = (publicKeyPem, encyptedBase64Content) => {
  const publicKey = createPublicKey(publicKeyPem);
  const encyptedContent = Buffer.from(encyptedBase64Content, 'base64');
  const decryptContent = publicDecrypt(publicKey, encyptedContent).toString();
  return decryptContent;
};

// encrypt with private key in pem format
const privateKeyEncrypt = (privateKeyPem, stringContent) => {
  const privateKey = crypto.createPrivateKey(privateKeyPem);
  // encrypt and covert to base64 encode
  const encryptedBase64 = crypto
    .privateEncrypt(privateKey, stringContent)
    .toString('base64');
  return encryptedBase64;
};

// decrypt with private key in pem format
const privateKeyDecrypt = (privateKeyPem, encyptedBase64Content) => {
  const privateKey = crypto.createPrivateKey(privateKeyPem);
  const encyptedContent = Buffer.from(encyptedBase64Content, 'base64');
  const decryptContent = crypto
    .privateDecrypt(privateKey, encyptedContent)
    .toString();
  return decryptContent;
};

var certPem = `-----BEGIN CERTIFICATE-----
MIIDWzCCAkOgAwIBAgIURzmUxeH8mb5B7eWBKrxBi0k4ZCgwDQYJKoZIhvcNAQEL
BQAwPTELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMSEwHwYDVQQKDBhJbnRlcm5l
dCBXaWRnaXRzIFB0eSBMdGQwHhcNMjIxMjE1MDMzOTQ2WhcNMzIxMjEyMDMzOTQ2
WjA9MQswCQYDVQQGEwJVUzELMAkGA1UECAwCQ0ExITAfBgNVBAoMGEludGVybmV0
IFdpZGdpdHMgUHR5IEx0ZDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
ALcBud38LRL8lQDfvuz3cDM3jEQiG1NdPf0GEscolPSOyZQQe0h1KwcTePilD7gc
848r22Ug/BzkLNtNzSGQgARizk8KHctu9yejCRmjAArm+xwSdBQGqFm+NXN3zka0
rObzIxJbdW590bVfPfrOKR1fKrFqkwAYr6ktnVO3CSjsc5UIJphhlMnHLSHjt9b9
jKW2a2WgOGHFAXspSlsOiCXHyGGYXPVYHOe5Q+Z5P6SxxWHA6oeIH9oy+QnXRGV4
AiPqlzeCvTTypHlLmdZZmkz+93dNqroARY+3zsSIYe0CWnun30r9GAjdkek1vkr9
0voEmxjZSAqJgcEakuDVVDkCAwEAAaNTMFEwHQYDVR0OBBYEFGLs3WNbcTW1MsRd
0nR6hU9z2rECMB8GA1UdIwQYMBaAFGLs3WNbcTW1MsRd0nR6hU9z2rECMA8GA1Ud
EwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAEPW2cMqXTR3JDnvPenA+B4S
q/cGJfKr9eooK6t62CdgN3HhZYFH9+V8tF44hIyrOguxK2duwq7EWNIRqqlF3HAT
MqjCWZ/Z8wXtvcBNrDueZhhlWksQ1cITFJzJnw4ImycsxTyqVaq1UOodZDyygiQc
kxrjgqSi9uXAQUuKzqN6Mas2AHUPWEB+YRJz5aLBuGIX7hi5sfoQ4kbHMu6jRaug
4CErzSD1pdQTo7SKyoQXg9UdjdgxgBpWQFltFBG1shl1sr1nxIClZbtr7AXxYlK3
tXKYeZ4ucHFd7rlOjORpbliWa9A0sjvm7Klic2Pbd6jp2PqdR4EK6Tn5e8S7Sng=
-----END CERTIFICATE-----`;

module.exports = {
  pipe: {
    encryptMessageViaCert: (publishMessage) => {
      try {
        var messageString = publishMessage.message;
        // encrypt message string with the cert in pem format
        var encyptedContent = certEncrypt(certPem, messageString);
        // you need return the message in string format
        return encyptedContent;
      } catch (error) {
        // if any error is thrown, return the original message of publishMessage
        return publishMessage.message;
      }
    },
  },
};
```

<!-- tab:模板消息 -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

---

<!-- tab:输出 -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": 1.0,
    "y": 3.0
  },
  "sign": "2357f1c-4799-495d-9818-a6b72816ffa3"
}
```

<!-- tabs:end -->

---

### 6.根据 `topic` 对消息进行过滤处理

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
var crypto = require('crypto');
module.exports = {
  pipe: {
    addSignInfo: (publishMessage) => {
      try {
        var messageString = publishMessage.message;
        var messageObject = JSON.parse(messageString);
        var guid = messageObject.guid;
        var currentTime = messageObject.current_time;
        var secretKey = 'c479942357f195d9818';
        var signString = `{${guid}}.{${currentTime}}.{${secretKey}}`;
        var shasum = crypto.createHash('sha1');
        shasum.update(signString);
        var sign = shasum.digest('hex');
        messageObject.sign = sign;
        // you need return the message in string format
        return JSON.stringify(messageObject);
      } catch (error) {
        // if any error is thrown, return the original message of publishMessage
        return publishMessage.message;
      }
    },
  },
};
```

<!-- tab:模板消息 -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.0,
    "y": 3.0
  }
}
```

---

<!-- tab:输出 -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": 1.0,
    "y": 3.0
  },
  "sign": "2357f1c-4799-495d-9818-a6b72816ffa3"
}
```

<!-- tabs:end -->

---

### 7.自定义拓展`variable`和`pipe`

<!-- tabs:start -->

<!-- tab:前置脚本 -->

```javascript
// the module uuid is built-in, please read uuid docs: https://www.npmjs.com/package/uuid
var { v4: uuidv4 } = require('uuid');
// the module mockjs is built-in, please read mockjs docs: http://mockjs.com/examples.html
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
module.exports = {
  variable: {
    // the variable can be a function(must return a value sync and can not be a Promise) or a value
    user_variable1() {
      return '432';
    },
    user_variable2: 107,
    user_variable3: uuidv4(),
    user_variable4: mockData.list,
  },
  variable_pipe: {
    // variable pipe is used to process the template variable
    user_variable_pipe1(publishMessage, value, multiple) {
      // publishMessage has all the info you publish to the server, like topic, message, opts: {qos:2}
      // you can't change publishMessage
      // value is the value of the template variable
      return value * multiple;
    },
  },
  pipe: {
    // pipe is used to process the full message body
    // leafNodeToString is a built-in pipe, covert all leaf node to string, the value is not used, you can set the value with null;
    leafNodeToString: null,
    addUserStringToRootNode: (publishMessage) => {
      try {
        var messageString = publishMessage.message;
        var messageObject = JSON.parse(messageString);
        messageObject.test_user_string = 'test_user_string_value';
        // you need return the message in string format
        return JSON.stringify(messageObject);
      } catch (error) {
        // if any error is thrown, return the original message of publishMessage
        return publishMessage.message;
      }
    },
  },
};
```

---

<!-- tab:模板消息 -->

```json
{
  "user_variable1": "{{$user_variable1}}",
  "user_variable2": "{{$user_variable2|user_variable_pipe1:'3'}}",
  "user_variable3": "{{$user_variable3}}",
  "user_variable4": "{{$user_variable4}}"
}
```

<!-- tab:输出 -->

```json
{
  "user_variable1": "432",
  "user_variable2": "321",
  "user_variable3": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "user_variable4": [
    {
      "id": "1"
    },
    {
      "id": "2"
    },
    {
      "id": "3"
    }
  ],
  "test_user_string": "test_user_string_value"
}
```

<!-- tabs:end -->
