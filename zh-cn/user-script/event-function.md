> 用户脚本用来通过响应当前客户端的`MQTT`消息以及客户端事件来实现相关业务

!>用户脚本的运作和客户端是独立的,脚本可以在客户端连接之前启动,并可常驻内存运行

### 用户脚本支持的客户端事件监听 :id=1

| 事件              | 描述                                                       | 参数                     | 备注 |
| ----------------- | ---------------------------------------------------------- | ------------------------ | ---- |
| `onConnect`       | 当客户端连接上时触发                                       | `connack`                | 无   |
| `onMessage`       | 当客户端收到消息时触发                                     | `topic, payload, packet` | 无   |
| `onReconnect`     | 当客户端重连时触发                                         | 无                       | 无   |
| `onDisconnect`    | 当接收到 `disconnect packet from broker. MQTT 5.0 feature` | `packet`                 | 无   |
| `onClose`         | 当客户端关闭时触发                                         | 无                       | 无   |
| `onEnd`           | 当客户端被中止时触发                                       | 无                       | 无   |
| `onError`         | 当客户端出现错误时触发                                     | `error`                  | 无   |
| `onPacketSend`    | 当客户端发送包完成时触发                                   | `packet`                 | 无   |
| `onPublish`       | 当客户端发送消息成功时触发                                 | `topic, message, opts`   | 无   |
| `onPacketReceive` | 当客户端收到包时触发                                       | `packet`                 | 无   |

---

### 用户脚本支持的脚本事件监听 :id=2

| 事件         | 描述             | 参数 | 备注                                 |
| ------------ | ---------------- | ---- | ------------------------------------ |
| `onWillExit` | 当脚本退出时触发 | 无   | 脚本有 2 秒钟的时间去处理数据,如保存 |

---

### 用户脚本支持的方法 :id=3

| 函数      | 描述                 | 参数                   | 备注                                                    |
| --------- | -------------------- | ---------------------- | ------------------------------------------------------- |
| `UserScriptHelper.publish()` | 发送消息             | `topic, message, opts` | `topic:string`, `message:string`, `opts` 请参考下方示例 |
| `CommonHelper.exit()`    | 手动退出当前用户脚本 | 无                     | 无                                                      |

**`UserScriptHelper.publish`中`opts`示例**

```javascript
{
  qos: 2, // QoS level, Number, default 0
  dup: false, // mark as duplicate flag, Boolean, default false
  retain: false, // retain flag, Boolean, default false
  properties: { // optional properties MQTT 5.0
      payloadFormatIndicator: true, // Payload is UTF-8 Encoded Character Data or not boolean
      messageExpiryInterval: 4321, // the lifetime of the Application Message in seconds number
      topicAlias: 100, // value that is used to identify the Topic instead of using the Topic Name number
      responseTopic: 'topic', // String which is used as the Topic Name for a response message string
      correlationData: Buffer.from([1, 2, 3, 4]), // used by the sender of the Request Message to identify which request the Response Message is for when it is received binary
      userProperties: { // the User Property is allowed to appear multiple times to represent multiple name, value pairs object
        'test': 'test'
      },
      subscriptionIdentifier: 120, // representing the identifier of the subscription number
      contentType: 'test' // String describing the content of the Application Message string
   }
}
```
