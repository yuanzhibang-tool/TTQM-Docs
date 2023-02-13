```javascript
const { TcpClient, TopicUtil, ByteUtil } = require('@ttqm/ttqm-support');

let isReady = false;

const clinet = new TcpClient('0.0.0.0', 7777, {
  onConnect: () => {
    console.log('onOpen');
  },
  onError: (error) => {
    console.log('onError', error);
  },
  onData: (data) => {
    console.log('onData', data);
  },
  onClose: (hadError) => {
    console.log('onClose', hadError);
  },
  onReady: () => {
    isReady = true;
    console.log('onReady');
  },
});

clinet.connect();

module.exports = {
  onMessage: (topic, payload, packet) => {
    const isSubTopic = TopicUtil.isSubTopic(
      'device/123/type/event/event/online',
      topic
    );
    console.log(isSubTopic);
    if (isSubTopic && isReady) {
      // the payload is byte array, covert to string by ByteUtil, more about ByteUtil please visit: https://doc.ttqm.app/#/en/question/built-in-module?id=_6
      // 传输过来的payload为字节数组,使用ByteUtil转换为string,更多关于ByteUtil,请访问: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
      // 傳輸過來的payload為字節數組,使用ByteUtil轉換為string,更多關於ByteUtil,請訪問: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
      console.log(ByteUtil.byteArrayToString(payload));
      clinet.send(payload);
    }
  },
  onWillExit: () => {
    // publish exit topic message before exit
    // 在退出前发送退出消息
    // 在退出前發送退出消息
    publish('exit', '{"event":"exit"}', { qos: 2 });
    console.log('on will exit');
  },
};
```
