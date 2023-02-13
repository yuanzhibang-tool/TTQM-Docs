> Chart Option Script

```javascript
// for more about chart option, please visit: https://doc.ttqm.app/#/en/chart/option
// 更多关于图表配置，请访问: https://doc.ttqm.app/#/zh-cn/chart/option
// 更多關於圖表配置，請訪問: https://doc.ttqm.app/#/zh-tw/chart/option

const { ChartHelper } = require('@ttqm/ttqm-support');

const option = {
  title: {
    text: ' Line Chart Demo',
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0];
      var date = new Date(params.name);
      return (
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' : ' +
        params.value[1]
      );
    },
    axisPointer: {
      animation: false,
    },
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      lineStyle: {
        color: '#0984e3',
      },
      showSymbol: false,
      data: [],
    },
  ],
};
// Set via ChartHelper.setOption
// 使用内置方法ChartHelper.setOption进行配置
// 使用內置方法ChartHelper.setOption進行配置
ChartHelper.setOption(option);
```

---

> Chart Script

```javascript
// for more Chart Script, please visit: https://doc.ttqm.app/#/en/chart/script
// 更多关于图表脚本，请访问: https://doc.ttqm.app/#/zh-cn/chart/script
// 更多關於圖表腳本，請訪問: https://doc.ttqm.app/#/zh-tw/chart/script

const { ChartHelper } = require('@ttqm/ttqm-support');

// init the chart option with random data.
// 使用随机数据初始化图表
// 使用随机数据初始化图表
function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value),
    ],
  };
}
let data = [];
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

const initChartData = {
  targetPath: ['series', 0, 'data'],
  action: 'replace',
  data: data,
};

// set init data
// 设置图表初始化数据
// 设置图表初始化数据

updateChartViewData(initChartData);

// update chart data repeatedly
// 定时更新图表数据
// 定时更新图表数据

setInterval(() => {
  const deleteDataItem0 = ChartHelper.getChartViewUpdateData(
    ['series', 0, 'data', 0],
    'delete'
  );
  const deleteDataItem1 = {
    targetPath: ['series', 0, 'data', 0],
    action: 'delete',
  };
  const deleteDataItem2 = {
    targetPath: ['series', 0, 'data', 0],
    action: 'delete',
  };
  const deleteDataItem3 = {
    targetPath: ['series', 0, 'data', 0],
    action: 'delete',
  };
  const deleteDataItem4 = {
    targetPath: ['series', 0, 'data', 0],
    action: 'delete',
  };
  const appendDataItem0 = {
    targetPath: ['series', 0, 'data'],
    action: 'array_append_end',
    data: randomData(),
  };
  const appendDataItem1 = {
    targetPath: ['series', 0, 'data'],
    action: 'array_append_end',
    data: randomData(),
  };
  const appendDataItem2 = {
    targetPath: ['series', 0, 'data'],
    action: 'array_append_end',
    data: randomData(),
  };
  const appendDataItem3 = {
    targetPath: ['series', 0, 'data'],
    action: 'array_append_end',
    data: randomData(),
  };
  const appendDataItem4 = {
    targetPath: ['series', 0, 'data'],
    action: 'array_append_end',
    data: randomData(),
  };
  const updateData = [
    deleteDataItem0,
    deleteDataItem1,
    deleteDataItem2,
    deleteDataItem3,
    deleteDataItem4,
    appendDataItem0,
    appendDataItem1,
    appendDataItem2,
    appendDataItem3,
    appendDataItem4,
  ];
  // update multi items at once
  // 一次更新多组数据
  updateChartViewData(updateData);
}, 100);
```
