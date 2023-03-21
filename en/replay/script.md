> Replay scripts are used to filter messages and process messages before replay.

_DEMO_

[ReplayScriptDemo](../../common/replay/demo-script.md ':include')

---

_Description_

| Key         | Description       | Return Value                                                            | Note                                                                                                                                                                                                |
| ----------- | ----------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filter`    | Messages Filter   | Return `true` to keep the message, return `false` to remove the message | used to filter the messages in the record, every time the script is updated, it will be re-filtered to generate a new replay message list                                                           |
| `processor` | Message Processor | The return value definition below                                       | Used to process the message, you can process the message such as adding a timestamp or marking the test message, returning empty(`null` or no `undefined`) to prevent the publishing of the message |

`filter` and `processor` must be type `function` , the two functions have one paramater and the paramater is the message item in the db, a little diff between messages published and messages received:

<!-- tabs:start -->
<!-- tab:Message Received -->

```javascript
{
    id: 6,
    guid: "c5ea78bb-1a39-4fe7-a72d-8cbe3b41a0d7",
    topic: "device/123/type/event/event/online",  // the topic
    type: "received",  // message type, received or published
    display_message: "abcd",  // utf-8 formatted message
    all_info: { // all info
        topic: "device/123/type/event/event/online",  // the topic
        payload: [  // message bytes
            123,
            10,
            32,
            32
            ]
        packet: {   //message packet
            cmd: "publish",
            retain: false,
            qos: 0,
            dup: false,
            length: 4, // message length, in bytes
            topic: "device/123/type/event/event/online",
            payload: [ // message bytes
                123,
                10,
                32,
                32
            ],
        },
    },
    message_time: 1679131193457, // The time when the client receives the message, in milliseconds
    source: "server",  // The marked message is from the server, and the received message is always `server`
    extra: {},  // Extra information, currently always {}
    add_time: 1679131193,
    update_time: 1679131193,
};
```

<!-- tab:Message Published -->

```javascript
{
    id: 5,
    guid: "ad42e3dc-69ba-4075-8412-f582249289b3",
    topic: "device/123/type/event/event/online",  // the topic
    type: "published", // // message type, received or published
    display_message: "{a:1}",
    all_info: {
        topic: "device/123/type/event/event/online",  // the topic
        payload: [ 123, 97, 58, 49, 125 ], // message bytes
        opts: {
            qos: 0,
            retain: false,
            payload: [ 123, 97, 58, 49, 125 ], // message bytes
            __payload_type: "json", // Private property, no need to pay attention
            __display_message: "e2E6MX0=",  // Private property, no need to pay attention
            __guid: "ad42e3dc-69ba-4075-8412-f582249289b3",  // Private property, no need to pay attention
            __disable_pre_publish_script: true,  // Private property, no need to pay attention
        },
    },
    message_time: 1679131193263, // The time when the client receives the message, in milliseconds
    source: "manual",  // The source of the message, `script` means the message published via script, and `manual` means the message published by user manually
    extra: {},  // Extra information, currently always {}
    add_time: 1679131193,
    update_time: 1679131193,
}
```

<!-- tabs:end -->

_`processor` return value definition_

```javascript
{
  topic: "device/123/type/event/event/online", // the topic
  message: "{a:1}", // Message body, when it is a string, it can be processed by the Pre-Publish Script, if it is a byte array [ 123, 97, 58, 49, 125 ], it will not be processed by the the Pre-Publish Script
  opts: { // Options of the message
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
},
  disablePrePublishScript: true // Optional, if it is true, it explicitly declares that no processing via Pre-Publish Script
}
```
