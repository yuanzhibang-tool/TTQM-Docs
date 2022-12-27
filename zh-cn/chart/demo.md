> 本部分用来示例如何使用脚本更新图表配置

!>如果您要查看图表配置示例,请按照[图表>配置](zh-cn/chart/option)中的操作来获取图表配置示例

### 1.监听事件,并更新数据 :id=1

!>具体的监听事件描述,请参考[图表>脚本](zh-cn/chart/script)

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
module.exports = {
  onMessage: (topic, payload, packet) => {
    var chartViewData = {
      targetPath: ['series', 'data', 0],
      action: 'increase',
      data: 1,
    };
    // data中的第一个元素加1
    updateChartViewData(chartViewData);
  },
  onPublish: (topic, message, opts) => {
    var chartViewData = {
      targetPath: ['series', 'data', 1],
      action: 'increase',
      data: 1,
    };
    // data中的第二个元素加1
    updateChartViewData(chartViewData);
  },
};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      data: [121, 201, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

!>以上为当两个事件均触发一次后对应的目标数据

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

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      data: [1, 2, 3, 4, 5, 6, 7],
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

### 3.一次替换多组数据 :id=3

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData1 = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};

var chartViewData2 = {
  targetPath: ['xAxis', 'data'],
  action: 'replace',
  data: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
};

updateChartViewData([chartViewData1, chartViewData2]);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
      'D1',
      'D2',
      'D3',
      'D4',
      'D5',
      'D6',
      'D7',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [1, 2, 3, 4, 5, 6, 7],
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
var chartViewData1 = {
  targetPath: ['series', 'data', 0],
  action: 'delete',
};

var chartViewData2 = {
  targetPath: ['xAxis', 'data', 0],
  action: 'delete',
};
updateChartViewData([chartViewData1, chartViewData2]);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
```

<!-- tab:目标配置 -->

```javascript
{
  xAxis: {
    type: 'category',
    data: [
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
      data: [200, 150, 80, 70, 110, 120],
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
  targetPath: ['series', 'data', 6],
  action: 'increase',
  data: 2,
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      data: [120, 200, 150, 80, 70, 110, 122],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

<!-- tabs:end -->

### 6.减少数据值 :id=6

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data', 6],
  action: 'decrease',
  data: 2,
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      data: [120, 200, 150, 80, 70, 110, 118],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

<!-- tabs:end -->

### 7.数组附加(array_append_end) :id=7

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData1 = {
  targetPath: ['series', 'data'],
  action: 'array_append_end',
  data: 1,
};

var chartViewData2 = {
  targetPath: ['xAxis', 'data'],
  action: 'array_append_end',
  data: 'Device-8',
};

updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      'Device-8',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120, 1],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

<!-- tabs:end -->

### 8.数组合并(array_merge_end) :id=8

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData1 = {
  targetPath: ['series', 'data'],
  action: 'array_merge_end',
  data: [1, 2],
};

var chartViewData1 = {
  targetPath: ['xAxis', 'data'],
  action: 'array_merge_end',
  data: ['Device-8', 'Device-9'],
};

updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      'Device-8',
      'Device-9',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 120, 1, 2],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

<!-- tabs:end -->

### 9.object 合并(object_merge) :id=9

!>`object_merge`仅仅会对`object`的根属性进行合并,如果存在相同的属性则会被替换掉

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  targetPath: [], //对根节点进行操作
  action: 'object_merge',
  data: {
    // yAxis值将会被整体替换掉
    yAxis: {
      type: 'value',
      title: 'yAxis',
    },
    // 该属性会被添加到配置里
    title: 'Chart Title',
  },
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ]
}
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
    title: 'yAxis',
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
  title: 'Chart Title'
}
```

<!-- tabs:end -->

---

### 10.替换整个配置 :id=10

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
var chartViewData = {
  // 对整个根节点进行操作
  targetPath: [],
  action: 'replace',
  data: {
    xAxis: {
      type: 'category',
      data: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(150, 140, 120, 0.4)',
        },
      },
    ],
  },
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ]
}
```

<!-- tab:目标配置 -->

```javascript
{
    xAxis: {
      type: 'category',
      data: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(150, 140, 120, 0.4)',
        },
      },
    ],
  }
```

<!-- tabs:end -->

---

### 11.过滤 topic 并更新数据

<!-- tabs:start -->

<!-- tab:脚本 -->

```javascript
// test the topic is contain the sub-topic
const { TopicUtil } = require('@ttqm/ttqm-support');
module.exports = {
  onMessage: (topic, payload, packet) => {
    if (TopicUtil.isSubTopic('device_type/+/device_id/+', topic)) {
      var chartViewData = {
        targetPath: ['series', 'data', 0],
        action: 'increase',
        data: 1,
      };
      // data中的第一个元素加1
      updateChartViewData(chartViewData);
    }
  },
  onPublish: (topic, message, opts) => {
    var chartViewData = {
      targetPath: ['series', 'data', 1],
      action: 'increase',
      data: 1,
    };
    // data中的第二个元素加1
    updateChartViewData(chartViewData);
  },
};
```

<!-- tab:原配置 -->

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
      data: [120, 200, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
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
      data: [121, 201, 150, 80, 70, 110, 120],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
}
```

!>以上为当两个事件均触发一次后,并且`onMessage`的 `topic` 比中后的配置

<!-- tabs:end -->
