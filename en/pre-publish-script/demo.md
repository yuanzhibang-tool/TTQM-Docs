!>If you want to use more third-party libraries in the pre-script, please refer to [How to add script dependencies?](en/question/how-to-add-support-modules.md)

### 1. Generate `uuid` and `unix` timestamps (accurate to seconds, and return a string) :id=1

<!-- tabs: start -->
<!-- tab: template message -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tab: pre-script -->

```javascript
// only the built-in variables and variable pipes are used!
module.exports = {};
```

<!-- tab: output -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tabs: end -->

### 2. Convert all leaf nodes of the message to strings :id=2

<!-- tabs: start -->
<!-- tab: template message -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tab: pre-script -->

```javascript
// only the built-in variables and variable pipes are used!
module.exports = {
  pipe: {
    // pipe is used to process the full message body
    // leafNodeToString is a built-in pipe, covert all leaf nodes to string, the value is not used, you can set the value with null;
    leafNodeToString: null,
  },
};
```

---

<!-- tab: output -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": "1.1",
    "y": "3.1"
  }
}
```

<!-- tabs: end -->

---

### 3. Get the current formatted time :id=3

<!-- tabs: start -->

<!-- tab: template message -->

```json
{
  "current_time": "{{$|date:'yyyy-MM-DD HH:mm:ss'}}",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tab: pre-script -->

```javascript
// only the built-in variables and variable pipes are used!
module.exports = {};
```

---

<!-- tab: output -->

```json
{
  "current_time": "2022-12-14 15:36:13",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tabs: end -->

---

### 4. Sign the content of the message to achieve server message security verification :id=4

<!-- tabs: start -->

<!-- tab: template message -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tab: pre-script -->

```javascript
const { EncryptUtil } = require('@ttqm/ttqm-support');

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
        var sign = EncryptUtil.getHash(signString, 'sha1');
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

<!-- tab: output -->

```json
{
  "guid": "edb36c29-05e0-41ae-94c0-27b4076305ec",
  "current_time": "1671178225",
  "data": {
    "x": 1.1,
    "y": 3.1
  },
  "sign": "922011f4b3491cf1ee474ec02ff4a894b8654ce9"
}
```

<!-- tabs: end -->

---

### 5. Use the certificate, public key, and private key to encrypt and decrypt the message body :id=5

<!-- tabs: start -->
<!-- tab: template message -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tab: pre-script -->

```javascript
const { CertUtil } = require('@ttqm/ttqm-support');

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
        var encyptedContent = CertUtil.certEncrypt(certPem, messageString, 100);
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

<!-- tab:Console -->

```plain text
AYd66a3voCz6OhmbcAD9wdbEoexeQ34bxhX1AaOtJM9wxMRs4xkM/VXAHzM/awuQ115EQShVWB+eVrhs8VxfRBEldYJ384B7Vt5fLMjSH3cTwduhJZINzK2XFP57ASGaYU9GwHnYnzS/jC5bMQEDwjB94TuSITTS7JaBN5tuMgjitqkIXlji7KyqFhBnuWEjbnWeub0uLp1rev+yowe+YtmzNoZFzBy8x4t9zLBDDgBpQRiJLEVa01W2dStImilAqgfbFInhkAbBwVS8Cv4z7evA25xruflZcjFHPgM3ocdudDF51xQEPysl05QymQ40poOI9sLuoYDFDe9ZmprrhQ==
```

<!-- tabs:end -->

---

### 6. Filter messages according to `topic` :id=6

<!-- tabs: start -->

<!-- tab: template message -->

```json
{
  "guid": "{{$uuid}}",
  "current_time": "{{$unixSecond|string}}",
  "data": {
    "x": 1.1,
    "y": 3.1
  }
}
```

<!-- tab: pre-script -->

```javascript
// require the build-in support module
const { TopicUtil } = require('@ttqm/ttqm-support');

module.exports = {
  pipe: {
    messageTopicFilter: (publishMessage) => {
      try {
        // process the publishMessage if the publishMessage.topic is sub-topic of 'device_type/+/device_sn/+'
        if (
          TopicUtil.isSubTopic(
            'device_type/+/device_sn/+',
            publishMessage.topic
          )
        ) {
          const messageObject = JSON.parse(messageString);
          // do something !!!
          return JSON.stringify(messageObject);
        } else {
          const messageString = publishMessage.message;
          return messageString;
        }
      } catch (error) {
        // if any error is thrown, return the original message of publishMessage
        return publishMessage.message;
      }
    },
  },
};
```

<!-- tab: output -->

```json
{
  "guid": "b2357f1c-4799-495d-9818-a6b72816ffa3",
  "current_time": "1671014349",
  "data": {
    "x": 1.1,
    "y": 3.1
  },
  "sign": "2357f1c-4799-495d-9818-a6b72816ffa3"
}
```

<!-- tabs: end -->

---

### 7. Custom extension `variable` and `pipe` :id=7

<!-- tabs: start -->

<!-- tab: template message -->

```json
{
  "user_variable1": "{{$user_variable1}}",
  "user_variable2": "{{$user_variable2|user_variable_pipe1:'3'}}",
  "user_variable3": "{{$user_variable3}}",
  "user_variable4": "{{$user_variable4}}"
}
```

<!-- tab: pre-script -->

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
    // leafNodeToString is a built-in pipe, covert all leaf nodes to string, the value is not used, you can set the value with null;
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

<!-- tab: output -->

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

<!-- tabs: end -->

---

!>For more built-in `pipe` and `variable`, please refer to [built-in pipe, variable](en/pre-publish-script/built_in)

---

!>For more script examples, please refer to [Common Script Example](en/other/common-script-demo.md)
