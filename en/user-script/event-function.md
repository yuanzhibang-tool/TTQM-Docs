### Client event supported by user scripts :id=1

| Event             | Description                                                              | Parameters               | Note |
| ----------------- | ------------------------------------------------------------------------ | ------------------------ | ---- |
| `onConnect`       | Emited when the client connected                                         | `connack`                | None |
| `onMessage`       | Emited when the client receives a message                                | `topic, payload, packet` | None |
| `onReconnect`     | Emited when the client reconnect                                         | None                     | None |
| `onDisconnect`    | Emitted after receiving disconnect packet from broker. MQTT 5.0 feature. | `packet`                 | None |
| `onClose`         | Emited when the client is closed                                         | None                     | None |
| `onEnd`           | Emited when the client is closed                                         | None                     | None |
| `onError`         | Emited when the client encounters an error                               | `error`                  | None |
| `onPacketSend`    | Emited when the client finishes sending a packet                         | `packet`                 | None |
| `onPublish`       | Emited when the client successfully sends a message                      | `topic, message, opts`   | None |
| `onPacketReceive` | Emited when the client receives a packet                                 | `packet`                 | None |

---

---

### Script event supported by User Script :id=2

| Event        | Description                     | Parameters | Note                                                     |
| ------------ | ------------------------------- | ---------- | -------------------------------------------------------- |
| `onWillExit` | Triggered when the script exits | None       | The script has 2 seconds to process data, such as saving |

---

### Built-in functions supported by User Script :id=3

| Function  | Description                           | Parameters             | Note |
| --------- | ------------------------------------- | ---------------------- | ---- |
| `publish` | Publish message                       | `topic, message, opts` | None |
| `exit`    | Manually exit the current user script | None                   | None |

---
