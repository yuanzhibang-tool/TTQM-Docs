> 脚本用来过滤初始化消息以及在发送前处理消息

_脚本样例_

```javascript
const { TimeUtil } = require('@ttqm/ttqm-support');
let filterAndProcessor = {
  filter: (messageItem) => {
    // get more info about message item define: https://doc.ttqm.app/#/en/replay/script
    // 关于更多messageItem的定义: https://doc.ttqm.app/#/zh-cn/replay/script
    // 關於更多messageItem的定義: https://doc.ttqm.app/#/zh-tw/replay/script
    const topic = messageItem.topic;
    const type = messageItem.type;
    if (type === 'received') {
      // return true to add the message to the replay message list
      // 返回true,将该消息添加到回放的消息列表里
      // 返回true,將該消息添加到回放的消息列表裡
      return true;
    }
    // return false to remove the message from the replay message list
    // 返回false,将该消息从回放的消息列表中移除
    // 返回false,將該消息從回放的消息列表中移除
    return false;
  },
  processor: (messageItem) => {
    // get more info about message item define: https://doc.ttqm.app/#/en/replay/script
    // 关于更多messageItem的定义: https://doc.ttqm.app/#/zh-cn/replay/script
    // 關於更多messageItem的定義: https://doc.ttqm.app/#/zh-tw/replay/script
    const messageAllInfo = messageItem.all_info;
    // Parse the json message and add the current time at the root node, and add the __test property to mark that this message is for testing.
    // 解析json消息并在根节点添加当前时间,以及添加__test参数,来标记本消息是用来测试的
    // 解析json消息並在根節點添加當前時間,以及添加__test參數,來標記本消息是用來測試的
    const messageString = Buffer.from(messageAllInfo.payload).toString();
    const messageInfo = JSON.parse(messageString);
    messageInfo.time = TimeUtil.getCurrentUnixSecond();
    messageInfo.__test = true;
    return {
      topic: messageAllInfo.topic,
      message: JSON.stringify(messageInfo),
      opts: messageAllInfo.packet,
    };
  },
};
module.exports = filterAndProcessor;
```

说明

| 键          | 说明   | 返回值                               | 备注                                                                                                     |
| ----------- | ------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `filter`    | 过滤器 | `true`保留该消息,`false`过滤掉该消息 | 用来初始化过滤该记录中的消息,每次更新脚本后,都会重新过滤生成新的回放消息列表                             |
| `processor` | 处理器 | 参见下方定义                         | 用来处理即将发送的消息,您可以对该消息进行处理如添加时间戳或者标记测试消息,返回空即可在播放时过滤掉该消息 |

`filter`以及`processor`必须是函数类型,该函数的参数根据发送和接收的消息,格式稍有不同:

<!-- tabs:start -->
<!-- tab:接收到的消息 -->

```javascript
{
    id: 6,
    guid: "c5ea78bb-1a39-4fe7-a72d-8cbe3b41a0d7",
    topic: "device/123/type/event/event/online",  // 消息的topic
    type: "received",  // 消息的类型,当前类型为接收到的消息
    display_message: "abcd",  // payload转utf8的消息
    all_info: { // 所有消息信息
        topic: "device/123/type/event/event/online",  // 消息的topic
        payload: [  // 消息体的二进制数组
            123,
            10,
            32,
            32
            ]
        packet: {   //对应消息的包信息
            cmd: "publish",
            retain: false,
            qos: 0,
            dup: false,
            length: 4, // 消息体的长度,单位为字节
            topic: "device/123/type/event/event/online",
            payload: [ // 消息体的二进制数组
                123,
                10,
                32,
                32
            ],
        },
    },
    message_time: 1679131193457, // 客户端接收到消息的时间,单位为毫秒
    source: "server",  // 标记消息来源是服务器,收到的消息恒为server
    extra: {},  //额外信息,目前恒为{}
    add_time: 1679131193,
    update_time: 1679131193,
};
```

<!-- tab:发送的消息 -->

```javascript
{
    id: 5,
    guid: "ad42e3dc-69ba-4075-8412-f582249289b3",
    topic: "device/123/type/event/event/online",  // 消息的topic
    type: "published", // 消息的类型,当前类型为接收到的消息
    display_message: "{a:1}",
    all_info: {
        topic: "device/123/type/event/event/online",  // 消息的topic
        payload: [ 123, 97, 58, 49, 125 ], // 消息体的二进制数组
        opts: {
            qos: 0,
            retain: false,
            payload: [ 123, 97, 58, 49, 125 ], // 消息体的二进制数组
            __payload_type: "json", // 私有属性,无需关注
            __display_message: "e2E6MX0=",  // 私有属性,无需关注
            __guid: "ad42e3dc-69ba-4075-8412-f582249289b3",  // 私有属性,无需关注
            __disable_pre_publish_script: true,  // 私有属性,无需关注
        },
    },
    message_time: 1679131193263, // 客户端发送消息的时间,单位为毫秒
    source: "manual",  //消息的来源,可能值为 script标记消息为脚本发送,manual用户手动发送
    extra: {},  //额外信息,目前恒为{}
    add_time: 1679131193,
    update_time: 1679131193,
}
```

<!-- tabs:end -->

_`processor`的返回值定义_

```javascript
{
  topic: "device/123/type/event/event/online", // 消息的topic
  message: "{a:1}", // 消息体,当是字符串时可被前置脚本处理,如果为字节数组[ 123, 97, 58, 49, 125 ],则不会被前置脚本处理
  opts: { // 发送消息的配置
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
  disablePrePublishScript: true //可选属性, 为true则不进行前置脚本处理
}
```
