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
