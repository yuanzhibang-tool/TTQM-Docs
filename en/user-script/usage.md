> User scripts can implement more complex functions by listening to client events and sending messages, such as: debugging protocols between devices, simulating `IoT` devices, simulating server programs, batch message sending, message delivery, persistence, etc.

![UserScript 1](_media/usage/1.jpg ':size=600')

---

### 1. Create or open the created user script :id=1

**click the userscript button**

![UserScript 2](_media/usage/2.jpg ':size=400')

**Open**

![UserScript 3](_media/usage/3.jpg ':size=300')

---

### 2. Script :id=2

> Used to respond to `mqtt` client and script events to perform corresponding operations

!> The script will not exit automatically, and will continue to execute even if there is no operation, so it can be used as a resident memory application to support running multiple user scripts at the same time, for example, one for permanent message delivery, and one for simulating `iot` devices , one is used to simulate the server-side program,

```javascript
module.exports = {
  onConnect: () => {
    console.log('iot connected!');
    // Use the built-in function publish to publish online topic messages
    publish('device/123/type/event/event/online', '{}');
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

### 3. Run the chart script :id=3

![Run script](_media/usage/4.jpg ':size=600')

---

### 4. Minimize and close :id=4

!>Minimize, the script editing window will be hidden, after minimizing, the script will continue to run

!>Click Close to close the script editing window and stop script execution

![Minimize and close](_media/usage/5.jpg ':size=600')

!>You can click the corresponding dynamic icon in the script list to restore the minimized script window

![Restore window](_media/usage/6.jpg ':size=600')
