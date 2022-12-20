> 用户脚本可以通过监听客户端事件,发送消息,来实现更加复杂的功能,例如:调试设备间的协议,模拟 `IOT` 设备,模拟服务端程序,批量消息发送,消息投递,永久化等.

![用户脚本1](_media/usage/1.jpg ':size=600')

---

### 1.创建或者打开已创建的用户脚本

**点击用户脚本按钮**

![用户脚本2](_media/usage/2.jpg ':size=400')

**打开**

![用户脚本3](_media/usage/3.jpg ':size=300')

---

### 2.脚本

> 用来响应`mqtt`客户端以及脚本事件来进行对应操作

!>脚本不会自动退出,即使没有操作也会一直执行,所以可以作为常驻内存应用,支持同时运行多个用户脚本,例如,一个用来永久化消息投递,一个用于模拟`iot`设备,一个用于模拟服务器端程序,

```javascript
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
  const returnData = {
    targetPath: ['series', 0, 'data'],
    action: 'replace',
    data: data,
    version: 1,
  };
  // 通过内置函数updateChartViewData更新图表数据
  updateChartViewData(returnData);
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

### 4.运行图表脚本

![运行图表脚本](../_media/chart-view-usage-2.jpg ':size=600')

---

### 5.最小化,最大化,和关闭

!>最大化,将会隐藏 左侧的配置,JavaScript 和控制台

!>最小化,图表将会隐藏

!>点击关闭,将会关闭图表,停止更新和对应脚本

![最小化,最大化,和关闭](../_media/chart-view-usage-3.jpg ':size=600')

!>您可以在图表列表里点击对应的动态图标来恢复最小化的图表

![最小化,最大化,和关闭](../_media/chart-view-usage-4.jpg ':size=600')
