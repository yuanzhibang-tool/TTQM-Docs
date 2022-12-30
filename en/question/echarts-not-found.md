!>When you use the chart to obtain the configuration script, you may encounter the problem that the `echarts` module is not imported, as shown in the figure below

![Echart Not Found](_media/echarts-not-found/1.jpg ':size=600')

---

### Solution, import `echart` at the top :id=1

![Resolve Echart Not Found](_media/echarts-not-found/2.jpg ':size=600')

---

**Code**

```javascript
const echarts = require('echarts');
```
