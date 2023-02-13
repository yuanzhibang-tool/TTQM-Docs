```javascript
const { TcpServer, ByteUtil } = require('@ttqm/ttqm-support');
// start local TCP server
// 启动本地TCP服务器
// 啟動本地TCP服務器

const server = new TcpServer(7777, {
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
  onSocketData: (socketInfo, data) => {
    // the data is byte array, covert to string by ByteUtil, more about ByteUtil please visit: https://doc.ttqm.app/#/en/question/built-in-module?id=_6
    // 传输过来的data为字节数组,使用ByteUtil转换为string,更多关于ByteUtil,请访问: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
    // 傳輸過來的data為字節數組,使用ByteUtil轉換為string,更多關於ByteUtil,請訪問: https://doc.ttqm.app/#/zh-cn/question/built-in-module?id=_6
    const stringData = ByteUtil.byteArrayToString(data);
    console.log(stringData);
    // console.log('onSocketMessage', socketInfo, data);
  },
  onSocketClose: (socketInfo, hadError) => {
    console.log('onSocketClose', socketInfo, hadError);
  },
});

server.start();
```
