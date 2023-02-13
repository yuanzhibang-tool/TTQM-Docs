> 腳本用來通過對當前客戶端的`MQTT`消息以及客戶端事件進行聯動,來實現對圖表的更新,例如,統計不同`TOPIC`類型消息的數量,佔比.對收到的心電數據處理後,進行繪圖,來調試數據是否正確顯示

!>腳本的運作和客戶端是獨立的,腳本可以在客戶端連接之前啟動

### 腳本支持的客戶端事件監聽 :id=1

| 事件              | 描述                                                       | 參數                     | 備註 |
| ----------------- | ---------------------------------------------------------- | ------------------------ | ---- |
| `onConnect`       | 當客戶端連接上時觸發                                       | `connack`                | 無   |
| `onMessage`       | 當客戶端收到消息時觸發                                     | `topic, payload, packet` | 無   |
| `onReconnect`     | 當客戶端重連時觸發                                         | 無                       | 無   |
| `onDisconnect`    | 當接收到 `disconnect packet from broker. MQTT 5.0 feature` | `packet`                 | 無   |
| `onClose`         | 當客戶端關閉時觸發                                         | 無                       | 無   |
| `onEnd`           | 當客戶端被中止時觸發                                       | 無                       | 無   |
| `onError`         | 當客戶端出現錯誤時觸發                                     | `error`                  | 無   |
| `onPacketSend`    | 當客戶端發送包完成時觸發                                   | `packet`                 | 無   |
| `onPublish`       | 當客戶端發送消息成功時觸發                                 | `topic, message, opts`   | 無   |
| `onPacketReceive` | 當客戶端收到包時觸發                                       | `packet`                 | 無   |

---

### 腳本支持的用戶圖表操作事件監聽 :id=2

![腳本支持的用戶圖表操作事件監聽](_media/script/1.jpg ':size=600')

| 事件                | 描述                                     | 參數 | 備註 |
| ------------------- | ---------------------------------------- | ---- | ---- |
| `onModuleUserReset` | 當用戶點擊圖表菜單中的重置圖表菜單時觸發 | 無   | 無   |
| `onModuleUserClear` | 當用戶點擊圖表菜單中的清空圖表菜單時觸發 | 無   | 無   |

---

### 腳本更新圖表數據的方式 :id=3

通過調用`ChartHelper.updateChartViewData()`來更新圖表,可以進行數據的單次單數據更新,參數為 `ChartViewUpdateData` 類型,也可進行單次多數據更新,參數為`ChartViewUpdateData`組成的數組`[ChartViewUpdateData,ChartViewUpdateData]`,數據更新將會按照數組的順序更新

`ChartHelper.updateChartViewData()`只有一個參數`chartViewUpdateData`,參數的定義如下

```typescript
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

!>targetPath 用來標記操作的目標位置,是數組格式,每一個元素代表對應層級的鍵,為空數組`[]`則代表配置的根節點

**示例**

```javascript
var option = {
  // 根節點對應的targetPath=[]
  xAxis: {
    // 本節點對應的targetPath=['xAxis']
    type: 'category',
    // 本節點對應的targetPath=['xAxis','type']
    data: [
      // 本節點對應的targetPath=['xAxis','data']
      'Device-1',
      // 本節點對應的targetPath=['xAxis','data',0]
      'Device-2',
      // 本節點對應的targetPath=['xAxis','data',1]
      'Device-3',
      'Device-4',
      'Device-5',
      'Device-6',
      'Device-7',
    ],
  },
  yAxis: {
    // 本節點對應的targetPath=['yAxis']
    type: 'value',
    // 本節點對應的targetPath=['yAxis','type']
  },
  series: [
    // 本節點對應的targetPath=['series']
    {
      // 本節點對應的targetPath=['series', 0]
      data: [
        // 本節點對應的targetPath=['series', 0,'data']
        120,
        // 本節點對應的targetPath=['series', 0,'data',0]
        200,
        // 本節點對應的targetPath=['series', 0,'data',1]
        150, 80, 70, 110, 120,
      ],
      type: 'bar',
      // 本節點對應的targetPath=['series', 0,'type']
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

### 使用參考代碼 :id=5

> 更多使用示例,請參考[圖表>示例](zh-cn/chart/demo)

**1.單次更新單個目標數據**

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
<!-- tab:腳本 -->

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
}
```

<!-- tabs:end -->

---

**1.單次更新多個目標數據**

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

<!-- tab:腳本 -->

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