> 图表配置用来初始化图表的配置,可以通过`ChartHelper.setOption(option)`进行配置

---

!>注意:配置脚本有一些限制,由于运行环境是`node.js`,而且是和图表分离的所欲请注意有一下几点限制

1. 图表配置必须在 10s 内返回配置,否则将会被强制终止.
2. 不支持`jQuery`模块,如果示例中有网络请求,请参照[常见问题?>如何添加脚本依赖库?](zh-cn/question/built-in-module?id=_1),进行接口方法的替换
3. 不支持对图表添加自定义事件

---

### 1.查找自己需要使用的图表类型,请在[Chart Demo](https://echarts.apache.org/examples/zh/index.html#chart-type-line)选择需要使用到的图表类型 :id=1

![选择图表类型](_media/option/1.jpg ':size=700')

---

### 2.复制对应的配置脚本 :id=2

![复制对应的配置脚本](_media/option/2.jpg ':size=700')

---

### 3.粘贴到图表配置脚本中,代码最上面面添加变量声明,结尾添加导出配置代码 :id=3

**添加变量声明**

!>因为配置中使用了`echarts`,所以必须在开头导入`echarts`,以在代码中使用

![添加变量声明](_media/option/3.jpg ':size=700')

**导出配置代码**

![导出配置代码](_media/option/4.jpg ':size=700')

---

### 4.保存并运行,即可看到初始化的图表 :id=4

![导出配置代码](_media/option/5.jpg ':size=700')

---

### 5.完整配置代码 :id=5

<!-- tabs:start -->

<!-- tab:初始化配置 -->

```javascript
const echarts = require('echarts');
const { ChartHelper } = require('@ttqm/ttqm-support');

const option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)',
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [140, 232, 101, 264, 90, 340, 250],
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)',
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)',
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [320, 132, 201, 334, 190, 130, 220],
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)',
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 402, 231, 134, 190, 230, 120],
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)',
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 302, 181, 234, 210, 290, 150],
    },
  ],
};
ChartHelper.setOption(option);
```

<!-- tab:初始化图表 -->

![Chart Option](_media/option/6.jpg ':size=600')

<!-- tabs:end -->
