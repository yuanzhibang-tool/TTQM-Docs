!>您必须在安装第三方依赖之前,请确保您的电脑已经安装了`node环境`,没有安装的话,请根据文档安装[如何安装指定版本的 node?](zh-cn/question/how-to-install-node-version-specified.md)

---

### 1.命令行中切换到安装模块路径 :id=1

> 在`应用 > 设置`中复制`cd命令`

![复制命令](_media/how-to-add-support-modules/1.jpg ':size=500')

---

### 2.安装需要使用到的库,例如需要使用到`lodash` :id=2

```bash
# 粘贴第一步中复制的命令
cd /第三方支持模块路径

# 安装lodash库
npm install lodash

# !如果中国大陆安装较慢,请指定源
npm install lodash --registry=https://registry.npmmirror.com
```

### 3.即可在脚本中使用 :id=3

```javascript
var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
```

---

### 4.安装@types,增强编辑器类型提示

!>从 `TTQM` `1.1.0` 开始内置的脚本编辑器支持代码提示和补全功能,你可以在 [https://www.npmjs.com](https://www.npmjs.com) 上搜索您需要提示的模块,例如需要安装`lodash`的类型定义, 搜索`@types/lodash`,如果存在,请使用 `npm install @types/lodash` 安装,或者直接使用 `npm install @types/对应包名称`进行安装,安装成功则代表包含该库.
