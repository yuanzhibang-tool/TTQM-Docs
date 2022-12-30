> The chart is divided into two parts, one part is the configuration, the other part is the chart script, the configuration is used to configure the initial configuration of the chart, and the script is used to update the chart and realize the linkage of chart data

![Configuration and scripts](_media/usage/1.jpg ':size=600')

---

### 1. Create or open the created chart :id=1

**click the chart button**

![Chart 1](_media/usage/2.jpg ':size=400')

**Open**

![Chart 1](_media/usage/3.jpg ':size=300')

---

### 2. Chart configuration :id=2

> Chart configuration is used to initialize the configuration of the chart. You can export the configuration `object` or export a `Promise`, and return the chart configuration in `resolve`. For more configuration related usage, please refer to [Chart>Configuration](en /chart/option)

!>Note: The chart configuration must return to the configuration within 10s, otherwise it will be forcibly terminated.

<!-- tabs: start -->
<!-- tab: synchronous return -->

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

<!-- tab: asynchronous return -->

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

<!-- tab: Initialize the chart -->

![Chart Option](_media/usage/4.jpg ':size=500')

<!-- tabs: end -->

!>For more chart configurations, please refer to [Chart Demo](https://echarts.apache.org/examples/en/index.html#chart-type-line), TTQM charts are compatible with [Apache Echart](https:/ /echarts.apache.org/en/index.html) hundreds of configuration types

![EChart Demo](_media/usage/5.jpg ':size=500')

---

### 3. Chart script :id=3

> It is used to respond to the `mqtt` client, and the chart event to return the content of the chart data update, to realize the linkage between the chart and the data

!> The script will not exit automatically, it will always be executed even if there is no operation

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

### 4. Run the chart script :id=4

![Run chart script](_media/usage/6.jpg ':size=600')

---

### 5. Minimize, maximize, and close :id=5

!>Maximize, will hide the configuration, JavaScript and console on the left

!>Minimize, the graph will be hidden

!>Click Close to close the chart, stop updating and corresponding scripts

![minimize, maximize, and close](_media/usage/7.jpg ':size=600')

!>You can click the corresponding dynamic icon in the chart list to restore the minimized chart

![minimize, maximize, and close](_media/usage/8.jpg ':size=600')
