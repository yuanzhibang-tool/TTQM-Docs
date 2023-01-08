!>內置的所有庫都可以在所有腳本中使用,包含前置腳本,圖表配置腳本,圖表腳本,用戶腳本

> TTQM 內置了一些庫,如網絡請求等,具體支持的庫在下放列出來,當然您也可以自己安裝拓展庫,具體請參照 [常見問題?>如何添加腳本依賴庫?](zh-tw/question/how-to-add-support-modules.md)

---

### 1.網絡請求庫`axios` :id=1

**用法示例,更多用法請參照[axios](https://www.npmjs.com/package/axios)**

```javascript
const axios = require("axios");

// a get request
axios
  .get("/user?ID=12345")
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
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

---

### 2.uuid 生成庫`uuid` :id=2

**用法示例,更多用法請參照[uuid](https://www.npmjs.com/package/uuid)**

```javascript
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

---

### 3.時間日期工具庫`Moment.js` :id=3

**用法示例,更多用法請參照[Moment.js](https://momentjs.com/docs/)**

```javascript
var moment = require("moment");
const format = "YYYY-MM-DD HH:mm:ss";
const dateString = moment().format(format); // ⇨ '2022-12-12 00:01:23'
```

---

### 4.模擬數據生成庫`Mock.js` :id=4

**用法示例,更多用法請參照[Mock.js](https://github.com/nuysoft/Mock/wiki)**

```javascript
var mockjs = require("mockjs");
// if you need to use other modules, you can install other modules via npm, please read the doc: https://doc.ttqm.app/#/en/question/how-to-add-support-modules

// generate mock data
var mockData = mockjs.mock({
  "list|3": [
    {
      "id|+1": 1,
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

### 5.加密庫`CryptoJs` :id=5

**用法示例,更多用法請參照[CryptoJs](https://cryptojs.gitbook.io/docs/)**

```javascript
var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(
  "my message",
  "secret key 123"
).toString();

// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
```

### 6.`ttqm-support` :id=6

> 該模塊提供一些 `TTQM` 常用的一些幫助類

<!-- tabs:start -->

<!-- tab:FileUtil -->

```javascript
/**
 *  文件hash類型
 */
export declare enum FileHashType {
    MD5 = "md5",
    SHA1 = "sha1",
    SHA256 = "sha256",
    SHA512 = "sha512"
}

// 操作文件的工具類
export declare class FileUtil {
    /**
     * 根據相對路徑獲取腳本數據的完整路徑
     * @param [relativePath] 需要拼接的相對路徑
     * @returns 完整的路徑
     */
    static getScriptDataPath(relativePath?: string): string;
    /**
     * 根據相對路徑獲取腳本臨時數據的完整路徑
     * @param [relativePath] 需要拼接的相對路徑
     * @returns 完整的路徑
     */
    static getScriptTmpDataPath(relativePath?: string): string;
    /**
     * 以同步方式創建目錄
     * @param path 創建目錄的路徑
     */
    static createDirSync(path: string): void;
    /**
     * 異步獲取文件的hash值
     * @param path 文件的路徑
     * @param [hashName] 可用的hash名稱參照FileHashType, eg. md5 sha1 sha256 sha512
     * @returns 返回一個Promise<string>
     */
    static getFileHash(path: string, hashName?: FileHashType): Promise<string>;
    /**
     * 同步檢測路徑是否存在
     * @param path 對應的路徑
     * @returns boolean true 如果存在, false 不存在
     */
    static existSync(path: string): boolean;
    /**
     * 同步檢測對應的路徑是否是目錄
     * @param path 對應的路徑
     * @returns  boolean 是文件夾返回true,否則返回false
     */
    static isDirSync(path: string): boolean;
    /**
     * 同步創建字符串文件
     * @param path 文件的路徑
     * @param content 文本內容
     */
    static createStringFileSync(path: string, content: string): void;
    /**
     * 同步向文件追加文本內容
     * @param path 文件路徑
     * @param content 追加的字符串內容
     */
    static appendStringFileSync(path: string, content: string): void;
    /**
     * 同步讀取文件內容
     * @param path 文件路徑
     * @returns 文本內容utf8編碼
     */
    static readStringFileSync(path: string): string;
    /**
     * 同步移除目錄或文件
     * @param path 對應的路徑
     */
    static removeSync(path: string): void;
}

```

<!-- tab:EncryptUtil -->

```javascript
export declare class EncryptUtil {
    /**
     * 獲取文本hash
     * @param content 文本內容
     * @param [hashName] 有效的hash名稱, 例如. sha1 md5 sha256 sha512.
     * @returns hash字符串
     */
    static getHash(content: string, hashName?: string): string;
}

```

<!-- tab:TopicUtil -->

```javascript
export declare class TopicUtil {
    /**
     * 檢測是否是子topic
     * @param topic 要檢測的topic
     * @param subTopic 要檢測的子topic
     * @returns boolean 是子主題的話返回true,否則返回false
     */
    static isSubTopic(topic: any, subTopic: any): boolean;
    /**
     * 解析 `key1/value1/key2/value2` 的字符串到 object {key1:value1,key2:value2}
     * @param topic 要解析的topic字符串
     * @returns 一個類似{key1:value1,key2:value2}的object
     */
    static parseKeyValueTopic(topic: any): object;
}

```

<!-- tab:CertUtil -->

```javascript
export declare class CertUtil {
    /**
     * 通過私鑰加密數據
     * @param privateKeyPem pem格式的私鑰
     * @param stringContent 要加密的內容
     * @param chunkSize  分片的大小,單位為字節,由於證書加密,單個內容是有限制的,所以需要分片加密,最大加密大小,請參考getEncryptMaxChunkSize相關方法
     * @returns 加密後的內容並轉化為base64
     */
    static privateKeyEncrypt(privateKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * 通過私鑰解密
     * @param privateKeyPem pem格式的私鑰
     * @param encyptedBase64Content 加密後的內容,為base64格式
     * @param chunkSize 解密分片大小,單位為字節,獲取方法請參考getEncryptContentSize相關方法
     * @returns 解密後的數據為utf8編碼
     */
    static privateKeyDecrypt(privateKeyPem: string, encyptedBase64Content: any, chunkSize: number): string;
    /**
     * 通過證書加密數據
     * @param privateKeyPem pem格式的證書
     * @param stringContent 要加密的內容
     * @param chunkSize  分片的大小,單位為字節,由於證書加密,單個內容是有限制的,所以需要分片加密,最大加密大小,請參考getEncryptMaxChunkSize相關方法
     * @returns 加密後的內容並轉化為base64
     */
    static certEncrypt(certPem: string, stringContent: any, chunkSize: number): string;
    /**
     * 通過證書解密
     * @param privateKeyPem pem格式的證書
     * @param encyptedBase64Content 加密後的內容,為base64格式
     * @param chunkSize 解密分片大小,單位為字節,獲取方法請參考getEncryptContentSize相關方法
     * @returns 解密後的數據為utf8編碼
     */
    static certDecrypt(certPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * 通過公鑰加密數據
     * @param privateKeyPem pem格式的公鑰
     * @param stringContent 要加密的內容
     * @param chunkSize  分片的大小,單位為字節,由於證書加密,單個內容是有限制的,所以需要分片加密,最大加密大小,請參考getEncryptMaxChunkSize相關方法
     * @returns 加密後的內容並轉化為base64
     */
    static publicKeyEncrypt(publicKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * 通過公鑰解密
     * @param privateKeyPem pem格式的公鑰
     * @param encyptedBase64Content 加密後的內容,為base64格式
     * @param chunkSize 解密分片大小,單位為字節,獲取方法請參考getEncryptContentSize相關方法
     * @returns 解密後的數據為utf8編碼
     */
    static publicKeyDecrypt(publicKeyPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * 獲取證書最大可加密的單片大小,單位為字節
     * @param certPem pem格式的證書
     * @returns 證書最大可加密的單片大小,單位為字節
     */
    static getCertEncryptMaxChunkSize(certPem: string): number;
    /**
     * 獲取證書加密後的內容大小,單位為字節,不管要加密的內容大小,同一證書加密後的內容長度都是一樣的
     * @param certPem pem格式的證書
     * @returns 證書最大可加密的單片大小,單位為字節
     */
    static getCertEncryptContentSize(certPem: string): number;
    /**
     * 獲取公鑰最大可加密的單片大小,單位為字節
     * @param certPem pem格式的公鑰
     * @returns 公鑰最大可加密的單片大小,單位為字節
     */
    static getPublicKeyEncryptMaxChunkSize(publicKeyPem: string): number;
    /**
     * 獲取公鑰加密後的內容大小,單位為字節,不管要加密的內容大小,同一公鑰加密後的內容長度都是一樣的
     * @param certPem pem格式的證書
     * @returns 證書最大可加密的單片大小,單位為字節
     */
    static getPublicKeyEncryptContentSize(publicKeyPem: string): number;
    /**
     * 獲取私鑰最大可加密的單片大小,單位為字節
     * @param certPem pem格式的私鑰
     * @returns 私鑰最大可加密的單片大小,單位為字節
     */
    static getPrivateKeyEncryptMaxChunkSize(privateKeyPem: string): number;
    /**
     * 獲取私鑰加密後的內容大小,單位為字節,不管要加密的內容大小,同一私鑰加密後的內容長度都是一樣的
     * @param certPem pem格式的私鑰
     * @returns 私鑰最大可加密的單片大小,單位為字節
     */
    static getPrivateKeyEncryptContentSize(privateKeyPem: string): number;
}

```

<!-- tabs:end -->

**示例**

<!-- tabs:start -->

<!-- tab:FileUtil -->

```javascript
const { FileUtil } = require("@ttqm/ttqm-support");
const filePath = FileUtil.getScriptDataPath("test.txt");
// 檢測文件是否存在
const exist = FileUtil.existSync(filePath);
console.log(exist);
// exist = false
// 寫入文件
FileUtil.createStringFileSync(filePath, "test content");
// 異步獲取文件hash
FileUtil.getFileHash(filePath)
  .then((hash) => {
    console.log(hash);
    // hash = '1eebdf4fdc9fc7bf283031b93f9aef3338de9052'
    // 停止腳本
    exit();
  })
  .catch((err) => {
    console.error(err);
  });
// 獲取文件內容
const fileContent = FileUtil.readStringFileSync(filePath);
console.log(fileContent);
// fileContent = 'test content'
```

!>同步獲取文件 hash,所有代碼都必須使用`async`函數包裹

```javascript
const { FileUtil } = require("@ttqm/ttqm-support");

const main = async () => {
  const filePath = FileUtil.getScriptDataPath("test.txt");
  // 檢測文件是否存在
  const exist = FileUtil.existSync(filePath);
  console.log(exist);
  // exist = false
  // 寫入文件
  FileUtil.createStringFileSync(filePath, "test content");
  // 異步獲取文件hash
  const fileHash = await FileUtil.getFileHash(filePath);
  console.log(fileHash);
  // 獲取文件內容
  const fileContent = FileUtil.readStringFileSync(filePath);
  console.log(fileContent);
  // fileContent = 'test content'
};
main();
```

<!-- tab:EncryptUtil -->

```javascript
const { EncryptUtil } = require("@ttqm/ttqm-support");
const stringContent = "1";
const stringHashSha1 = EncryptUtil.getHash(stringContent, "sha1");
console.log(stringHashSha1);
// stringHashSha1: 356a192b7913b04c54574d18c28d46e6395428ab
```

<!-- tab:TopicUtil -->

```javascript
const { TopicUtil } = require("@ttqm/ttqm-support");
// 檢測子topic
const subTopic = "device_type/1/device_id/123456";
const isSubTopic = TopicUtil.isSubTopic("device_type/+/device_id/+", subTopic);
console.log(isSubTopic);
// isSubTopic = true
const subTopic1 = "device_type/1/device_sn/123456";
const isSubTopic1 = TopicUtil.isSubTopic(
  "device_type/+/device_id/+",
  subTopic1
);
console.log(isSubTopic1);
// isSubTopic1 = false

// 解析topic
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
const { CertUtil } = require("@ttqm/ttqm-support");

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
// 證書加密數據
const stringContent = "1";
const encyptedContent = CertUtil.certEncrypt(certPem, stringContent, 100);
console.log(encyptedContent);
// encyptedContent= 'YaEtVr5Ct3inafRqWwW9Z9U2q4F0xnjNU7I83va9oixKsfy9DZThVGv2O9CZxOM0THfBbMVNwVnY0xTFZz0ZlzRotJVmlPZ5NZSnLGMxq/nnAt9ujcGUXBeChavjbn6QmAnRuvQs3jgjNPDhqPgVM430xluo2LLVA1xo22Krg4EasswNW6XQ5ZHW3+9apf1GwpQnvp8Mrk9UMwZ8rFfI55aMm6nWP/rPnrC3Q5xav6amMVFWFEUF7hBNEWgCdD22KPzmoSM2tLtrRlEejDOjX09hkvCrM3K+vHGOPrTmN+N05lUJ5jh1t0P4U3rm/1rYHC8OA95SHCem9/k9Rv9kaA=='

// 獲取證書最大可加密的chunk size
const maxChunkSize = CertUtil.getCertEncryptMaxChunkSize(certPem);
console.log(maxChunkSize);
// maxChunkSize=214

// 獲取證書加密後的內容字節數,也就是解密需要傳入的chunk size
const encryptedChunkSize = CertUtil.getCertEncryptContentSize(certPem);
console.log(encryptedChunkSize);
// encryptedChunkSize=512
```

<!-- tabs:end -->
