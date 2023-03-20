> This section describes how to use the replay feature.

!>Deleting the client or clearing the message history will clear the recorded messages, please be careful.

1. Click to start record messages

2. Stop Recording, and input some information

3. The Records will be saved in the list

4. Open the Replay window

5. Stop and start

6. Drag to set progress (only works when stopped)

7. Speed up and change the replay mode

8. Filter messages

> You can filter the messages via `filter` in Replay Script

9. Processing messages before replay

> Add the current time at the root node of JSON message, or adding test property to mark that this message is for testing and more.

!>Do not use functions such as `setTimeout` and `setInterval` in Replay Script, we cannot stop it before updating the Replay Script, it may cause unexpected problems.

_DEMO_

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

!>For more about Replay Script, please refer to [Replay>Script](en/replay/script.md)
