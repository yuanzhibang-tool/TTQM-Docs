!> All built-in libraries can be used in all scripts, including pre-scripts, chart configuration scripts, chart scripts, user scripts

> TTQM has some built-in libraries, such as network requests, etc. The specific supported libraries are listed below. Of course, you can also install the extended library yourself. For details, please refer to [FAQ?> How to add script-dependent libraries?](en/question/ how-to-add-support-modules.md)

---

### 1. Network request library `axios` :id=1

**Usage example, for more usage, please refer to [axios](https://www.npmjs.com/package/axios)**

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

**Usage example, for more usage, please refer to [uuid](https://www.npmjs.com/package/uuid)**

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

### 3. Time and date tool library `Moment.js` :id=3

**Usage example, please refer to [Moment.js](https://momentjs.com/docs/) for more usage**

```javascript
var moment = require('moment');
const format = 'YYYY-MM-DD HH:mm:ss';
const dateString = moment().format(format); // ⇨ '2022-12-12 00:01:23'
```

---

### 4. Simulation data generation library `Mock.js` :id=4

**Usage example, for more usage, please refer to [Mock.js](https://github.com/nuysoft/Mock/wiki)**

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
// "list":[
// {
// "id": "1"
// },
// {
// "id": "2"
// },
// {
// "id": "3"
// }
// ]
// }
```

---

### 5. Encryption library `CryptoJs` :id=5

**Usage example, please refer to [CryptoJs](https://cryptojs.gitbook.io/docs/) for more usage**

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

> This module provides some helper classes commonly used by `TTQM`

<!-- tabs:start -->

<!-- tab:FileUtil -->

```javascript
/**
 *  文件hash类型
 */
export declare enum FileHashType {
    MD5 = "md5",
    SHA1 = "sha1",
    SHA256 = "sha256",
    SHA512 = "sha512"
}

// 操作文件的工具类
export declare class FileUtil {
    /**
     * 根据相对路径获取脚本数据的完整路径
     * @param [relativePath] 需要拼接的相对路径
     * @returns 完整的路径
     */
    static getScriptDataPath(relativePath?: string): string;
    /**
     * 根据相对路径获取脚本临时数据的完整路径
     * @param [relativePath] 需要拼接的相对路径
     * @returns 完整的路径
     */
    static getScriptTmpDataPath(relativePath?: string): string;
    /**
     * 以同步方式创建目录
     * @param path 创建目录的路径
     */
    static createDirSync(path: string): void;
    /**
     * 异步获取文件的hash值
     * @param path 文件的路径
     * @param [hashName] 可用的hash名称参照FileHashType, eg. md5 sha1 sha256 sha512
     * @returns 返回一个Promise<string>
     */
    static getFileHash(path: string, hashName?: FileHashType): Promise<string>;
    /**
     * 同步检测路径是否存在
     * @param path 对应的路径
     * @returns boolean true 如果存在, false 不存在
     */
    static existSync(path: string): boolean;
    /**
     * 同步检测对应的路径是否是目录
     * @param path 对应的路径
     * @returns  boolean 是文件夹返回true,否则返回false
     */
    static isDirSync(path: string): boolean;
    /**
     * 同步创建字符串文件
     * @param path 文件的路径
     * @param content 文本内容
     */
    static createStringFileSync(path: string, content: string): void;
    /**
     * 同步向文件追加文本内容
     * @param path 文件路径
     * @param content 追加的字符串内容
     */
    static appendStringFileSync(path: string, content: string): void;
    /**
     * 同步读取文件内容
     * @param path 文件路径
     * @returns 文本内容utf8编码
     */
    static readStringFileSync(path: string): string;
    /**
     * 同步移除目录或文件
     * @param path 对应的路径
     */
    static removeSync(path: string): void;
}

```

<!-- tab:EncryptUtil -->

```javascript
export declare class EncryptUtil {
    /**
     * 获取文本hash
     * @param content 文本内容
     * @param [hashName] 有效的hash名称, 例如. sha1 md5 sha256 sha512.
     * @returns hash字符串
     */
    static getHash(content: string, hashName?: string): string;
}

```

<!-- tab:TopicUtil -->

```javascript
export declare class TopicUtil {
    /**
     * 检测是否是子topic
     * @param topic 要检测的topic
     * @param subTopic 要检测的子topic
     * @returns boolean 是子主题的话返回true,否则返回false
     */
    static isSubTopic(topic: any, subTopic: any): boolean;
    /**
     * 解析 `key1/value1/key2/value2` 的字符串到 object {key1:value1,key2:value2}
     * @param topic 要解析的topic字符串
     * @returns 一个类似{key1:value1,key2:value2}的object
     */
    static parseKeyValueTopic(topic: any): object;
}

```

<!-- tab:CertUtil -->

```javascript
export declare class CertUtil {
    /**
     * 通过私钥加密数据
     * @param privateKeyPem pem格式的私钥
     * @param stringContent 要加密的内容
     * @param chunkSize  分片的大小,单位为字节,由于证书加密,单个内容是有限制的,所以需要分片加密,最大加密大小,请参考getEncryptMaxChunkSize相关方法
     * @returns 加密后的内容并转化为base64
     */
    static privateKeyEncrypt(privateKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * 通过私钥解密
     * @param privateKeyPem pem格式的私钥
     * @param encyptedBase64Content 加密后的内容,为base64格式
     * @param chunkSize 解密分片大小,单位为字节,获取方法请参考getEncryptContentSize相关方法
     * @returns 解密后的数据为utf8编码
     */
    static privateKeyDecrypt(privateKeyPem: string, encyptedBase64Content: any, chunkSize: number): string;
    /**
     * 通过证书加密数据
     * @param privateKeyPem pem格式的证书
     * @param stringContent 要加密的内容
     * @param chunkSize  分片的大小,单位为字节,由于证书加密,单个内容是有限制的,所以需要分片加密,最大加密大小,请参考getEncryptMaxChunkSize相关方法
     * @returns 加密后的内容并转化为base64
     */
    static certEncrypt(certPem: string, stringContent: any, chunkSize: number): string;
    /**
     * 通过证书解密
     * @param privateKeyPem pem格式的证书
     * @param encyptedBase64Content 加密后的内容,为base64格式
     * @param chunkSize 解密分片大小,单位为字节,获取方法请参考getEncryptContentSize相关方法
     * @returns 解密后的数据为utf8编码
     */
    static certDecrypt(certPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * 通过公钥加密数据
     * @param privateKeyPem pem格式的公钥
     * @param stringContent 要加密的内容
     * @param chunkSize  分片的大小,单位为字节,由于证书加密,单个内容是有限制的,所以需要分片加密,最大加密大小,请参考getEncryptMaxChunkSize相关方法
     * @returns 加密后的内容并转化为base64
     */
    static publicKeyEncrypt(publicKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * 通过公钥解密
     * @param privateKeyPem pem格式的公钥
     * @param encyptedBase64Content 加密后的内容,为base64格式
     * @param chunkSize 解密分片大小,单位为字节,获取方法请参考getEncryptContentSize相关方法
     * @returns 解密后的数据为utf8编码
     */
    static publicKeyDecrypt(publicKeyPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * 获取证书最大可加密的单片大小,单位为字节
     * @param certPem pem格式的证书
     * @returns 证书最大可加密的单片大小,单位为字节
     */
    static getCertEncryptMaxChunkSize(certPem: string): number;
    /**
     * 获取证书加密后的内容大小,单位为字节,不管要加密的内容大小,同一证书加密后的内容长度都是一样的
     * @param certPem pem格式的证书
     * @returns 证书最大可加密的单片大小,单位为字节
     */
    static getCertEncryptContentSize(certPem: string): number;
    /**
     * 获取公钥最大可加密的单片大小,单位为字节
     * @param certPem pem格式的公钥
     * @returns 公钥最大可加密的单片大小,单位为字节
     */
    static getPublicKeyEncryptMaxChunkSize(publicKeyPem: string): number;
    /**
     * 获取公钥加密后的内容大小,单位为字节,不管要加密的内容大小,同一公钥加密后的内容长度都是一样的
     * @param certPem pem格式的证书
     * @returns 证书最大可加密的单片大小,单位为字节
     */
    static getPublicKeyEncryptContentSize(publicKeyPem: string): number;
    /**
     * 获取私钥最大可加密的单片大小,单位为字节
     * @param certPem pem格式的私钥
     * @returns 私钥最大可加密的单片大小,单位为字节
     */
    static getPrivateKeyEncryptMaxChunkSize(privateKeyPem: string): number;
    /**
     * 获取私钥加密后的内容大小,单位为字节,不管要加密的内容大小,同一私钥加密后的内容长度都是一样的
     * @param certPem pem格式的私钥
     * @returns 私钥最大可加密的单片大小,单位为字节
     */
    static getPrivateKeyEncryptContentSize(privateKeyPem: string): number;
}

```

<!-- tabs:end -->

**Demo**

<!-- tabs:start -->

<!-- tab:FileUtil -->

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const filePath = FileUtil.getScriptDataPath('test.txt');
// Check if the file exists
const exist = FileUtil.existSync(filePath);
console.log(exist);
// exists = false
// write to file
FileUtil.createStringFileSync(filePath, 'test content');
// get file hash asynchronously
FileUtil.getFileHash(filePath)
  .then((hash) => {
    console.log(hash);
    // hash = '1eebdf4fdc9fc7bf283031b93f9aef3338de9052'
    // stop script
    exit();
  })
  .catch((err) => {
    console.error(err);
  });
// get file content
const fileContent = FileUtil.readStringFileSync(filePath);
console.log(fileContent);
// fileContent = 'test content'
```

!>Get file hash synchronously, all codes must be wrapped with `async` function

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');

const main = async () => {
  const filePath = FileUtil.getScriptDataPath('test.txt');
  // Check if the file exists
  const exist = FileUtil.existSync(filePath);
  console.log(exist);
  // exists = false
  // write to file
  FileUtil.createStringFileSync(filePath, 'test content');
  // get file hash asynchronously
  const fileHash = await FileUtil.getFileHash(filePath);
  console.log(fileHash);
  // get file content
  const fileContent = FileUtil.readStringFileSync(filePath);
  console.log(fileContent);
  // fileContent = 'test content'
};
main();
```

<!-- tab:EncryptUtil -->

```javascript
const { EncryptUtil } = require('@ttqm/ttqm-support');
const stringContent = '1';
const stringHashSha1 = EncryptUtil.getHash(stringContent, 'sha1');
console.log(stringHashSha1);
// stringHashSha1: 356a192b7913b04c54574d18c28d46e6395428ab
```

<!-- tab:TopicUtil -->

```javascript
const { TopicUtil } = require('@ttqm/ttqm-support');
// detect subtopic
const subTopic = 'device_type/1/device_id/123456';
const isSubTopic = TopicUtil.isSubTopic('device_type/+/device_id/+', subTopic);
console.log(isSubTopic);
// isSubTopic = true
const subTopic1 = 'device_type/1/device_sn/123456';
const isSubTopic1 = TopicUtil.isSubTopic(
  'device_type/+/device_id/+',
  subTopic1
);
console.log(isSubTopic1);
// isSubTopic1 = false

// parse topic
const subTopicInfo = TopicUtil.parseKeyValueTopic(subTopic);
// subTopicInfo = {
//   device_type: 1,
//   device_id: 123456,
// };

console.log(subTopicInfo);

const deviceType = subTopicInfo.device_type;
const deviceId = subTopicInfo.device_id;
console.log(deviceType);
console.log(deviceId);
// deviceType=1
// deviceId=123456
```

<!-- tab:CertUtil -->

```javascript
const { CertUtil } = require('@ttqm/ttqm-support');

const certPem = `-----BEGIN CERTIFICATE-----
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
// certificate encrypted data
const stringContent = '1';
const encyptedContent = CertUtil.certEncrypt(certPem, stringContent, 100);
console.log(encyptedContent);
// encyptedContent= 'YaEtVr5Ct3inafRqWwW9Z9U2q4F0xnjNU7I83va9oixKsfy9DZThVGv2O9CZxOM0THfBbMVNwVnY0xTFZz0ZlzRotJVmlPZ5NZSnLGMxq/nnAt9ujcGUXBeChavjbn6QmAnRuvQs3jgjNPDhqPgVM430xluo2LLVA1xo22Krg4EasswNW6XQ5ZHW3+9apf1GwpQnvp8Mrk9UMwZ8rFfI55aMm6nWP/rPnrC3Q5xav6amMVFWFEUF7hBNEWgCdD22KPzmoSM2tLtrRlEejDOjX09hkvCrM3K+vHGOPrTmN+N05lUJ5jh1t0P4U3rm/1rYHC8OA95SHCem9/k9Rv9kaA=='

// get the maximum encrypted chunk size of the certificate
const maxChunkSize = CertUtil.getCertEncryptMaxChunkSize(certPem);
console.log(maxChunkSize);
// maxChunkSize=214

// Get the number of bytes of content encrypted by the certificate, which is the chunk size that needs to be passed in for decryption
const encryptedChunkSize = CertUtil.getCertEncryptContentSize(certPem);
console.log(encryptedChunkSize);
// encryptedChunkSize=512
```

<!-- tabs:end -->
