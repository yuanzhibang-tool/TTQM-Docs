!>當您使用圖表獲取配置腳本時,有可能會遇到`echarts`模塊未導入的問題,如下圖所示

![Echart Not Found](_media/echarts-not-found/1.jpg ":size=600")

---

### 解決方式,在最上方導入`echart` :id=1

![Resolve Echart Not Found](_media/echarts-not-found/2.jpg ":size=600")

---

**代碼**

```javascript
const echarts = require("echarts");
```
