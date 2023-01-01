!>In chart option script, you may get the Error that the `echarts` module is not defined, like this,

![Echart Not Found](_media/echarts-not-found/1.jpg ':size=600')

---

#### Solution, import `echart` at the top :id=1

![Resolve Echart Not Found](_media/echarts-not-found/2.jpg ':size=600')

---

**Code**

```javascript
const echarts = require('echarts');
```
