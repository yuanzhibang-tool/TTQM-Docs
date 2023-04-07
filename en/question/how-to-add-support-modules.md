!>Before you install third-party dependencies, please make sure that your computer has installed the `node environment`. If not, please install it [How to install the specified version of node?](en/question/how-to-install-node-version-specified.md)

---

### 1. cd to the third-party module installation path in the command line :id=1

> Copy the `cd command` in `Settings`

![Copy command](_media/how-to-add-support-modules/1.jpg ':size=500')

---

### 2. Install the modules you need to use, for example, you need to use `lodash` in script :id=2

```bash
# Paste the command copied in the first step
cd "/Third party support module path"

# Install the lodash library
npm install lodash

```

### 3. `lodash` can be used in the script :id=3

```javascript
var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
```

---

### 4. Install @types to enhance editor type hints :id=4

!>From `TTQM` `1.1.0`, the built-in script editor supports code hints and completion functions, you can find it at [https://www.npmjs.com](https://www.npmjs.com) Search for the module you need to prompt, for example, you need to install the type definition of `lodash`, search `@types/lodash`, if it exists, please use `npm install @types/lodash` to install, or directly use `npm install @types/library-name` to install, if it exists, the installation will be successful.
