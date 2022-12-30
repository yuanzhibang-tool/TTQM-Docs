!>Script operation files, such as: read, write, delete, create folders, etc., must be operated in a specific directory. According to the validity period of the file, it can be divided into permanent script data directory and script temporary data directory

### 1. Script data directory :id=1

> The data in this directory will be saved permanently and will not be cleaned up regularly

**You can open the corresponding directory in `Application>Settings`**

![Open script data directory](_media/script-data-dir/1.jpg)

**Get the corresponding directory in the script. For more operation methods, please refer to [FAQ>What built-in script dependencies are there?](en/question/build-in-module?id=_6)**

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const filePath = FileUtil.getScriptDataPath('messageCountMap.json');
FileUtil.createStringFileSync(filePath, '{}');
```

---

### 2. Script temporary data directory :id=2

> The data in this directory will be cleaned up regularly, so no data content that needs to be stored permanently should be stored

**You can open the corresponding directory in `Application>Settings`**

![Open script temporary data directory](_media/script-data-dir/2.jpg)

**Get the corresponding directory in the script. For more operation methods, please refer to [FAQ>What built-in script dependencies are there?](en/question/build-in-module?id=_6)**

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const filePath = FileUtil.getScriptTmpDataPath('messageCountMap.json');
FileUtil.createStringFileSync(filePath, '{}');
```
