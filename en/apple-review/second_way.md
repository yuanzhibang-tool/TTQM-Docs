## Demo for usage:

[MQTT](https://mqtt.org/) description:
> MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT). It is designed as an extremely lightweight publish/subscribe messaging transport that is ideal for connecting remote devices with a small code footprint and minimal network bandwidth. MQTT today is used in a wide variety of industries, such as automotive, manufacturing, telecommunications, oil and gas, etc.

> [MQTT Offical Website](https://mqtt.org/)

---
### Add a new demo server for feature demos. :id=1

---


**1. Add a client of demo [MQTT](https://mqtt.org/) server.**

!> You only need to input the host and the name for a new client, blow is the demo MQTT Server host.

```text
demo.ttqm.app
```

> The client config like this:

![18](_media/second_way/18.jpg ':size=600')

---


**2. Connect the Server**

![19](_media/second_way/19.jpg ':size=600')

---


**3.Subscribe the topics**

```text
device/123/type/event/event/online
```

![20](_media/second_way/20.jpg ':size=600')

**4.Add demo `Chart`**

![8](_media/second_way/8.jpg ':size=600')
---
![21](_media/second_way/21.jpg ':size=600')
---

![22](_media/second_way/22.jpg ':size=600')

---


**4.Replace option and script, then save it and run.**

!> You need to save it after replacing.
<!-- tabs:start -->
<!-- tab:JavaScript -->
```javascript
module.exports = {
    onMessage: (topic, payload, packet) => {
        if (topic !== 'device/123/type/event/event/online') {
            // return;
        }
        console.log(topic);
        // use random data to update the chart
        const randomRange = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        const data1 = [];
        const data2 = [];
        const data3 = [];
        const data4 = [];
        const data5 = [];
        for (let i = 0; i < 7; i++) {
            data1.push(randomRange(10, 1000))
            data2.push(randomRange(10, 1000))
            data3.push(randomRange(10, 1000))
            data4.push(randomRange(10, 1000))
            data5.push(randomRange(10, 1000))
        }
        // update multi item at once pass [{...}, {...}, {...}]
        const updateItem1 = {
            targetPath: ["series", 0, "data"],
            action: "replace",
            data: data1,
        };
        const updateItem2 = {
            targetPath: ["series", 1, "data"],
            action: "replace",
            data: data2,
        };
        const updateItem3 = {
            targetPath: ["series", 2, "data"],
            action: "replace",
            data: data3,
        };
        const updateItem4 = {
            targetPath: ["series", 3, "data"],
            action: "replace",
            data: data4,
        };
        const updateItem5 = {
            targetPath: ["series", 4, "data"],
            action: "replace",
            data: data5,
        };
        const updateData = [updateItem1, updateItem2, updateItem3, updateItem4, updateItem5];
        updateChartViewData(updateData)
    },
    onPublish: (topic, payload) => { }
};
```

<!-- tab:Option -->
```javascript
const echarts = require('echarts');
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
// Set via the built-in function setOption
setOption(option);

```
<!-- tab:Demo Chart -->
!> The Chart will update when you click the `publish message` button.

![23](_media/second_way/23.jpg ':size=600')

![12](_media/second_way/12.jpg ':size=600')
<!-- tabs:end -->

---


**5.Add demo `User Script`**

![24](_media/second_way/24.jpg ':size=600')

![25](_media/second_way/25.jpg ':size=600')

---


**6.Replace script, then save it and run.**

!> You need to save it after replacing.

![27](_media/second_way/27.jpg ':size=600')

```javascript
setInterval(
    () => {
        publish('device/123/type/event/event/online', "{\"message:\":\"Hello, TTQM!\"}")
    },
    500
);

module.exports = {
    onMessage: (topic, payload, packet) => {
        // console.log(topic);
    },
    onWillExit: () => {
        // !do something before exit
        console.log('on will exit');
    }
}
```

!>The script will publish a message every half second.

![26](_media/second_way/26.jpg ':size=600')

---

**7 Test `Pre-Publish Script`**

<!-- tabs:start -->

<!-- tab:1: Turn on -->
![4](_media/second_way/4.jpg ':size=600')

---

![5](_media/second_way/5.jpg ':size=600')
<!-- tab:2: Send template message -->

!> Fill the string below to message box.

**Message**
```javascript
{
  "time": "{{$unixSecond|string}}",
  "guid": "{{$uuid}}",
  "test_message": "Hello, TTQM!",
  "custom_variable": "{{$user_variable1}}"
}
```
**Topic**
```text
device/123/type/event/event/online
```

![6](_media/second_way/6.jpg ':size=600')

<!-- tab:3: The message sent -->
![7](_media/second_way/7.jpg ':size=600')

<!-- tabs:end -->
---