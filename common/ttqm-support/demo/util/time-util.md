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

  // get current unix millisecond
  // 获取当前时间戳unix毫秒
  // 獲取當前時間戳unix毫秒
  const currentMillisecond = TimeUtil.getCurrentUnixMillisecond();
  console.log(currentMillisecond);
  // 1677009254176

  // get current unix second
  // 获取当前时间戳unix秒
  // 獲取當前時間戳unix秒
  const currentSecond = TimeUtil.getCurrentUnixSecond();
  console.log(currentSecond);
  // 1677009280

  // get unix second from format date
  // 从格式化时间获取对应时间戳unix秒
  // 從格式化時間獲取對應時間戳unix秒
  const formatDate = '2023-01-01 12:34:56';
  const formatDateUnixSecond = TimeUtil.getUnixSecondFromFormatDate(formatDate);
  console.log(formatDateUnixSecond);
  // 1672547696

  // get format date from given unix millisecond
  // 从给定的时间戳unix毫秒获取格式化时间
  // 從給定的時間戳unix毫秒獲取格式化時間
  const currentFormatDateFromMillisecond =
    TimeUtil.getFormatDateFromUnixMillisecond(
      'YYYY-MM-DD HH:mm:ss',
      currentMillisecond
    );
  console.log(currentFormatDateFromMillisecond);
  // 2023-02-22 04:00:47

  // get format date from given unix second
  // 从给定的时间戳unix秒获取格式化时间
  // 從給定的時間戳unix秒獲取格式化時間
  const currentFormatDateFromSecond = TimeUtil.getFormatDateFromUnixSecond(
    'YYYY-MM-DD HH:mm',
    currentSecond
  );
  console.log(currentFormatDateFromSecond);
  // 2023-02-22 04:00

  // get current format date
  // 获取当前格式化时间
  // 獲取當前格式化時間
  let currentFormatDate = TimeUtil.getFormatDateFromUnixMillisecond(
    'YYYY-MM-DD HH:mm:ss'
  );
  console.log(currentFormatDate);
  // 2023-02-22 04:00:47

  // get current format date
  // 获取当前格式化时间
  // 獲取當前格式化時間
  currentFormatDate = TimeUtil.getFormatDateFromUnixSecond('YYYY-MM-DD HH:mm');
  console.log(currentFormatDateFromSecond);
  // 2023-02-22 04:00

  // stop script process manually
  // 手动停止脚本运行
  // 手動停止腳本運行
  CommonHelper.exit();
};

main();
```
