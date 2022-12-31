!> All built-in modules can be used in all scripts, including `Pre-Publish Script`, `Chart Option Script`, `Chart Script`, `User Script`

> TTQM has some built-in modules, such as network requests, etc. The build-in modules are listed below. Of course, you can also install the third-party modules yourself. For details, please refer to [FAQ?> How to add script third-party modules?](en/question/how-to-add-support-modules.md)

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

> This module provides some util classes frequently in by `TTQM`

<!-- tabs:start -->

<!-- tab:FileUtil -->

```javascript
/**
 *  file hash type
 */
export declare enum FileHashType {
    MD5 = "md5",
    SHA1 = "sha1",
    SHA256 = "sha256",
    SHA512 = "sha512"
}
export declare class FileUtil {
    /**
     * Gets script data path with relative path
     * @param [subPath] the relative path
     * @returns the full absolute path
     */
    static getScriptDataPath(relativePath?: string): string;
    /**
     * Gets script tmp data path with relative path
     * @param [subPath] the relative path
     * @returns the full absolute path
     */
    static getScriptTmpDataPath(relativePath?: string): string;
    /**
     * Creates dir sync
     * @param path the path
     */
    static createDirSync(path: string): void;
    /**
     * Gets file hash asynchronously
     * @param path the file path
     * @param [hashName] a valid hash name, eg. md5 sha1 sha256 sha512
     * @returns a Promise which resolves to the file hash
     */
    static getFileHash(path: string, hashName?: FileHashType): Promise<string>;
    /**
     * Check if the path exists sync
     * @param path the path
     * @returns boolean true if the path exists, false otherwise
     */
    static existSync(path: string): boolean;
    /**
     * Check if the path is dir sync
     * @param path the path
     * @returns  boolean true if the path is dir, false otherwise
     */
    static isDirSync(path: string): boolean;
    /**
     * Creates string file sync
     * @param path the file path
     * @param content the string content
     */
    static createStringFileSync(path: string, content: string): void;
    /**
     * Append string to a file sync
     * @param path the file path
     * @param content the string content
     */
    static appendStringFileSync(path: string, content: string): void;
    /**
     * Reads string file sync
     * @param path the file path
     * @returns  the string of the file in utf8 format
     */
    static readStringFileSync(path: string): string;
    /**
     * Removes file or dir sync
     * @param path the path
     */
    static removeSync(path: string): void;
}
```

<!-- tab:EncryptUtil -->

```javascript
export declare class EncryptUtil {
    /**
     * Gets hash of string
     * @param content the string content
     * @param [hashName] a valid hash name, eg. sha1 md5 sha256.
     * @returns the hash in hex
     */
    static getHash(content: string, hashName?: string): string;
}
```

<!-- tab:TopicUtil -->

```javascript
export declare class TopicUtil {
    /**
     * Check if it is a subtopic of the provided topic
     * @param topic the topic
     * @param subTopic the subtopic to check
     * @returns boolean true if it is a subtopic
     */
    static isSubTopic(topic: any, subTopic: any): boolean;
    /**
     * parse topic which is `key1/value1/key2/value2` format to an object like {key1:value1,key2:value2}
     * @param topic the topic to parse
     * @returns an object containing the key and value
     */
    static parseKeyValueTopic(topic: any): object;
}


```

<!-- tab:CertUtil -->

```javascript
export declare class CertUtil {
    /**
     * encrypt via private key
     * @param privateKeyPem private key in pem format
     * @param stringContent data to be encrypted which in string format
     * @param chunkSize  the chunk size of the string content
     * @returns encrypted content in base64 format
     */
    static privateKeyEncrypt(privateKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * decrypt via private key
     * @param privateKeyPem private key in pem format
     * @param encyptedBase64Content encrypted content in base64 format
     * @param chunkSize the chunk size of the encypted content
     * @returns decrypted string in string utf8
     */
    static privateKeyDecrypt(privateKeyPem: string, encyptedBase64Content: any, chunkSize: number): string;
    /**
     * encrypt via cert
     * @param certPem cert in pem format
     * @param stringContent data to be encrypted which in string format
     * @param chunkSize  the chunk size of the string content
     * @returns encrypted content in base64 format
     */
    static certEncrypt(certPem: string, stringContent: any, chunkSize: number): string;
    /**
     * decrypt via cert
     * @param certPem cert in pem format
     * @param encyptedBase64Content encrypted content in base64 format
     * @param chunkSize the chunk size of the encypted content
     * @returns decrypted string in string utf8
     */
    static certDecrypt(certPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * encrypt via public key
     * @param publicKeyPem public key in pem format
     * @param stringContent data to be encrypted which in string format
     * @param chunkSize  the chunk size of the string content
     * @returns encrypted content in base64 format
     */
    static publicKeyEncrypt(publicKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * encrypt via public key
     * @param publicKeyPem public key in pem format
     * @param encyptedBase64Content encrypted content in base64 format
     * @param chunkSize  the chunk size of the string content
     * @returns decrypted string in string utf8
     */
    static publicKeyDecrypt(publicKeyPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * Get cert encrypt max chunk size
     * @param certPem cert in pem format
     * @returns cert encrypt max chunk size
     */
    static getCertEncryptMaxChunkSize(certPem: string): number;
    /**
     * Get cert encrypt content size
     * @param certPem cert in pem format
     * @returns cert encrypt content size
     */
    static getCertEncryptContentSize(certPem: string): number;
    /**
     * Get public key encrypt max chunk size
     * @param publicKeyPem public key in pem format
     * @returns public key encrypt max chunk size
     */
    static getPublicKeyEncryptMaxChunkSize(publicKeyPem: string): number;
    /**
     * Get public key encrypt content size
     * @param publicKeyPem public key in pem format
     * @returns public key encrypt content size
     */
    static getPublicKeyEncryptContentSize(publicKeyPem: string): number;
    /**
     * Get private key encrypt max chunk size
     * @param privateKeyPem private key in pem format
     * @returns private key encrypt max chunk size
     */
    static getPrivateKeyEncryptMaxChunkSize(privateKeyPem: string): number;
    /**
     * Get private key encrypt content size
     * @param privateKeyPem private key in pem format
     * @returns private key encrypt content size
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
// stringHashSha1 = 356a192b7913b04c54574d18c28d46e6395428ab
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

// get the maximum chunk size of the certificate encyryption
const maxChunkSize = CertUtil.getCertEncryptMaxChunkSize(certPem);
console.log(maxChunkSize);
// maxChunkSize=214

// Get the number of bytes of content encrypted by the certificate, which is the chunk size that needs to be passed in for decryption
const encryptedChunkSize = CertUtil.getCertEncryptContentSize(certPem);
console.log(encryptedChunkSize);
// encryptedChunkSize=512
```

<!-- tabs:end -->
