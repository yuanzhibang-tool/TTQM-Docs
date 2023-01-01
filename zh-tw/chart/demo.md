> 本部分用來示例如何使用腳本更新圖表配置

!>如果您要查看圖表配置示例,請按照[圖表>配置](zh-tw/chart/option)中的操作來獲取圖表配置示例

---

### 1.監聽事件,並更新數據 :id=1

!>具體的監聽事件描述,請參考[圖表>腳本](zh-tw/chart/script)

<!-- tabs:start -->

<!-- tab:腳本 -->

```javascript
module.exports = {
  onMessage: (topic, payload, packet) => {
    var chartViewData = {
      targetPath: ['series', 'data', 0],
      action: 'increase',
      data: 1,
    };
    // data中的第一個元素加1
    updateChartViewData(chartViewData);
  },
  onPublish: (topic, message, opts) => {
    var chartViewData = {
      targetPath: ['series', 'data', 1],
      action: 'increase',
      data: 1,
    };
    // data中的第二個元素加1
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

<!-- tab:目標配置 -->

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

!>以上為當兩個事件均觸發一次後對應的目標數據

<!-- tabs:end -->

---

### 2.替換數據 :id=2

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 3.一次替換多組數據 :id=3

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 4.刪除數據 :id=4

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 5.增加數據值 :id=5

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 6.減少數據值 :id=6

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 7.數組附加(array_append_end) :id=7

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 8.數組合併(array_merge_end) :id=8

<!-- tabs:start -->

<!-- tab:腳本 -->

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

<!-- tab:目標配置 -->

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

---

### 9.object 合併(object_merge) :id=9

!>`object_merge`僅僅會對`object`的根屬性進行合併,如果存在相同的屬性則會被替換掉

<!-- tabs:start -->

<!-- tab:腳本 -->

```javascript
var chartViewData = {
  targetPath: [], //對根節點進行操作
  action: 'object_merge',
  data: {
    // yAxis值將會被整體替換掉
    yAxis: {
      type: 'value',
      title: 'yAxis',
    },
    // 該屬性會被添加到配置裡
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

<!-- tab:目標配置 -->

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

### 10.替換整個配置 :id=10

<!-- tabs:start -->

<!-- tab:腳本 -->

```javascript
var chartViewData = {
  // 對整個根節點進行操作
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

<!-- tab:目標配置 -->

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

### 11.過濾 topic 並更新數據 :id=11

<!-- tabs:start -->

<!-- tab:腳本 -->

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
      // data中的第一個元素加1
      updateChartViewData(chartViewData);
    }
  },
  onPublish: (topic, message, opts) => {
    var chartViewData = {
      targetPath: ['series', 'data', 1],
      action: 'increase',
      data: 1,
    };
    // data中的第二個元素加1
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

<!-- tab:目標配置 -->

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

!>以上為當兩個事件均觸發一次後,並且`onMessage`的 `topic` 比中後的配置

<!-- tabs:end -->

---

!>更多腳本示例,請參照[通用腳本示例](zh-tw/other/common-script-demo.md)
