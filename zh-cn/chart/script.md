> 脚本用来通过对当前客户端的`MQTT`消息以及客户端事件进行联动,来实现对图表的更新,例如,统计不同`TOPIC`类型消息的数量,占比.对收到的心电数据处理后,进行绘图,来调试数据是否正确显示

!>脚本的运作和客户端是独立的,脚本可以在客户端连接之前启动

### 脚本支持的客户端事件监听 :id=1

| 事件              | 描述                                                       | 参数                     | 备注 |
| ----------------- | ---------------------------------------------------------- | ------------------------ | ---- |
| `onConnect`       | 当客户端连接上时触发                                       | `connack`                | 无   |
| `onMessage`       | 当客户端收到消息时触发                                     | `topic, payload, packet` | 无   |
| `onReconnect`     | 当客户端重连时触发                                         | 无                       | 无   |
| `onDisconnect`    | 当接收到 `disconnect packet from broker. MQTT 5.0 feature` | `packet`                 | 无   |
| `onClose`         | 当客户端关闭时触发                                         | 无                       | 无   |
| `onEnd`           | 当客户端被中止时触发                                       | 无                       | 无   |
| `onError`         | 当客户端出现错误时触发                                     | `error`                  | 无   |
| `onPacketSend`    | 当客户端发送包完成时触发                                   | `packet`                 | 无   |
| `onPublish`       | 当客户端发送消息成功时触发                                 | `topic, message, opts`   | 无   |
| `onPacketReceive` | 当客户端收到包时触发                                       | `packet`                 | 无   |

---

### 脚本支持的用户图表操作事件监听 :id=2

![脚本支持的用户图表操作事件监听](_media/script/1.jpg ':size=600')

| 事件                | 描述                                     | 参数 | 备注 |
| ------------------- | ---------------------------------------- | ---- | ---- |
| `onModuleUserReset` | 当用户点击图表菜单中的重置图表菜单时触发 | 无   | 无   |
| `onModuleUserClear` | 当用户点击图表菜单中的清空图表菜单时触发 | 无   | 无   |

---

### 脚本更新图表数据的方式 :id=3

通过调用`ChartHelper.updateChartViewData()`来更新图表,可以进行数据的单次单数据更新,参数为 `ChartViewUpdateData` 类型,也可进行单次多数据更新,参数为`ChartViewUpdateData`组成的数组`[ChartViewUpdateData,ChartViewUpdateData]`,数据更新将会按照数组的顺序更新

`ChartHelper.updateChartViewData()`只有一个参数`chartViewUpdateData`,参数的定义如下

```javascript
export interface ChartViewUpdateData {
  /**
   * the target path that needs to be updated, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
   */
  targetPath: Array<any>;
  /**
   * The update action
   */
  action: 'array_append_start' | 'array_append_end' | 'array_merge_start' | 'array_merge_end' | 'object_merge' | 'delete' | 'replace' | 'increase' | 'decrease';
  /**
   * The target data that needs to be updated, some update actions do not need to pass, such as delete
   */
  data?: any;
}
```

---

### chartViewData.targetPath :id=4

!>targetPath 用来标记操作的目标位置,是数组格式,每一个元素代表对应层级的键,为空数组`[]`则代表配置的根节点

**示例**

```javascript
var option = {
  // 根节点对应的targetPath=[]
  xAxis: {
    // 本节点对应的targetPath=['xAxis']
    type: 'category',
    // 本节点对应的targetPath=['xAxis','type']
    data: [
      // 本节点对应的targetPath=['xAxis','data']
      'Device-1',
      // 本节点对应的targetPath=['xAxis','data',0]
      'Device-2',
      // 本节点对应的targetPath=['xAxis','data',1]
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    // 本节点对应的targetPath=['yAxis']
    type: 'value',
    // 本节点对应的targetPath=['yAxis','type']
  },
  series: [
    // 本节点对应的targetPath=['series']
    {
      // 本节点对应的targetPath=['series', 0]
      data: [
        // 本节点对应的targetPath=['series', 0,'data']
        120,
        // 本节点对应的targetPath=['series', 0,'data',0]
        200,
        // 本节点对应的targetPath=['series', 0,'data',1]
        150, 80, 70, 110, 120,
      ],
      type: 'bar',
      // 本节点对应的targetPath=['series', 0,'type']
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
setOption(option);
```

---

### 使用参考代码 :id=5

> 更多使用示例,请参考[图表>示例](zh-cn/chart/demo)

**1.单次更新单个目标数据**

<!-- tabs:start -->
<!-- tab:配置 -->

```javascript
const { ChartHelper } = require("@ttqm/ttqm-support");

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

<!-- tab:脚本 -->

```javascript
const { ChartHelper } = require("@ttqm/ttqm-support");
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
ChartHelper.updateChartViewData(chartViewData);
module.exports = {};
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
}
```

<!-- tabs:end -->

---

**1.单次更新多个目标数据**

<!-- tabs:start -->
<!-- tab:配置 -->

```javascript
const { ChartHelper } = require("@ttqm/ttqm-support");
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

<!-- tab:脚本 -->

```javascript
const { ChartHelper } = require("@ttqm/ttqm-support");
var chartViewDatas = [
  {
    targetPath: ['series', 'data'],
    action: 'replace',
    data: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    targetPath: ['series', 'data', 0],
    action: 'replace',
    data: 9
  },
];
ChartHelper.updateChartViewData(chartViewData);
module.exports = {};
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
}
```

<!-- tabs:end -->
