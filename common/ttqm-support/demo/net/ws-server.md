```javascript
const { WsServer, ByteUtil, UserScriptHelper } = require('@ttqm/ttqm-support');

const server = new WsServer(7777, {
  onConnection: (socketInfo) => {
    console.log('onConnection', socketInfo);
  },
  onError: (error) => {
    console.log('onError', error);
  },
  onClose: () => {
    console.log('onClose');
  },
  onListening: () => {
    console.log('onListening');
  },
  onSocketError: (socketInfo, error) => {
    console.log('onSocketError', socketInfo, error);
  },
  onSocketMessage: (socketInfo, data) => {
    console.log('onSocketMessage', socketInfo, data);
    // the data is byte array, covert to string by ByteUtil, more about ByteUtil please visit: https://doc.ttqm.app/#/en/question/built-in-module?id=_6
    // 传输过来的data为字节数组,使用ByteUtil转换为string,更多关于ByteUtil,请访问: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
    // 傳輸過來的data為字節數組,使用ByteUtil轉換為string,更多關於ByteUtil,請訪問: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
    const dataString = ByteUtil.byteArrayToString(data);
    server.send(dataString, socketInfo.id);
    UserScriptHelper.publish('test_topic', dataString);
  },
  onSocketClose: (socketInfo, code, reason) => {
    console.log('onSocketClose', socketInfo, code, reason);
  },
});

server.start();

module.exports = {
  onWillExit: () => {
    // you have 1s to do something before exiting, like saving data.
    // 脚本退出前执行,有1秒的时间可以操作,例如保存数据
    // 腳本退出前執行,有1秒的時間可以操作,例如保存數據
    console.log('on will exit');
  },
};
```
