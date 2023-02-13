```javascript
const { EncryptUtil } = require('@ttqm/ttqm-support');
const stringContent = '1';
const stringHashSha1 = EncryptUtil.getHash(stringContent, 'sha1');
console.log(stringHashSha1);
// stringHashSha1 = 356a192b7913b04c54574d18c28d46e6395428ab
```
