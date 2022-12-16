> 本部分说明如何使用图表

#### 图表分为两个部分,一个部分是配置,另外一部分是图表脚本

### 1.图表配置

> 图表配置用来初始化图表的配置,可以通过导出配置`object`也可以导出一个`Promise`,在`resolve`中返回图表配置

!>注意:图表配置必须在 10s 内返回配置,否则将会被强制终止.

<!-- tabs:start -->
<!-- tab:同步返回 -->

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

<!-- tab:异步返回 -->

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

<!-- tab:初始化图表 -->

![Chart Option](../_media/chart-option.jpg ':size=500')

<!-- tabs:end -->

!>更多图表配置,请参照[Chart Demo](https://echarts.apache.org/examples/zh/index.html#chart-type-line),TTQM 图表兼容[Apache Echart](https://echarts.apache.org/zh/index.html)数百种配置类型

![EChart Demo](../_media/echart-demo.jpg ':size=500')

---

### 2.图表脚本

> 用来响应`mqtt`客户端,以及图表事件来返回图标数据更新的内容,来实现图表和数据联动

### 3.运行图表脚本
