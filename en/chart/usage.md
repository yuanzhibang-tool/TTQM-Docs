> The Chart has two parts, one part is the option, the other part is the chart script, the option is used to configure the initial option of the chart, and the script is used to update the chart data.

![option and scripts](_media/usage/1.jpg ':size=600')

---

### 1. Create or open the created chart :id=1

**Click the chart button**

![Chart 1](_media/usage/2.jpg ':size=400')

**Open**

![Chart 1](_media/usage/3.jpg ':size=300')

---

### 2. Chart Option :id=2

> Chart Option Script is used to initialize the option of the chart. You can use built-in function `setOption`, export the option `object` or export a `Promise` which resolve the chart option. For more option related usage, please refer to [Chart>option](en/chart/option).

!>Note: The chart option must return to the option within 10s, otherwise it will be forcibly terminated.

<!-- tabs: start -->
<!-- tab: Use Function -->

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
setOption(option);
```

<!-- tab: Synchronous Return -->

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

<!-- tab: Asynchronous Return -->

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
module.exports = new Promise((resolve, reject) => {
  resolve(option);
});
```

<!-- tab: Inited Chart -->

![Chart Option](_media/usage/4.jpg ':size=500')

<!-- tabs: end -->

!>For more chart options, please refer to [Chart Demo](https://echarts.apache.org/examples/en/index.html#chart-type-line), TTQM Chart are compatible with [Apache Echart](https://echarts.apache.org/en/index.html) hundreds of chart types.

![EChart Demo](_media/usage/5.jpg ':size=500')

---

### 3. Chart Script :id=3

> It is used to listen to the `mqtt` client and the Chart event and update the chart data.

> !> The script will not exit automatically, it will always be executed even if there is no operation

```javascript
setInterval(() => {
  // You can update the corresponding chart data by filtering the topic
  const randomRange = (min, max) => {
    // Min minimum value, max maximum value
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(randomRange(100, 500));
  }
  // Modify multiple items using the format [{...}, {...}, {...}]
  const returnData = {
    targetPath: ['series', 0, 'data'],
    action: 'replace',
    data: data,
    version: 1,
  };
  // Update the chart data through the built-in function updateChartViewData
  updateChartViewData(returnData);
  console.log('script debug info!');
}, 1000);

module.exports = {
  onMessage: (topic, payload, packet) => {
    // You can update the corresponding chart data by filtering the topic
    const randomRange = (min, max) => {
      // Min minimum value, max maximum value
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(randomRange(100, 500));
    }
    // Modify multiple items using the format [{...}, {...}, {...}]
    const returnData = {
      targetPath: ['series', 0, 'data'],
      action: 'replace',
      data: data,
      version: 1,
    };
    return returnData;
  },
  onPublish: (topic, payload) => {},
};
```

---

### 4. Run the Chart Script :id=4

![Run chart script](_media/usage/6.jpg ':size=600')

---

### 5. Minimize, Maximize, and Close :id=5

!>Maximize, will hide the Option, JavaScript and Console Tabs on the left.

!>Minimize, the Chart window will be hidden.

!>Click Close to close the Chart window and stop the script.

![minimize, maximize, and close](_media/usage/7.jpg ':size=600')

!>You can click the dynamic icon in the Chart List to restore the minimized Chart

![minimize, maximize, and close](_media/usage/8.jpg ':size=600')
