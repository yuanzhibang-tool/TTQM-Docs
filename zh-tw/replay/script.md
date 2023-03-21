> 腳本用來過濾初始化消息以及在發送前處理消息

_腳本樣例_

[ReplayScriptDemo](../../common/replay/demo-script.md ':include')

說明

| 鍵          | 說明   | 返回值                               | 備註                                                                                                     |
| ----------- | ------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `filter`    | 過濾器 | `true`保留該消息,`false`過濾掉該消息 | 用來初始化過濾該記錄中的消息,每次更新腳本後,都會重新過濾生成新的回放消息列表                             |
| `processor` | 處理器 | 參見下方定義                         | 用來處理即將發送的消息,您可以對該消息進行處理如添加時間戳或者標記測試消息,返回空即可在播放時過濾掉該消息 |

`filter`以及`processor`必須是函數類型,該函數的參數根據發送和接收的消息,格式稍有不同:

<!-- tabs:start -->
<!-- tab:接收到的消息 -->

```javascript
{
    id: 6,
    guid: "c5ea78bb-1a39-4fe7-a72d-8cbe3b41a0d7",
    topic: "device/123/type/event/event/online",  // 消息的topic
    type: "received",  // 消息的類型,當前類型為接收到的消息
    display_message: "abcd",  // payload轉utf8的消息
    all_info: { // 所有消息信息
        topic: "device/123/type/event/event/online",  // 消息的topic
        payload: [  // 消息體的二進制數組
            123,
            10,
            32,
            32
            ]
        packet: {   //對應消息的包信息
            cmd: "publish",
            retain: false,
            qos: 0,
            dup: false,
            length: 4, // 消息體的長度,單位為字節
            topic: "device/123/type/event/event/online",
            payload: [ // 消息體的二進制數組
                123,
                10,
                32,
                32
            ],
        },
    },
    message_time: 1679131193457, // 客戶端接收到消息的時間,單位為毫秒
    source: "server",  // 標記消息來源是服務器,收到的消息恆為server
    extra: {},  //額外信息,目前恆為{}
    add_time: 1679131193,
    update_time: 1679131193,
};
```

<!-- tab:發送的消息 -->

```javascript
{
    id: 5,
    guid: "ad42e3dc-69ba-4075-8412-f582249289b3",
    topic: "device/123/type/event/event/online",  // 消息的topic
    type: "published", // 消息的類型,當前類型為接收到的消息
    display_message: "{a:1}",
    all_info: {
        topic: "device/123/type/event/event/online",  // 消息的topic
        payload: [ 123, 97, 58, 49, 125 ], // 消息體的二進制數組
        opts: {
            qos: 0,
            retain: false,
            payload: [ 123, 97, 58, 49, 125 ], // 消息體的二進制數組
            __payload_type: "json", // 私有屬性,無需關注
            __display_message: "e2E6MX0=",  // 私有屬性,無需關注
            __guid: "ad42e3dc-69ba-4075-8412-f582249289b3",  // 私有屬性,無需關注
            __disable_pre_publish_script: true,  // 私有屬性,無需關注
        },
    },
    message_time: 1679131193263, // 客戶端發送消息的時間,單位為毫秒
    source: "manual",  //消息的來源,可能值為 script標記消息為腳本發送,manual用戶手動發送
    extra: {},  //額外信息,目前恆為{}
    add_time: 1679131193,
    update_time: 1679131193,
}
```

<!-- tabs:end -->

_`processor`的返回值定義_

```javascript
{
  topic: "device/123/type/event/event/online", // 消息的topic
  message: "{a:1}", // 消息體,當是字符串時可被前置腳本處理,如果為字節數組[ 123, 97, 58, 49, 125 ],則不會被前置腳本處理
  opts: { // 發送消息的配置
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
},
  disablePrePublishScript: true //可選屬性, 為true則不進行前置腳本處理
}
```
