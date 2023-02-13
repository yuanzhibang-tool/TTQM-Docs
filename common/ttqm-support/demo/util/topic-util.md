```javascript
/**
 * Topic util, This class is used to handle MQTT topic-related operations
 */
export declare class TopicUtil {
    /**
     * Check if it is a subtopic of the provided topic
     * @param topic the topic
     * @param subTopic the subtopic to check
     * @returns boolean true if it is a subtopic
     */
    static isSubTopic(topic: string, subTopic: string): boolean;
    /**
     * parse topic which is `key1/value1/key2/value2` format to an object like {key1:value1,key2:value2}
     * @param topic the topic to parse
     * @returns an object containing the key and value
     */
    static parseKeyValueTopic(topic: string): object;
}

```
