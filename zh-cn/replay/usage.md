> 本部分将介绍如何使用回放功能

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

!>具体脚本说明,请参见[回放>脚本](zh-cn/replay/script.md)
