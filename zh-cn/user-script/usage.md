> 用户脚本可以通过监听客户端事件,发送消息,来实现更加复杂的功能,例如:调试设备间的协议,模拟 `IoT` 设备,模拟服务端程序,批量消息发送,消息投递,永久化等.

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
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // 使用内置函数publish发布在线主题消息
    publish('device/123/type/event/event/online', '{}');
  },
  onMessage: (topic, payload, packet) => {
    // 打印topic
    console.log(`recieved topic:${topic}`);
  },
  onWillExit: () => {
    // 脚本退出前执行,有2秒的时间可以操作,例如保存数据
    console.log('onWillExit');
  },
};
```

---

### 4.运行图表脚本

![运行脚本](_media/usage/4.jpg ':size=600')

---

### 5.最小化,和关闭

!>最小化,脚本编辑窗口将会隐藏,最小化后,脚本将会继续运行

!>点击关闭,将会关闭脚本编辑窗口,并停止脚本执行

![最小化和关闭](_media/usage/5.jpg ':size=600')

!>您可以在脚本列表里点击对应的动态图标来恢复最小化的脚本窗口

![恢复窗口](_media/usage/6.jpg ':size=600')
