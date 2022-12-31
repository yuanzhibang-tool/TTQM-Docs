> This section is used to show how to use scripts to update chart option.

!> If you want to see chart option examples, please follow [Charts>Option](en/chart/option) to get chart option examples

---

### 1. Listen for events and update data :id=1

!>For event details, please refer to [Chart>Script](en/chart/script)

<!-- tabs:start -->

<!-- tab:Script -->

```javascript
module.exports = {
  onMessage: (topic, payload, packet) => {
    var chartViewData = {
      targetPath: ['series', 'data', 0],
      action: 'increase',
      data: 1,
    };
    // Add 1 to the first element in data
    updateChartViewData(chartViewData);
  },
  onPublish: (topic, message, opts) => {
    var chartViewData = {
      targetPath: ['series', 'data', 1],
      action: 'increase',
      data: 1,
    };
    // Add 1 to the second element in data
    updateChartViewData(chartViewData);
  },
};
```

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

!>The above is the option after both events are triggered once

<!-- tabs:end -->

---

### 2.Replace data :id=2

<!-- tabs:start -->

<!-- tab:Script -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 3.Replace multiple sets of data at once :id=3

<!-- tabs:start -->

<!-- tab:Script -->

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

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 4.Delete data :id=4

<!-- tabs:start -->

<!-- tab:Script -->

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

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 5.Increase data value :id=5

<!-- tabs:start -->

<!-- tab:Script -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data', 6],
  action: 'increase',
  data: 2,
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 6.Decrease data value :id=6

<!-- tabs:start -->

<!-- tab:Script -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data', 6],
  action: 'decrease',
  data: 2,
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 7.Append data to the end of array(array_append_end) :id=7

<!-- tabs:start -->

<!-- tab:Script -->

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

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 8.Array merge(array_merge_end) :id=8

<!-- tabs:start -->

<!-- tab:Script -->

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

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 9.Object merge(object_merge) :id=9

!>`object_merge` will only merge the root properties of `object`, if the same attribute exists, it will be replaced

<!-- tabs:start -->

<!-- tab:Script -->

```javascript
var chartViewData = {
  targetPath: [], // Operate on the root node
  action: 'object_merge',
  data: {
    // The yAxis value will be replaced as a whole
    yAxis: {
      type: 'value',
      title: 'yAxis',
    },
    // This property will be added to the configuration
    title: 'Chart Title',
  },
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 10.Replace the whole option :id=10

<!-- tabs:start -->

<!-- tab:Script -->

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

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

### 11.Filter topic and update data :id=11

<!-- tabs:start -->

<!-- tab:Script -->

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
      // Add 1 to the first element in data
      updateChartViewData(chartViewData);
    }
  },
  onPublish: (topic, message, opts) => {
    var chartViewData = {
      targetPath: ['series', 'data', 1],
      action: 'increase',
      data: 1,
    };
    // Add 1 to the second element in data
    updateChartViewData(chartViewData);
  },
};
```

<!-- tab:Original Option -->

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

<!-- tab:Target Option -->

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

!>The above is the option after the two events are triggered once, and the `topic` of `onMessage` meets the conditions

<!-- tabs:end -->

---

!>For more script demos, please refer to [Common Script Demo](en/other/common-script-demo.md)
