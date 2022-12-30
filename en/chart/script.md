> The script is used to update the chart by linking the `MQTT` messages of the current client and client events, for example, to count the number and proportion of messages of different `TOPIC` types. To process the received ECG data After that, make a drawing to debug whether the data is displayed correctly

!> The operation of the script is independent of the client, and the script can be started before the client connects

### Client event monitoring supported by scripts :id=1

| Event             | Description                                        | Parameters               | Remarks |
| ----------------- | -------------------------------------------------- | ------------------------ | ------- |
| `onConnect`       | Fired when a client connects                       | `connack`                | None    |
| `onMessage`       | Fired when the client receives a message           | `topic, payload, packet` | None    |
| `onReconnect`     | Triggered when the client reconnects               | None                     | None    |
| `onDisconnect`    | Fired when a client disconnects                    | `packet`                 | None    |
| `onClose`         | Fired when the client is closed                    | None                     | None    |
| `onEnd`           | Fired when the client is terminated                | None                     | None    |
| `onError`         | Fired when the client encounters an error          | `error`                  | None    |
| `onPacketSend`    | Fired when the client finishes sending a packet    | `packet`                 | None    |
| `onPublish`       | Fired when the client successfully sends a message | `topic, message, opts`   | None    |
| `onPacketReceive` | Fired when the client receives a packet            | `packet`                 | None    |

---

### User chart operation event monitoring supported by scripts :id=2

![Script-supported user graph operation event monitoring](_media/script/1.jpg ':size=600')

| Event               | Description                                                          | Parameters | Remarks |
| ------------------- | -------------------------------------------------------------------- | ---------- | ------- |
| `onModuleUserReset` | Fired when the user clicks Reset Graph Menu in the Graph Menu        | None       | None    |
| `onModuleUserClear` | Fired when the user clicks to clear the chart menu in the chart menu | None       | None    |

---

### How the script updates the chart data :id=3

By calling the built-in function `updateChartViewData` to update the chart, you can perform a single data update of the data, or a single multi-group data update, and the data update will be updated in the order of the input

The `updateChartViewData` function has only one parameter `chartViewData`, and the definition of the parameters is as follows

```javascript
declare enum ChartViewModuleDataActionType {
     ARRAY_APPEND_START = "array_append_start", //Append the incoming data to the head of the original array at the configuration target location in the form of elements, and data is the corresponding array that needs to be appended
     ARRAY_APPEND_END = "array_append_end", //Append the incoming data to the end of the original array at the configuration target position in the form of elements, and data is the corresponding array that needs to be appended
     ARRAY_MERGE_START = "array_merge_start", //Merge all the elements in the incoming data (must be an array) to the head of the original array at the configuration target location, data is the corresponding array that needs to be merged
     ARRAY_MERGE_END = "array_merge_end", //Merge all the elements in the incoming data (must be an array) to the head of the original array, data is the corresponding array that needs to be merged
     OBJECT_MERGE = "object_merge", //Merge the incoming object and the original object to form a new object, data is the corresponding object that needs to be merged
     DELETE = "delete", //Clear the element of the configuration target location, no need to set data
     REPLACE = "replace", //Replace the element at the configuration target position with the incoming data, and data is the target element to be replaced
     INCREASE = "increase", //Add the elements of the configuration target position, data is the step size corresponding to the need to increase
     DECREASE = "decrease" //Reduce the elements of the configuration target position, data is the step size corresponding to the decrease
}

interface ChartViewModuleUpdateData {
   targetPath: Array<any>; //To mark the target location that needs to be updated
   action: ChartViewModuleDataActionType; //The way to mark the update
   data?: any; //The target data that needs to be updated, specific update operations do not need to pass in data, such as delete
   version: number; //constantly 1
}
```

---

### chartViewData.targetPath :id=4

!>targetPath It is used to mark the target position of the operation. It is an array format. Each element represents the key of the corresponding level. An empty array `[]` represents the root node of the configuration.

**Demo**

```javascript
var option = {
  // targetPath=[] corresponding to the root node
  xAxis: {
    // targetPath=['xAxis'] corresponding to this node
    type: 'category',
    // targetPath=['xAxis','type'] corresponding to this node
    data: [
      // targetPath=['xAxis','data'] corresponding to this node
      'Device-1',
      // targetPath=['xAxis','data',0] corresponding to this node
      'Device-2',
      // targetPath=['xAxis','data',1] corresponding to this node
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    // targetPath=['yAxis'] corresponding to this node
    type: 'value',
    // targetPath=['yAxis','type'] corresponding to this node
  },
  series: [
    // targetPath=['series'] corresponding to this node
    {
      // targetPath=['series', 0] corresponding to this node
      data: [
        // targetPath=['series', 0, 'data'] corresponding to this node
        120,
        // targetPath=['series', 0, 'data',0] corresponding to this node
        200,
        // targetPath=['series', 0, 'data',1] corresponding to this node
        150, 80, 70, 110, 120,
      ],
      type: 'bar',
      // targetPath=['series', 0, 'type'] corresponding to this node
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

### Use reference code :id=5

> For more usage examples, please refer to [Chart>Example](en/chart/demo)

**1. Update a single target data at a time**

<!-- tabs: start -->
<!-- tab: Configuration -->

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

<!-- tab: script -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab: target configuration -->

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
      data: [1, 2, 3, 4, 5, 6, 7],
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

<!-- tabs:end -->

---

**1. Update multiple target data at a time**

<!-- tabs: start -->
<!-- tab: Configuration -->

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

<!-- tab: script -->

```javascript
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
updateChartViewData(chartViewData);
module.exports = {};
```

<!-- tab: target configuration -->

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
      data: [9, 2, 3, 4, 5, 6, 7],
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

<!-- tabs: end -->
