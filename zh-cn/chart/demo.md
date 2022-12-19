> 本部分用来示例如何使用脚本更新图表配置

!>如果您要查看图表配置示例,请按照[图表>配置](zh-cn/chart/option)中的操作来获取图表配置示例

### 1.监听事件,并更新数据 :id=1

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {
  onMessage: (topic, payload, packet) => {},
  onPublish: (topic, payload, packet) => {},
};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

---

### 2.替换数据 :id=2

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 3.替换多组数据 :id=3

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 4.删除数据 :id=4

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 5.增加数据值 :id=5

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 6.减少数据值 :id=6

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 7.数组附加(array_append_start) :id=7

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 8.数组合并(array_merge_start) :id=8

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 9.object 合并(object_merge) :id=9

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->

### 10.替换整个配置 :id=10

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:配置 -->

```javascript
var option = {
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'Device-1',
      'Device-2',
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [9, 2, 3, 4, 5, 6, 7],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tabs:end -->
