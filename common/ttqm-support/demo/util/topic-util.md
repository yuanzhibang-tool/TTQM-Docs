```javascript
const { TopicUtil } = require('@ttqm/ttqm-support');
// detect subtopic
const subTopic = 'device_type/1/device_id/123456';
const isSubTopic = TopicUtil.isSubTopic('device_type/+/device_id/+', subTopic);
console.log(isSubTopic);
// isSubTopic = true
const subTopic1 = 'device_type/1/device_sn/123456';
const isSubTopic1 = TopicUtil.isSubTopic(
  'device_type/+/device_id/+',
  subTopic1
);
console.log(isSubTopic1);
// isSubTopic1 = false

// parse topic
const subTopicInfo = TopicUtil.parseKeyValueTopic(subTopic);
// subTopicInfo = {
//   device_type: 1,
//   device_id: 123456,
// };

console.log(subTopicInfo);

const deviceType = subTopicInfo.device_type;
const deviceId = subTopicInfo.device_id;
console.log(deviceType);
console.log(deviceId);
// deviceType=1
// deviceId=123456
```
