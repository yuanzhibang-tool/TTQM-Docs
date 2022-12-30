> This section is used to demonstrate the use of user scripts

### 1. Listen to client connection events and publish online messages :id=1

!>For specific monitoring event descriptions, please refer to [User Script>Script Events and Built-in Functions](en/user-script/event-function)

```javascript
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // publish online topic message
    publish('device/123/type/event/event/online', '{}');
  },
  onMessage: (topic, payload, packet) => {
    // print topic
    console.log(`recieved topic:${topic}`);
  },
  onWillExit: () => {
    // Execute before the script exits, there is 1 second to operate, such as saving data
    console.log('onWillExit');
  },
};
```

---

### 2. Filter `topic` information :id=2

!>For specific monitoring event descriptions, please refer to [User Script>Script Events and Built-in Functions](en/user-script/event-function)

```javascript
const { TopicUtil } = require('@ttqm/ttqm-support');
module.exports = {
  onMessage: (topic, payload, packet) => {
    // filter topic
    if (TopicUtil.isSubTopic('version/1/device_type/2/devic_id/+', topic)) {
      //do something!!!
      const topicMap = TopicUtil.parseKeyValueTopic(topic);
      console.log(`filter topic:${topic}`);
      console.log(`device id:${topicMap.devic_id}`);
    }
  },
  onWillExit: () => {
    // Execute before the script exits, there is 1 second to operate, such as saving data
    console.log('onWillExit');
  },
};
```

---

### 3. Record data and write to file :id=3

!> Can only write data to script data folder and script temp data folder

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
    // save data
    const saveData = JSON.stringify(messageCountMap);
    const filePath = FileUtil.getScriptDataPath('messageCountMap.json');
    FileUtil.createStringFileSync(filePath, saveData);
    console.log('onWillExit');
  },
};
```

---

### 4. Exit the script manually :id=4

!> Exiting the script manually does not fire the `onWillExit` event

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

!>For more script demos, please refer to [Other>Common Script Demo](en/other/common-script-demo.md)
