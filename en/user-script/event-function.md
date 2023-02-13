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

### Classes supported by User Script :id=3

| Function  | Description                           | Parameters             | Note                                                                    |
| --------- | ------------------------------------- | ---------------------- | ----------------------------------------------------------------------- |
| `UserScriptHelper.publish()` | Publish message                       | `topic, message, opts` | `topic:string`, `message:string`, `opts` Please refer to the demo below |
| `CommonHelper.exit()`    | Manually exit the current user script | None                   | None                                                                    |

**`UserScriptHelper.publish` `opts` demo**

```javascript
{
  qos: 2, // QoS level, Number, default 0
  dup: false, // mark as duplicate flag, Boolean, default false
  retain: false, // retain flag, Boolean, default false
  properties: { // optional properties MQTT 5.0
      payloadFormatIndicator: true, // Payload is UTF-8 Encoded Character Data or not boolean
      messageExpiryInterval: 4321, // the lifetime of the Application Message in seconds number
      topicAlias: 100, // value that is used to identify the Topic instead of using the Topic Name number
      responseTopic: 'topic', // String which is used as the Topic Name for a response message string
      correlationData: Buffer.from([1, 2, 3, 4]), // used by the sender of the Request Message to identify which request the Response Message is for when it is received binary
      userProperties: { // the User Property is allowed to appear multiple times to represent multiple name, value pairs object
        'test': 'test'
      },
      subscriptionIdentifier: 120, // representing the identifier of the subscription number
      contentType: 'test' // String describing the content of the Application Message string
   }
}
```
