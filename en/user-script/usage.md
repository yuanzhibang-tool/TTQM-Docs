> User scripts can implement more complex functions by listening to client events and publishing messages, such as: debugging communication protocols between devices, simulating `IoT` devices, simulating server programs, batch message publishing, message delivery, persistence, etc.

![UserScript 1](_media/usage/1.jpg ':size=600')

---

### 1. Create or open the created user script :id=1

**Click the user script button**

![UserScript 2](_media/usage/2.jpg ':size=400')

**Open**

![UserScript 3](_media/usage/3.jpg ':size=300')

---

### 2. Script :id=2

> Listen to client and script events to perform corresponding operations.

!> The script will not exit automatically, and will continue even if there is no operation, so it can be used as a resident memory application. You can run multiple user scripts at the same time, for example, one for message delivery, one for simulating `iot` devices ,and the another one for simulating the server-side application,

```javascript
const { UserScriptHelper } = require("@ttqm/ttqm-support");
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // Publish online topic messages via UserScriptHelper.publish
    UserScriptHelper.publish('device/123/type/event/event/online', '{}');
  },
  onMessage: (topic, payload, packet) => {
    // print topic
    console.log(`recieved topic:${topic}`);
  },
  onWillExit: () => {
    // Execute before the script exits, there are 2 seconds to operate, such as saving data
    console.log('onWillExit');
  },
};
```

---

### 3. Run the script :id=3

![Run script](_media/usage/4.jpg ':size=600')

---

### 4. Minimize and Close :id=4

!>Minimize, the script editing window will be hidden, after minimizing, the script will continue running.

!>Click Close to close the script editing window and stop the running script

![Minimize and close](_media/usage/5.jpg ':size=600')

!>You can click the dynamic icon in the script list to restore the minimized script window

![Restore window](_media/usage/6.jpg ':size=600')
