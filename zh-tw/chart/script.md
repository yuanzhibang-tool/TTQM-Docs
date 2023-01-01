> 腳本用來通過對當前客戶端的`MQTT`消息以及客戶端事件進行聯動,來實現對圖表的更新,例如,統計不同`TOPIC`類型消息的數量,佔比.對收到的心電數據處理後,進行繪圖,來調試數據是否正確顯示

!>腳本的運作和客戶端是獨立的,腳本可以在客戶端連接之前啟動

### 腳本支持的客戶端事件監聽 :id=1

| 事件              | 描述                                                          | 參數                     | 備註 |
| ----------------- | ------------------------------------------------------------- | ------------------------ | ---- |
| `onConnect`       | 當客戶端連接上時觸發                                          | `connack`                | 無   |
| `onMessage`       | 當客戶端收到消息時觸發                                        | `topic, payload, packet` | 無   |
| `onReconnect`     | 當客戶端重連時觸發                                            | 無                       | 無   |
| `onDisconnect`    | 當客戶端收到`disconnect packet from broker. MQTT 5.0 feature` | `packet`                 | 無   |
| `onClose`         | 當客戶端關閉時觸發                                            | 無                       | 無   |
| `onEnd`           | 當客戶端被中止時觸發                                          | 無                       | 無   |
| `onError`         | 當客戶端出現錯誤時觸發                                        | `error`                  | 無   |
| `onPacketSend`    | 當客戶端發送包完成時觸發                                      | `packet`                 | 無   |
| `onPublish`       | 當客戶端發送消息成功時觸發                                    | `topic, message, opts`   | 無   |
| `onPacketReceive` | 當客戶端收到包時觸發                                          | `packet`                 | 無   |

---

### 腳本支持的用戶圖表操作事件監聽 :id=2

![腳本支持的用戶圖表操作事件監聽](_media/script/1.jpg ':size=600')

| 事件                | 描述                                     | 參數 | 備註 |
| ------------------- | ---------------------------------------- | ---- | ---- |
| `onModuleUserReset` | 當用戶點擊圖表菜單中的重置圖表菜單時觸發 | 無   | 無   |
| `onModuleUserClear` | 當用戶點擊圖表菜單中的清空圖表菜單時觸發 | 無   | 無   |

---

### 腳本更新圖表數據的方式 :id=3

通過調用內置函數`updateChartViewData`來更新圖表,可以進行數據的單次單數據更新,參數為 `ChartViewModuleUpdateData` 類型,也可進行單次多數據更新,參數為`ChartViewModuleUpdateData`組成的數組`[ChartViewModuleUpdateData,ChartViewModuleUpdateData]`,數據更新將會按照數組的順序更新

`updateChartViewData`函數只有一個參數`chartViewData`,參數的定義如下

```javascript
declare enum ChartViewModuleDataActionType {
    ARRAY_APPEND_START = "array_append_start",  //將傳入的data以元素的形式附加到配置目標位置原數組的頭部,data為對應的需要append的數組
    ARRAY_APPEND_END = "array_append_end", //將傳入的data以元素的形式附加到配置目標位置原數組的尾部,data為對應的需要append的數組
    ARRAY_MERGE_START = "array_merge_start", //將傳入的data(必須是數組)中的所有元素合併到配置目標位置原數組的頭部,data為對應的需要merge的數組
    ARRAY_MERGE_END = "array_merge_end", //將傳入的data(必須是數組)中的所有元素合併到原數組的頭部,data為對應的需要merge的數組
    OBJECT_MERGE = "object_merge",  //將傳入的object和原object進行合併操作,形成一個新的object,data為對應的需要merge的object
    DELETE = "delete", //將配置目標位置的元素清除,無需設置data
    REPLACE = "replace", //將配置目標位置的元素替換為傳入的data,data為需要替換的目標元素
    INCREASE = "increase", //將配置目標位置的元素進行加操作,data為對應需要increase的步長
    DECREASE = "decrease" //將配置目標位置的元素進行減操作,data為對應需要decrease的步長
}

interface ChartViewModuleUpdateData {
  targetPath: Array<any>; //用以標記需要更新的目標位置
  action: ChartViewModuleDataActionType; //用於標記更新的方式
  data?: any; //需要更新的目標數據,特定的更新操作不需要傳入data,如刪除
  version: number; //恆為1
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

> 更多使用示例,請參考[圖表>示例](zh-tw/chart/demo)

**1.單次更新單個目標數據**

<!-- tabs:start -->
<!-- tab:配置 -->

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

<!-- tab:腳本 -->

```javascript
var chartViewData = {
  targetPath: ['series', 'data'],
  action: 'replace',
  data: [1, 2, 3, 4, 5, 6, 7],
};
updateChartViewData(chartViewData);
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

<!-- tab:腳本 -->

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

<!-- tabs:end -->
