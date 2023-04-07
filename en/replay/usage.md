> This section describes how to use the replay feature.

!>Deleting the client or clearing the message history will clear the recorded messages, please be careful.

---

### 1. Click to start record messages :id=1

![1](_media/usage/1.jpg ':size=300')

---

### 2. Stop Recording, and input some information :id=2

![2](_media/usage/2.jpg ':size=600')

---

### 3. The Records will be saved in the list :id=3

![3](_media/usage/3.jpg ':size=600')

---

### 4. Open the Replay window :id=4

![4](_media/usage/4.jpg ':size=600')

---

### 5. Stop and start :id=5

![5](_media/usage/5.jpg ':size=600')

---

### 6. Drag to set progress (only works when stopped) :id=6

![6](_media/usage/6.jpg ':size=600')

---

### 7. Speed up and change the replay mode :id=7

![7](_media/usage/7.jpg ':size=600')
![7](_media/usage/8.jpg ':size=600')

---

### 8. Filter messages :id=8

> You can filter the messages via `filter` in Replay Script

![8](_media/usage/9.jpg ':size=600')

---

### 9. Processing messages before replay :id=9

> Add the current time at the root node of JSON message, or adding test property to mark that this message is for testing and more.

![9](_media/usage/10.jpg ':size=600')

---

!>Do not use functions such as `setTimeout` and `setInterval` in Replay Script, we cannot stop it before updating the Replay Script, it may cause unexpected problems.

---

_DEMO_

[ReplayScriptDemo](../../common/replay/demo-script.md ':include')

!>For more about Replay Script, please refer to [Replay>Script](en/replay/script.md)
