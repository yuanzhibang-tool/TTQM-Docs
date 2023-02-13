> 本部分用來示例用戶腳本的使用

### 1.監聽客戶端連接事件,並發佈在線消息 :id=1

!>具體的監聽事件描述,請參考[用戶腳本>腳本事件以及內置函數](zh-cn/user-script/event-function)

```javascript
const { UserScriptHelper } = require("@ttqm/ttqm-support");
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // 發佈在線主題消息
    UserScriptHelper.publish('device/123/type/event/event/online', '{}');
  },
  onMessage: (topic, payload, packet) => {
    // 打印topic
    console.log(`recieved topic:${topic}`);
  },
  onWillExit: () => {
    // 腳本退出前執行,有1秒的時間可以操作,例如保存數據
    console.log('onWillExit');
  },
};
```

---

### 2.過濾 `topic` 信息 :id=2

!>具體的監聽事件描述,請參考[用戶腳本>腳本事件以及內置函數](zh-cn/user-script/event-function)

```javascript
const { TopicUtil } = require('@ttqm/ttqm-support');
module.exports = {
  onMessage: (topic, payload, packet) => {
    // 過濾topic
    if (TopicUtil.isSubTopic('version/1/device_type/2/devic_id/+', topic)) {
      // do something!!!
      const topicMap = TopicUtil.parseKeyValueTopic(topic);
      console.log(`filter topic:${topic}`);
      console.log(`device id:${topicMap.devic_id}`);
    }
  },
  onWillExit: () => {
    // 腳本退出前執行,有1秒的時間可以操作,例如保存數據
    console.log('onWillExit');
  },
};
```

---

### 3.記錄數據並寫入文件 :id=3

!> 只能將數據寫入到腳本數據文件夾以及腳本臨時數據文件夾

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
    // 保存數據
    const saveData = JSON.stringify(messageCountMap);
    const filePath = FileUtil.getScriptDataPath('messageCountMap.json');
    FileUtil.createStringFileSync(filePath, saveData);
    console.log('onWillExit');
  },
};
```

---

### 4.手動退出腳本 :id=4

!>手動退出腳本不會觸發`onWillExit`事件

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

!>更多腳本示例,請參照[通用腳本示例](zh-cn/other/common-script-demo.md)