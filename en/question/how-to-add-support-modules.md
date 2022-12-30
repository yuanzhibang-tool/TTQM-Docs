!>Before you install third-party dependencies, please make sure that your computer has installed the `node environment`. If not, please install it according to the document [How to install the specified version of node?](en/question/how-to- install-node-version-specified.md)

---

### 1. Switch to the installation module path in the command line :id=1

> Copy the `cd command` in `Applications > Settings`

![Copy command](_media/how-to-add-support-modules/1.jpg ':size=500')

---

### 2. Install the library you need to use, for example, you need to use `lodash` :id=2

```bash
# Paste the command copied in the first step
cd /Third party support module path

# Install the lodash library
npm install lodash

# ! If the installation in mainland China is slow, please specify the source
npm install lodash --registry=https://registry.npmmirror.com
```

### 3. It can be used in the script :id=3

```javascript
var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
```