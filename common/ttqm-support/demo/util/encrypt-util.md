```javascript
/**
 * Encrypt util, This class is used to get the string hash
 */
export declare class EncryptUtil {
    /**
     * Gets hash of string
     * @param content the string content
     * @param [hashName] a valid hash name, eg. sha1 md5 sha256.
     * @returns the hash in hex
     */
    static getHash(content: string, hashName?: string): string;
}

```
