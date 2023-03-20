### 消息回放

> 消息回放是指将客户端接受到的消息进行重新发送,支持对收到的消息通过脚本进行过滤,更新消息内容,切换不同的回放模式,不同的回放倍速.

!>删除客户端或者清理消息,将会使记录的消息回放消息被清理,请谨慎.

1.点击开始记录消息

2.停止消息记录,输入相关的信息以进行保存

3.相关记录将会保存在列表中

4.点击详情即可打开回放窗口

5.停止和开始

6.拖放进度(仅支持在停止时进行进度调整)

7.切换倍速和回放模式(仅支持专业版)

8.过滤消息

> 通过使用脚本,可对需要回放的消息进行过滤,移除掉不需要回放的消息,支持通过`topic`以及消息内容进行过滤

9.处理消息

> 通过使用脚本,可以对回放的消息进行消息处理,更改`topic`以及`消息体内容`,来实现消息的灵活性,例如对消息体中的时间的处理来调整测试消息时间的实时性

10.回放脚本描述

!>请勿在脚本的域中使用 `setTimeout` 以及 `setInterval` 等函数,避免更新脚本后,无法暂停该操作,如果您使用了并且影响到您的操作,请关闭窗口后重新打开回放窗口.

_脚本样例_

```javascript
const { TimeUtil } = require('@ttqm/ttqm-support');
let filterAndProcessor = {
  filter: (messageItem) => {
    const topic = messageItem.topic;
    const type = messageItem.type;
    if (type === 'received') {
      return true;
    }
    return false;
  },
  processor: (messageItem) => {
    const messageAllInfo = messageItem.all_info;
    const messageString = Buffer.from(messageAllInfo.payload).toString();
    const messageInfo = JSON.parse(messageString);
    messageInfo.time = TimeUtil.getCurrentUnixSecond();
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

| 键          | 说明   | 备注                                                                                                     |
| ----------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `filter`    | 过滤器 | 用来初始化过滤该记录中的数据,只有该过滤后的消息会被回放,每次更新脚本后,都会重新过滤生成新的回放消息数据  |
| `processor` | 处理器 | 用来处理即将发送的消息,您可以对该消息进行处理如添加时间戳或者标记测试消息,返回空即可在播放时过滤掉该消息 |

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
