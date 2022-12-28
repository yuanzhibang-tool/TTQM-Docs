!>脚本操作文件,例如:读取,写入,删除,创建文件夹等,必须在特定的目录内操作,根据文件有效期,可分为永久脚本数据目录,脚本临时数据目录

### 1.脚本数据目录 :id=1

> 该目录的数据将会永久保存,不会定时清理

**在`应用>设置`中可以打开对应的目录**

![打开脚本数据目录](_media/script-data-dir/1.jpg)

**在脚本中获取对应目录,更多操作方法请参照[常见问题>有哪些内置的脚本依赖库?](zh-cn/question/build-in-module?id=_6)**

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const filePath = FileUtil.getScriptDataPath('messageCountMap.json');
FileUtil.createStringFileSync(filePath, '{}');
```

---

### 2.脚本临时数据目录 :id=2

> 该目录的数据将会定时清理,所以不应该存储需要永久化的数据内容

**在`应用>设置`中可以打开对应的目录**

![打开脚本临时数据目录](_media/script-data-dir/2.jpg)

**在脚本中获取对应目录,更多操作方法请参照[常见问题>有哪些内置的脚本依赖库?](zh-cn/question/build-in-module?id=_6)**

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const filePath = FileUtil.getScriptTmpDataPath('messageCountMap.json');
FileUtil.createStringFileSync(filePath, '{}');
```
