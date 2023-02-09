> 用戶腳本用來通過響應當前客戶端的`MQTT`消息以及客戶端事件來實現相關業務

!>用戶腳本的運作和客戶端是獨立的,腳本可以在客戶端連接之前啟動,並可常駐內存運行

### 用戶腳本支持的客戶端事件監聽 :id=1

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

### 用戶腳本支持的腳本事件監聽 :id=2

| 事件         | 描述             | 參數 | 備註                                 |
| ------------ | ---------------- | ---- | ------------------------------------ |
| `onWillExit` | 當腳本退出時觸發 | 無   | 腳本有 2 秒鐘的時間去處理數據,如保存 |

---

### 用戶腳本支持的內置函數 :id=3

| 函數      | 描述                 | 參數                   | 備註                                                    |
| --------- | -------------------- | ---------------------- | ------------------------------------------------------- |
| `publish` | 發送消息             | `topic, message, opts` | `topic:string`, `message:string`, `opts` 請參考下方示例 |
| `exit`    | 手動退出當前用戶腳本 | 無                     | 無                                                      |

**`publish`中`opts`示例**

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
