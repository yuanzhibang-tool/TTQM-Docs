> Some common script demos that can be used in any `TTQM` script

### 1. Use asynchronous method synchronously :id=1

!>Sometimes, it may be necessary to synchronously return some asynchronous (return `Promise`) returned data, this demo is used to show how to synchronously get asynchronously returned data

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');

// The all code needs to be wrapped with `async () => {}`
const main = async () => {
  const filePath = FileUtil.getScriptDataPath('test.txt');
  // Check if the file exists
  const exist = FileUtil.existSync(filePath);
  console.log(exist);
  // exists = false
  // write to file
  FileUtil.createStringFileSync(filePath, 'test content');
  // add await, return synchronously
  const fileHash = await FileUtil.getFileHash(filePath);
  console.log(fileHash);
  // get file content
  const fileContent = FileUtil.readStringFileSync(filePath);
  console.log(fileContent);
  // fileContent = 'test content'
};
// call the main function
main();
```

### 2. Use certificate encryption and decryption, file operation,getting string `hash` :id=2

!> Please see [FAQ?>Built-in Modules?](en/question/built-in-module?id=_6)

---

### 3. Repeat regularly :id=3

```javascript
// The unit of the second parameter is milliseconds, and a specific operation is performed every 1s
let times = 0;
const intervId = setInterval(() => {
  console.log('interval action');
  times++;
  if (times == 4) {
    // clear timer
    clearInterval(intervId);
  }
}, 1000);

// 'interval action' will output four times
```

---

### 4. Delay :id=4

```javascript
// The second parameter unit is milliseconds, perform after 4s
const timeoutId = setTimeout(() => {
  console.log('timeout action');
}, 4000);
// Clean up delay, after cleanup, delay function will not be executed
clearTimeout(timeoutId);
```

---

!> For more built-in module usage demos, please refer to [FAQ?>Built-in Modules?](en/question/built-in-module)
