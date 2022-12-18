!>当您使用图表获取配置脚本时,有可能会遇到`echarts`模块未导入的问题,如下图所示

![Echart Not Found](../_media/echarts-not-found-1.jpg ':size=600')

---

### 解决方式,在最上方导入`echart`

![Resolve Echart Not Found](../_media/echarts-not-found-2.jpg ':size=600')

---

**代码**

```javascript
const echarts = require('echarts');
```
