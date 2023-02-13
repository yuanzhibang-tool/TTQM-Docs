```javascript
const { UserScriptHelper } = require('@ttqm/ttqm-support');

// publish message to topic 'device/123/type/event/event/online'
// 发送消息到 topic 'device/123/type/event/event/online'
// 發送消息到 topic 'device/123/type/event/event/online'
UserScriptHelper.publish('device/123/type/event/event/online', '123456', {
  qos: 0,
});
```
