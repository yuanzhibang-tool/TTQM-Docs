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
    let publishMessage;
    try {
      // Parse the json message string and add __add_by_replay_script_processor at the root node, then add time(current unix time) and __test (mark that this message is for testing) to property __add_by_replay_script_processor.
      // 解析json消息并在根节点添加__add_by_replay_script_processor属性,并在其中添加time(当前unix时间)和__test(标记本消息是用来测试的)
      // 解析json消息並在根節點添加__add_by_replay_script_processor屬性,並在其中添加time(當前unix時間)和__test(標記本消息是用來測試的)
      const messageString = Buffer.from(messageAllInfo.payload).toString();
      const messageInfo = JSON.parse(messageString);
      messageInfo.__add_by_replay_script_processor = {
        time: TimeUtil.getCurrentUnixSecond(),
        __test: true,
      };
      publishMessage = JSON.stringify(messageInfo);
    } catch (error) {
      // if error throw, return the original message
      // 解析错误,发送原消息
      // 解析錯誤,發送原消息
      publishMessage = messageAllInfo.payload;
    }
    return {
      topic: messageAllInfo.topic,
      message: publishMessage,
      opts: messageAllInfo.packet,
    };
  },
};
module.exports = filterAndProcessor;
```
