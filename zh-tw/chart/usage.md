> 圖表分為兩個部分,一個部分是配置,另外一部分是圖表腳本,配置用來配置圖表的初始化配置,腳本用來更新圖表,實現圖表數據聯動

![配置和腳本](_media/usage/1.jpg ':size=600')

---

### 1.創建或者打開已創建的圖表 :id=1

**點擊圖表按鈕**

![圖表1](_media/usage/2.jpg ':size=400')

**打開**

![圖表1](_media/usage/3.jpg ':size=300')

---

### 2.圖表配置 :id=2

> 圖表配置用來初始化圖表的配置,可以通過內置函數`setOption`,導出配置`object`也可以導出一個`Promise`,在`resolve`中返回圖表配置,更多配置相關的使用,請參考[圖表>配置](zh-cn/chart/option)

!>注意:圖表配置必須在 10s 內返回配置,否則將會被強制終止.

<!-- tabs:start -->
<!-- tab:使用內置函數 -->

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

<!-- tab:異步返回 -->

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

<!-- tab:初始化圖表 -->

![Chart Option](_media/usage/4.jpg ':size=500')

<!-- tabs:end -->

!>更多圖表配置,請參照[Chart Demo](https://echarts.apache.org/examples/zh/index.html#chart-type-line),TTQM 圖表兼容[Apache Echart](https://echarts.apache.org/zh/index.html)數百種配置類型

![EChart Demo](_media/usage/5.jpg ':size=500')

---

### 3.圖表腳本 :id=3

> 用來響應`mqtt`客戶端,以及圖表事件來返回圖表數據更新的內容,來實現圖表和數據聯動

!>腳本不會自動退出,即使沒有操作也會一直執行

```javascript
setInterval(() => {
  // 可通過過濾topic，實現對應chart數據更新
  const randomRange = (min, max) => {
    // min最小值，max最大值
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(randomRange(100, 500));
  }
  // 修改多項使用 [{...}, {...}, {...}] 格式
  const returnData = {
    targetPath: ['series', 0, 'data'],
    action: 'replace',
    data: data,
    version: 1,
  };
  // 通過內置函數updateChartViewData更新圖表數據
  updateChartViewData(returnData);
  console.log('script debug info!');
}, 1000);

module.exports = {
  onMessage: (topic, payload, packet) => {
    // 可通過過濾topic，實現對應chart數據更新
    const randomRange = (min, max) => {
      // min最小值，max最大值
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(randomRange(100, 500));
    }
    // 修改多項使用 [{...}, {...}, {...}] 格式
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

### 4.運行圖表腳本 :id=4

![運行圖表腳本](_media/usage/6.jpg ':size=600')

---

### 5.最小化,最大化,和關閉 :id=5

!>最大化,將會隱藏 左側的配置,JavaScript 和控制台

!>最小化,圖表將會隱藏

!>點擊關閉,將會關閉圖表,停止更新和對應腳本

![最小化,最大化,和關閉](_media/usage/7.jpg ':size=600')

!>您可以在圖表列表裡點擊對應的動態圖標來恢復最小化的圖表

![最小化,最大化,和關閉](_media/usage/8.jpg ':size=600')
