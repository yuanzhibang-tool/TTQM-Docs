> 本部分用来示例用户脚本的使用

### 1.监听客户端连接事件,并发布在线消息 :id=1

!>具体的监听事件描述,请参考[图表>脚本](zh-cn/user-script/event-function)

```javascript
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // 发布在线主题消息
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
