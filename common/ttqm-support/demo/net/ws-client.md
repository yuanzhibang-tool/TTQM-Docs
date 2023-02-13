```javascript
const { WsClient, TopicUtil, UserScriptHelper } = require('@ttqm/ttqm-support');

let isReady = false;

const clinet = new WsClient('ws:0.0.0.0:7777', {
  onOpen: () => {
    console.log('onOpen');
    isReady = true;
  },
  onError: (error) => {
    console.log('onError', error);
  },
  onMessage: (data) => {
    console.log('onMessage', data);
  },
  onClose: (code, reason) => {
    console.log('onClose', code, reason);
  },
});
clinet.connect();
module.exports = {
  onMessage: (topic, payload, packet) => {
    const isSubTopic = TopicUtil.isSubTopic('device/+/type/+/event/+', topic);
    console.log(isSubTopic);
    if (isSubTopic && isReady) {
      // the message is byte array, covert to string by ByteUtil, more about ByteUtil please visit: https://doc.ttqm.app/#/en/question/built-in-module?id=_6
      // 传输过来的payload为字节数组,使用ByteUtil转换为string,更多关于ByteUtil,请访问: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
      // 傳輸過來的payload為字節數組,使用ByteUtil轉換為string,更多關於ByteUtil,請訪問: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
      console.log(ByteUtil.byteArrayToString(payload));
      clinet.send(payload);
    }
  },
  onWillExit: () => {
    // publish exit topic message before exit
    UserScriptHelper.publish('exit', '{"event":"exit"}', { qos: 2 });
    // !do something before exit
    console.log('on will exit');
  },
};
```
