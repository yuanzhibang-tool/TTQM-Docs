### 消息回放 :id=1

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

Demo

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
