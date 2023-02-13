> The script is used to listen the `MQTT` event, chart events and update the chart, for example, to show the message counts of different `topic` , process the received ECG data and draw it to debug whether the data is correct or not.

!> The script is independent from the client, so the script can run before the client connected.

### Client Event supported by script :id=1

| Event             | Description                                                              | Parameters               | Note |
| ----------------- | ------------------------------------------------------------------------ | ------------------------ | ---- |
| `onConnect`       | Emited when the client connected                                         | `connack`                | None |
| `onMessage`       | Emited when the client receives a message                                | `topic, payload, packet` | None |
| `onReconnect`     | Emited when the client reconnect                                         | None                     | None |
| `onDisconnect`    | Emitted after receiving disconnect packet from broker. MQTT 5.0 feature. | `packet`                 | None |
| `onClose`         | Emited when the client is closed                                         | None                     | None |
| `onEnd`           | Emited when the client is closed                                         | None                     | None |
| `onError`         | Emited when the client encounters an error                               | `error`                  | None |
| `onPacketSend`    | Emited when the client finishes sending a packet                         | `packet`                 | None |
| `onPublish`       | Emited when the client successfully sends a message                      | `topic, message, opts`   | None |
| `onPacketReceive` | Emited when the client receives a packet                                 | `packet`                 | None |

---

### User chart operation event supported by script :id=2

![Script-supported user graph operation event monitoring](_media/script/1.jpg ':size=600')

| Event               | Description                                              | Parameters | Note |
| ------------------- | -------------------------------------------------------- | ---------- | ---- |
| `onModuleUserReset` | Emited when the user clicks Reset Menu in the Chart Menu | None       | None |
| `onModuleUserClear` | Emited when the user clicks Clear Menu in the Chart menu | None       | None |

---

### How the script updates the chart data? :id=3

By calling method `ChartHelper.updateChartViewData()` to update the chart, you can update option with single `ChartViewUpdateData`, or update with an array like `[ChartViewUpdateData,ChartViewUpdateData]`, and the Chart will be updated in the order of the array one by one.

The `ChartHelper.updateChartViewData()` method has only one parameter `ChartViewUpdateData` or [ChartViewUpdateData,ChartViewUpdateData,ChartViewUpdateData], and the definition of the parameters is as follows

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

!>targetPath It is used to define the target path of the operation. It is an array format. Each element represents the key of the corresponding level. An empty array `[]` represents the root node of the option.

**Demo**

```javascript
var option = {
  // targetPath=[] represents to the root node
  xAxis: {
    // targetPath=['xAxis'] represents to this node
    type: 'category',
    // targetPath=['xAxis','type'] represents to this node
    data: [
      // targetPath=['xAxis','data'] represents to this node
      'Device-1',
      // targetPath=['xAxis','data',0] represents to this node
      'Device-2',
      // targetPath=['xAxis','data',1] represents to this node
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    // targetPath=['yAxis'] represents to this node
    type: 'value',
    // targetPath=['yAxis','type'] represents to this node
  },
  series: [
    // targetPath=['series'] represents to this node
    {
      // targetPath=['series', 0] represents to this node
      data: [
        // targetPath=['series', 0, 'data'] represents to this node
        120,
        // targetPath=['series', 0, 'data',0] represents to this node
        200,
        // targetPath=['series', 0, 'data',1] represents to this node
        150, 80, 70, 110, 120,
      ],
      type: 'bar',
      // targetPath=['series', 0, 'type'] represents to this node
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};
module.exports = option;
```

---

### A simple demo :id=5

> For more usage demos, please refer to [Chart>Demo](en/chart/demo)

**1. Update a single target data at a time**

<!-- tabs: start -->
<!-- tab: Option -->

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

<!-- tab: Script -->

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

<!-- tab: Target Option -->

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

**2. Update multiple data once**

<!-- tabs: start -->
<!-- tab: Option -->

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

<!-- tab: Script -->

```javascript
const { ChartHelper } = require("@ttqm/ttqm-support");
var chartViewDatas = [
  {
    targetPath: ['series', 'data'],
    action: 'replace',
    data: [1, 2, 3, 4, 5, 6, 7],
    version: 1,
  },
  {
    targetPath: ['series', 'data', 0],
    action: 'replace',
    data: 9,
    version: 1,
  },
];
ChartHelper.updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab: Target Option -->

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

<!-- tabs: end -->
