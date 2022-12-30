> Some generic script examples that can be used in any `TTQM` script

### 1. Use asynchronous method synchronously :id=1

!>Sometimes, it may be necessary to synchronously return some asynchronous (return `Promise`) returned data, this example is used to show how to synchronously obtain asynchronously returned data

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');

// The entire method body needs to be wrapped with `async () => {}`
const main = async () => {
  const filePath = FileUtil.getScriptDataPath('test.txt');
  // Check if the file exists
  const exist = FileUtil.existSync(filePath);
  console.log(exist);
  // exists = false
  // write to file
  FileUtil.createStringFileSync(filePath, 'test content');
  // Add await, return synchronously when coming
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

### 2. Use certificate encryption and decryption, file operation, string calculation `hash`

!> Please check [What are the built-in script dependencies?](en/question/build-in-module?id=_6)

---

### 3. Repeat certain operations regularly

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

### 4. Delay execution of certain operations

```javascript
// The second parameter unit is milliseconds, perform specific operations after 4s
const timeoutId = setTimeout(() => {
  console.log('timeout action');
}, 4000);
// Clean up delay execution, after cleanup, delay will not be executed
clearTimeout(timeoutId);
```

---

!> For more examples, please refer to [What are the built-in script dependencies?] (en/question/build-in-module)
