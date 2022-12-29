> 本部分用来示例用户脚本的使用

### 1.监听客户端连接事件,并发布在线消息 :id=1

!>具体的监听事件描述,请参考[用户脚本>脚本事件以及内置函数](en/user-script/event-function)

```javascript
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // 发布在线主题消息
    publish('device/123/type/event/event/online', '{}');
  },
  onMessage: (topic, payload, packet) => {
    // 打印topic
    console.log(`recieved topic:${topic}`);
  },
  onWillExit: () => {
    // 脚本退出前执行,有1秒的时间可以操作,例如保存数据
    console.log('onWillExit');
  },
};
```

---

### 2.过滤 `topic` 信息 :id=2

!>具体的监听事件描述,请参考[用户脚本>脚本事件以及内置函数](en/user-script/event-function)

```javascript
const { TopicUtil } = require('@ttqm/ttqm-support');
module.exports = {
  onMessage: (topic, payload, packet) => {
    // 过滤topic
    if (TopicUtil.isSubTopic('version/1/device_type/2/devic_id/+', topic)) {
      // do something!!!
      const topicMap = TopicUtil.parseKeyValueTopic(topic);
      console.log(`filter topic:${topic}`);
      console.log(`device id:${topicMap.devic_id}`);
    }
  },
  onWillExit: () => {
    // 脚本退出前执行,有1秒的时间可以操作,例如保存数据
    console.log('onWillExit');
  },
};
```

---

### 3.记录数据并写入文件 :id=3

!> 只能将数据写入到脚本数据文件夹以及脚本临时数据文件夹

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const messageCountMap = {};
module.exports = {
  onMessage: (topic, payload, packet) => {
    if (!messageCountMap[topic]) {
      messageCountMap[topic] = 0;
    }
    messageCountMap[topic] = messageCountMap[topic] + 1;
    console.log(messageCountMap[topic]);
  },
  onWillExit: () => {
    // 保存数据
    const saveData = JSON.stringify(messageCountMap);
    const filePath = FileUtil.getScriptDataPath('messageCountMap.json');
    FileUtil.createStringFileSync(filePath, saveData);
    console.log('onWillExit');
  },
};
```

---

### 4.手动退出脚本 :id=4

!>手动退出脚本不会触发`onWillExit`事件

```javascript
const { FileUtil } = require('@ttqm/ttqm-support');
const messageCountMap = {};
module.exports = {
  onMessage: (topic, payload, packet) => {
    exit();
  },
  onWillExit: () => {
    // onWillExit will not emit if use exit() function
    const saveData = JSON.stringify(messageCountMap);
    const filePath = FileUtil.getScriptDataPath('messageCountMap.json');
    FileUtil.createStringFileSync(filePath, saveData);
    console.log('onWillExit');
  },
};
```

---

!>更多脚本示例,请参照[通用脚本示例](en/other/common-script-demo.md)
