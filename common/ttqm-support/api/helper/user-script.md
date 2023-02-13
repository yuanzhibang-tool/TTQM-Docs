```javascript
/**
 * Publish option properties
 */
export interface PublishOptionProperties {
    /**
     * Payload is UTF-8 Encoded Character Data or not boolean
     */
    payloadFormatIndicator?: boolean;
    /**
     * the lifetime of the Application Message in seconds number
     */
    messageExpiryInterval?: number;
    /**
     * value that is used to identify the Topic instead of using the Topic Name number
     */
    topicAlias?: number;
    /**
     * String which is used as the Topic Name for a response message string
     */
    responseTopic?: string;
    /**
     * used by the sender of the Request Message to identify which request the Response Message is for when it is received binary
     */
    correlationData?: Buffer;
    /**
     * the User Property is allowed to appear multiple times to represent multiple name, value pairs object
     */
    userProperties?: object;
    /**
     * representing the identifier of the subscription number
     */
    subscriptionIdentifier?: number;
    /**
     * String describing the content of the Application Message string
     */
    contentType?: string;
}
/**
 * Publish option
 */
export interface PublishOption {
    /**
     * QoS level, Number, default 0
     */
    qos?: 0 | 1 | 2;
    /**
     * mark as duplicate flag, Boolean, default false
     */
    dup?: boolean;
    /**
     * retain flag, Boolean, default false
     */
    retain?: boolean;
    /**
     * optional properties MQTT 5.0
     */
    properties?: PublishOptionProperties;
}
/**
 * User script helper, can be used in User Script, for more please read: https://doc.ttqm.app/#/en/user-script/event-function?id=_3
 */
export declare class UserScriptHelper {
    /**
     * Publish message, for more please read: https://doc.ttqm.app/#/en/user-script/event-function?id=_3
     * @param topic the topic to publish
     * @param message the message to publish
     * @param [opts] the options publish
     */
    static publish(topic: string, message: string, opts?: PublishOption): void;
}

```
