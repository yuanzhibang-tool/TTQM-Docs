> User scripts are used to implement related services by responding to `MQTT` messages of the current client and client events

!>The operation of the user script is independent of the client, the script can be started before the client connects, and can run in resident memory

### Client event monitoring supported by user scripts :id=1

| Event             | Description                                        | Parameters               | Remarks |
| ----------------- | -------------------------------------------------- | ------------------------ | ------- |
| `onConnect`       | Fired when a client connects                       | `connack`                | None    |
| `onMessage`       | Fired when the client receives a message           | `topic, payload, packet` | None    |
| `onReconnect`     | Triggered when the client reconnects               | None                     | None    |
| `onDisconnect`    | Fired when a client disconnects                    | `packet`                 | None    |
| `onClose`         | Fired when the client is closed                    | None                     | None    |
| `onEnd`           | Fired when the client is terminated                | None                     | None    |
| `onError`         | Fired when the client encounters an error          | `error`                  | None    |
| `onPacketSend`    | Fired when the client finishes sending a packet    | `packet`                 | None    |
| `onPublish`       | Fired when the client successfully sends a message | `topic, message, opts`   | None    |
| `onPacketReceive` | Fired when the client receives a packet            | `packet`                 | None    |

---

### Script event monitoring supported by user scripts :id=2

| Event        | Description                     | Parameters | Remarks                                                  |
| ------------ | ------------------------------- | ---------- | -------------------------------------------------------- |
| `onWillExit` | Triggered when the script exits | None       | The script has 2 seconds to process data, such as saving |

---

### Built-in functions supported by user scripts :id=3

| Function  | Description                           | Parameters             | Remarks |
| --------- | ------------------------------------- | ---------------------- | ------- |
| `publish` | send message                          | `topic, message, opts` | None    |
| `exit`    | Manually exit the current user script | None                   | None    |

---
