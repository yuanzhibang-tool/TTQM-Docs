> 图表分为两个部分,一个部分是配置,另外一部分是图表脚本,配置用来配置图表的初始化配置,脚本用来更新图表,实现图表数据联动

![配置和脚本](_media/usage/1.jpg ':size=600')

---

### 1.创建或者打开已创建的图表 :id=1

**点击图表按钮**

![图表1](_media/usage/2.jpg ':size=400')

**打开**

![图表1](_media/usage/3.jpg ':size=300')

---

### 2.图表配置 :id=2

> 图表配置用来初始化图表的配置,可以通过`ChartHelper.setOption(option)`,请参考[图表>配置](zh-cn/chart/option)

!>注意:图表配置必须在 10s 内返回配置,否则将会被强制终止.

<!-- tabs:start -->
<!-- tab:初始化配置 -->

```javascript
const { ChartHelper } = require('@ttqm/ttqm-support');
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
ChartHelper.setOption(option);
```

<!-- tab:初始化图表 -->

![Chart Option](_media/usage/4.jpg ':size=500')

<!-- tabs:end -->

!>更多图表配置,请参照[Chart Demo](https://echarts.apache.org/examples/zh/index.html#chart-type-line),TTQM 图表兼容[Apache Echart](https://echarts.apache.org/zh/index.html)数百种配置类型

![EChart Demo](_media/usage/5.jpg ':size=500')

---

### 3.图表脚本 :id=3

> 用来响应`mqtt`客户端,以及图表事件来返回图表数据更新的内容,来实现图表和数据联动

!>脚本不会自动退出,即使没有操作也会一直执行

```javascript
const { ChartHelper } = require('@ttqm/ttqm-support');

setInterval(() => {
  // 可通过过滤topic，实现对应chart数据更新
  const randomRange = (min, max) => {
    // min最小值，max最大值
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(randomRange(100, 500));
  }
  // 修改多项使用 [{...}, {...}, {...}] 格式
  const updateData = ChartHelper.getChartViewUpdateData(
    ['series', 0, 'data'],
    'replace',
    data
  );
  // 通过ChartHelper.updateChartViewData()更新图表数据
  ChartHelper.updateChartViewData(updateData);
  console.log('script debug info!');
}, 1000);

module.exports = {
  onMessage: (topic, payload, packet) => {
    // 可通过过滤topic，实现对应chart数据更新
    const randomRange = (min, max) => {
      // min最小值，max最大值
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(randomRange(100, 500));
    }
    // 修改多项使用 [{...}, {...}, {...}] 格式
    const updateData1 = {
      targetPath: ['series', 0, 'data'],
      action: 'replace',
      data: data,
    };
    ChartHelper.updateChartViewData(updateData1);
  },
  onPublish: (topic, payload) => {},
};
```

---

### 4.运行图表脚本 :id=4

![运行图表脚本](_media/usage/6.jpg ':size=600')

---

### 5.最小化,最大化,和关闭 :id=5

!>最大化,将会隐藏 左侧的配置,JavaScript 和控制台

!>最小化,图表将会隐藏

!>点击关闭,将会关闭图表,停止更新和对应脚本

![最小化,最大化,和关闭](_media/usage/7.jpg ':size=600')

!>您可以在图表列表里点击对应的动态图标来恢复最小化的图表

![最小化,最大化,和关闭](_media/usage/8.jpg ':size=600')
