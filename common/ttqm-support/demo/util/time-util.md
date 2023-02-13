```javascript
const { TimeUtil, ByteUtil, CommonHelper } = require('@ttqm/ttqm-support');

const main = async () => {
  const topic = 'version/1/type/device_cmd';
  const cmd1 = [1, 2, 3, 4];
  const cmd1String = ByteUtil.byteArrayToString(cmd1, 'hex');
  console.log(cmd1String);
  publish(topic, cmd1String, { qos: 1 });
  console.log('publish cmd1');

  // sleep 1s before next command
  // 等待1s再发送下一条命令
  // 等待1s再發送下一條命令
  await TimeUtil.sleep(1000);
  const cmd2 = [2, 3, 4, 5];
  const cmd2String = ByteUtil.byteArrayToString(cmd2, 'base64');

  console.log(cmd2String);
  publish(topic, cmd2String, { qos: 1 });
  console.log('publish cmd2');

  // stop script process manually
  // 手动停止脚本运行
  // 手動停止腳本運行
  CommonHelper.exit();
};

main();
```
