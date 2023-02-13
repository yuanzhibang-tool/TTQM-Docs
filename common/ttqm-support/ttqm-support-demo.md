<!-- tabs:start -->

<!-- tab:CommonHelper -->

```javascript
/**
 * Common helper, can be used in all scripts.
 */
export declare class CommonHelper {
    /**
     * Exit the process of script
     */
    static exit(): void;
}

```

<!-- tab:ChartHelper -->

```javascript
/**
 * Chart view update data, used for update chart, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
 */
export interface ChartViewUpdateData {
    /**
     * the target path that needs to be updated, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
     */
    targetPath: Array<any>;
    /**
     * The update action
     */
    action: 'array_append_start' | 'array_append_end' | 'array_merge_start' | 'array_merge_end' | 'object_merge' | 'delete' | 'replace' | 'increase' | 'decrease';
    /**
     * The target data that needs to be updated, some update actions do not need to pass, such as delete
     */
    data?: any;
}
/**
 * Chart helper, can be used only for chart scripts, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
 */
export declare class ChartHelper {
    /**
     * Set init option of chart, can be used only for chart option scripts, for more please read: https://doc.ttqm.app/#/en/chart/option
     * @param option chart option
     */
    static setOption(option: any): void;
    /**
     * Get chart view update data, can be used only for chart scripts, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
     * @param targetPath the target path that needs to be updated
     * @param action The update action
     * @param [data] The target data that needs to be updated, some update actions do not need to pass, such as delete
     * @returns chart view update data
     */
    static getChartViewUpdateData(targetPath: Array<any>, action: 'array_append_start' | 'array_append_end' | 'array_merge_start' | 'array_merge_end' | 'object_merge' | 'delete' | 'replace' | 'increase' | 'decrease', data?: any): ChartViewUpdateData;
    /**
     * Update chart view data, for more please read: https://doc.ttqm.app/#/en/chart/script?id=_3
     * @param chartViewData the chart view update data, the chart view update data, you can update option with single ChartViewUpdateData, or update with an array like [ChartViewUpdateData,ChartViewUpdateData], and the Chart will be updated in the order of the array one by one
     */
    static updateChartViewData(chartViewData: ChartViewUpdateData | Array<ChartViewUpdateData>): void;
}
```

<!-- tab:UserScriptHelper -->

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

<!-- tab:ByteUtil -->

```javascript
/**
 * Byte Util, This class is used to process byte-related data
 */
export declare class ByteUtil {
    /**
     * Buffer to byte array
     * @param source source Buffer
     * @returns byte array [1,2,3]
     */
    static bufferToByteArray(source: Buffer): Array<number>;
    /**
     * Byte array to buffer
     * @param source source byte array
     * @returns  Buffer
     */
    static byteArrayToBuffer(source: Array<number>): Buffer;
    /**
     * string To byte array with encoding
     * @param source source string
     * @param [encoding] 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'
     * @returns byte array
     */
    static stringToByteArray(source: string, encoding?: 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'): Array<number>;
    /**
     * Byte array to string with encoding
     * @param byteArray input Byte Array
     * @param [encoding] 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'
     * @returns the string in encoding
     */
    static byteArrayToString(byteArray: Array<number>, encoding?: 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'): string;
    /**
     * Byte array chunk
     * @param byteArray input Byte Array
     * @param chunkSize chunk size
     * @returns chunked array
     */
    static byteArrayChunk(byteArray: Array<number>, chunkSize: number): Array<Array<number>>;
    /**
     * Byte array to a signed, big-endian 64-bit integer
     * @param byteArray input Byte Array
     * @returns a signed, big-endian 64-bit integer
     */
    static byteArrayToBigInt64BE(byteArray: Array<number>): bigint;
    /**
     * Byte array to a signed, little-endian 64-bit integer
     * @param byteArray input Byte Array
     * @returns a signed, little-endian 64-bit integer
     */
    static byteArrayToBigInt64LE(byteArray: Array<number>): bigint;
    /**
     * Byte array to an unsigned, big-endian 64-bit integer
     * @param byteArray input Byte Array
     * @returns an unsigned, big-endian 64-bit integer
     */
    static byteArrayToBigUInt64BE(byteArray: Array<number>): bigint;
    /**
     * Byte array to an unsigned, little-endian 64-bit integer
     * @param byteArray input Byte Array
     * @returns an unsigned, little-endian 64-bit integer
     */
    static byteArrayToBigUInt64LE(byteArray: Array<number>): bigint;
    /**
     * Byte array to a 64-bit, big-endian double
     * @param byteArray input Byte Array
     * @returns a 64-bit, big-endian double
     */
    static byteArrayToDoubleBE(byteArray: Array<number>): number;
    /**
     * Byte array to a 64-bit, little-endian double
     * @param byteArray input Byte Array
     * @returns a 64-bit, little-endian double
     */
    static byteArrayToDoubleLE(byteArray: Array<number>): number;
    /**
     * Byte array to a 32-bit, big-endian float
     * @param byteArray input Byte Array
     * @returns a 32-bit, big-endian float
     */
    static byteArrayToFloatBE(byteArray: Array<number>): number;
    /**
     * Byte array to a 32-bit, little-endian float
     * @param byteArray input Byte Array
     * @returns a 32-bit, little-endian float
     */
    static byteArrayToFloatLE(byteArray: Array<number>): number;
    /**
     * Byte array to a signed 8-bit integer
     * @param byteArray input Byte Array
     * @returns a signed 8-bit integer
     */
    static byteArrayToInt8(byteArray: Array<number>): number;
    /**
     * Byte array to a signed, big-endian 16-bit integer
     * @param byteArray input Byte Array
     * @returns a signed, big-endian 16-bit integer
     */
    static byteArrayToInt16BE(byteArray: Array<number>): number;
    /**
     * Byte array to a signed, little-endian 16-bit integer
     * @param byteArray input Byte Array
     * @returns a signed, little-endian 16-bit integer
     */
    static byteArrayToInt16LE(byteArray: Array<number>): number;
    /**
     * Byte array to a signed, big-endian 32-bit integer
     * @param byteArray input Byte Array
     * @returns a signed, big-endian 32-bit integer
     */
    static byteArrayToInt32BE(byteArray: Array<number>): number;
    /**
     * Byte array to a signed, little-endian 32-bit integer
     * @param byteArray input Byte Array
     * @returns a signed, little-endian 32-bit integer
     */
    static byteArrayToInt32LE(byteArray: Array<number>): number;
    /**
     * Byte array to a big-endian, two's complement signed value supporting up to 48 bits of accuracy
     * @param byteArray input Byte Array
     * @returns a big-endian, two's complement signed value supporting up to 48 bits of accuracy
     */
    static byteArrayToIntBE(byteArray: Array<number>): number;
    /**
     * Byte array to a little-endian, two's complement signed value supporting up to 48 bits of accuracy.
     * @param byteArray input Byte Array
     * @returns a little-endian, two's complement signed value supporting up to 48 bits of accuracy.
     */
    static byteArrayToIntLE(byteArray: Array<number>): number;
    /**
     * Byte array to an unsigned, big-endian 16-bit integer
     * @param byteArray input Byte Array
     * @returns an unsigned, big-endian 16-bit integer
     */
    static byteArrayToUInt16BE(byteArray: Array<number>): number;
    /**
     * Byte array to an unsigned, little-endian 16-bit integer
     * @param byteArray input Byte Array
     * @returns an unsigned, little-endian 16-bit integer
     */
    static byteArrayToUInt16LE(byteArray: Array<number>): number;
    /**
     * Byte array to an unsigned, big-endian 32-bit integer
     * @param byteArray input Byte Array
     * @returns an unsigned, big-endian 32-bit integer
     */
    static byteArrayToUInt32BE(byteArray: Array<number>): number;
    /**
     * Byte array to an unsigned, little-endian 32-bit integer
     * @param byteArray input Byte Array
     * @returns an unsigned, little-endian 32-bit integer
     */
    static byteArrayToUInt32LE(byteArray: Array<number>): number;
    /**
     * Byte array to an unsigned big-endian integer supporting up to 48 bits of accuracy.
     * @param byteArray input Byte Array
     * @returns an unsigned big-endian integer supporting up to 48 bits of accuracy.
     */
    static byteArrayToUIntBE(byteArray: Array<number>): number;
    /**
     * Byte array to an unsigned, little-endian integer supporting up to 48 bits of accuracy.
     * @param byteArray input Byte Array
     * @returns an unsigned, little-endian integer supporting up to 48 bits of accuracy.
     */
    static byteArrayToUIntLE(byteArray: Array<number>): number;
    /**
     * Interprets buf as an array of unsigned 16-bit integers and swaps the byte order in-place. Throws ERR_INVALID_BUFFER_SIZE if buf.length is not a multiple of 2.
     * @param byteArray input Byte Array
     * @returns swap16 result array
     */
    static byteArraySwap16(byteArray: Array<number>): Array<number>;
    /**
     * Interprets buf as an array of unsigned 32-bit integers and swaps the byte order in-place. Throws ERR_INVALID_BUFFER_SIZE if buf.length is not a multiple of 4.
     * @param byteArray input Byte Array
     * @returns swap32 result array
     */
    static byteArraySwap32(byteArray: Array<number>): Array<number>;
    /**
     * Interprets buf as an array of 64-bit numbers and swaps byte order in-place. Throws ERR_INVALID_BUFFER_SIZE if buf.length is not a multiple of 8.
     * @param byteArray input Byte Array
     * @returns swap64 result array
     */
    static byteArraySwap64(byteArray: Array<number>): Array<number>;
}

```

<!-- tab:CertUtil -->

```javascript
/**
 * Cert util, This class is used to handle content related to SSL encryption and decryption
 */
export declare class CertUtil {
    /**
     * encrypt via private key
     * @param privateKeyPem private key in pem format
     * @param stringContent data to be encrypted which in string format
     * @param chunkSize  the chunk size of the string content
     * @returns encrypted content in base64 format
     */
    static privateKeyEncrypt(privateKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * decrypt via private key
     * @param privateKeyPem private key in pem format
     * @param encyptedBase64Content encrypted content in base64 format
     * @param chunkSize the chunk size of the encypted content
     * @returns decrypted string in string utf8
     */
    static privateKeyDecrypt(privateKeyPem: string, encyptedBase64Content: any, chunkSize: number): string;
    /**
     * encrypt via cert
     * @param certPem cert in pem format
     * @param stringContent data to be encrypted which in string format
     * @param chunkSize  the chunk size of the string content
     * @returns encrypted content in base64 format
     */
    static certEncrypt(certPem: string, stringContent: any, chunkSize: number): string;
    /**
     * decrypt via cert
     * @param certPem cert in pem format
     * @param encyptedBase64Content encrypted content in base64 format
     * @param chunkSize the chunk size of the encypted content
     * @returns decrypted string in string utf8
     */
    static certDecrypt(certPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * encrypt via public key
     * @param publicKeyPem public key in pem format
     * @param stringContent data to be encrypted which in string format
     * @param chunkSize  the chunk size of the string content
     * @returns encrypted content in base64 format
     */
    static publicKeyEncrypt(publicKeyPem: string, stringContent: any, chunkSize: number): string;
    /**
     * encrypt via public key
     * @param publicKeyPem public key in pem format
     * @param encyptedBase64Content encrypted content in base64 format
     * @param chunkSize  the chunk size of the string content
     * @returns decrypted string in string utf8
     */
    static publicKeyDecrypt(publicKeyPem: string, encyptedBase64Content: string, chunkSize: number): string;
    /**
     * Get cert encrypt max chunk size
     * @param certPem cert in pem format
     * @returns cert encrypt max chunk size
     */
    static getCertEncryptMaxChunkSize(certPem: string): number;
    /**
     * Get cert encrypt content size
     * @param certPem cert in pem format
     * @returns cert encrypt content size
     */
    static getCertEncryptContentSize(certPem: string): number;
    /**
     * Get public key encrypt max chunk size
     * @param publicKeyPem public key in pem format
     * @returns public key encrypt max chunk size
     */
    static getPublicKeyEncryptMaxChunkSize(publicKeyPem: string): number;
    /**
     * Get public key encrypt content size
     * @param publicKeyPem public key in pem format
     * @returns public key encrypt content size
     */
    static getPublicKeyEncryptContentSize(publicKeyPem: string): number;
    /**
     * Get private key encrypt max chunk size
     * @param privateKeyPem private key in pem format
     * @returns private key encrypt max chunk size
     */
    static getPrivateKeyEncryptMaxChunkSize(privateKeyPem: string): number;
    /**
     * Get private key encrypt content size
     * @param privateKeyPem private key in pem format
     * @returns private key encrypt content size
     */
    static getPrivateKeyEncryptContentSize(privateKeyPem: string): number;
}

```

<!-- tab:EncryptUtil -->

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

<!-- tab:FileUtil -->

```javascript
/**
 *  file hash type
 */
export declare enum FileHashType {
    MD5 = "md5",
    SHA1 = "sha1",
    SHA256 = "sha256",
    SHA512 = "sha512"
}
/**
 * File util, This class is used to handle file operations
 */
export declare class FileUtil {
    /**
     * Gets script data path with relative path
     * @param [subPath] the relative path
     * @returns the full absolute path
     */
    static getScriptDataPath(relativePath?: string): string;
    /**
     * Gets script tmp data path with relative path
     * @param [subPath] the relative path
     * @returns the full absolute path
     */
    static getScriptTmpDataPath(relativePath?: string): string;
    /**
     * Creates dir sync
     * @param path the path
     */
    static createDirSync(path: string): void;
    /**
     * Gets file hash asynchronously
     * @param path the file path
     * @param [hashName] a valid hash name, eg. md5 sha1 sha256 sha512
     * @returns a Promise which resolves to the file hash
     */
    static getFileHash(path: string, hashName?: FileHashType): Promise<string>;
    /**
     * Check if the path exists sync
     * @param path the path
     * @returns boolean true if the path exists, false otherwise
     */
    static existSync(path: string): boolean;
    /**
     * Check if the path is dir sync
     * @param path the path
     * @returns  boolean true if the path is dir, false otherwise
     */
    static isDirSync(path: string): boolean;
    /**
     * Creates string file sync
     * @param path the file path
     * @param content the string content
     */
    static createStringFileSync(path: string, content: string): void;
    /**
     * Append string to a file sync
     * @param path the file path
     * @param content the string content
     */
    static appendStringFileSync(path: string, content: string): void;
    /**
     * Reads string file sync
     * @param path the file path
     * @returns  the string of the file in utf8 format
     */
    static readStringFileSync(path: string): string;
    /**
     * Removes file or dir sync
     * @param path the path
     */
    static removeSync(path: string): void;
}

```

<!-- tab:TimeUtil -->

```javascript
/**
 * Time util, This class is used to handle time-related operations
 */
export declare class TimeUtil {
    /**
     * Sleep for given millisecond
     * @param ms millisecond
     * @returns a promise
     */
    static sleep(ms: number): Promise<void>;
}

```

<!-- tab:TopicUtil -->

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

<!-- tab:TcpClient -->

```javascript
/**
 * Coverts send data with type Uint8Array, Buffer,Array<number> to string,
 * @param data the data to be converted
 * @returns  the converted data
 */
export declare function covertSendData(data: Array<number> | string | Buffer | Uint8Array): string;
/**
 * Tcp client event listener
 */
export interface TcpClientEventListener {
    onConnect?: () => void;
    onError?: (error: Error) => void;
    onData?: (data: Array<number>) => void;
    onClose?: (hadError: boolean) => void;
    onEnd?: () => void;
    onReady?: () => void;
    onTimeout?: () => void;
}
/**
 * Tcp client
 */
export declare class TcpClient {
    host: string;
    port: number;
    client: Socket | null;
    listener: TcpClientEventListener;
    /**
     * Creates an instance of tcp client.
     * @param host tcp server host
     * @param port tcp server port
     * @param listener TcpClientEventListener
     */
    constructor(host: string, port: number, listener: TcpClientEventListener);
    /**
     * Connect to tcp server
     * @returns a promise
     */
    connect(): Promise<void>;
    /**
     * Disconnect from tcp server
     * @returns a promise
     */
    disconnect(): Promise<void>;
    /**
     * Sends data to tcp server
     * @param data Array<number> | string | Buffer | Uint8Array
     * @returns a promise
     */
    send(data: Array<number> | string | Buffer | Uint8Array): Promise<void>;
}

```

<!-- tab:TcpServer -->

```javascript
/**
 * Tcp socket info
 */
export interface TcpSocketInfo {
    id: number;
    name?: string;
    socket: Socket;
}
/**
 * Tcp server event listener
 */
export interface TcpServerEventListener {
    onConnection?: (socketInfo: TcpSocketInfo) => void;
    onError?: (error: Error) => void;
    onClose?: () => void;
    onListening?: () => void;
    onSocketError?: (socketInfo: TcpSocketInfo, error: Error) => void;
    onSocketData?: (socketInfo: TcpSocketInfo, data: Array<number>) => void;
    onSocketClose?: (socketInfo: TcpSocketInfo, hadError: boolean) => void;
}
/**
 * Tcp server
 */
export declare class TcpServer {
    port: number;
    server: Server | null;
    listener: TcpServerEventListener;
    socketInfoMap: Map<number, TcpSocketInfo>;
    socketIndex: number;
    /**
     * Creates an instance of tcp server.
     * @param port the tcp server port
     * @param listener TcpServerEventListener
     */
    constructor(port: number, listener: TcpServerEventListener);
    /**
     * Starts tcp server
     * @returns a promise
     */
    start(): Promise<void>;
    /**
     * Stops tcp server
     * @returns  a promise
     */
    stop(): Promise<void>;
    /**
     * Send data to tcp client
     * @param data Array<number> | string | Buffer | Uint8Array | string
     * @param [socketIdentity] number | string, TcpSocketInfo.id or TcpSocketInfo.name
     * @returns a promise
     */
    send(data: Array<number> | string | Buffer | Uint8Array | string, socketIdentity?: number | string): Promise<void>;
}

```

<!-- tab:WsClient -->

```javascript
/**
 * Covert revieved data to Array<number>
 * @param message revieved data
 * @returns an Array<number>
 */
export declare function covertRevievedToArray(message: Buffer | ArrayBuffer | Buffer[]): number[] | undefined;
/**
 * ws client event listener
 */
export interface WsClientEventListener {
    onOpen?: () => void;
    onError?: (error: Error) => void;
    onMessage?: (data: Array<number>) => void;
    onClose?: (code: number, reason: string) => void;
}
/**
 * ws client
 */
export declare class WsClient {
    url: string;
    client: WebSocket | null;
    listener: WsClientEventListener;
    /**
     * Creates an instance of ws client.
     * @param url like 'ws://0.0.0.1:2340'
     * @param listener WsClientEventListener
     */
    constructor(url: string, listener: WsClientEventListener);
    /**
     * Connect to ws server
     * @returns a promise
     */
    connect(): Promise<void>;
    /**
     * Disconnect from ws server
     * @returns a promise
     */
    disconnect(): Promise<void>;
    /**
     * Send data to ws server
     * @param message Array<number> | string | Buffer | Uint8Array
     * @returns  a promise
     */
    send(message: Array<number> | string | Buffer | Uint8Array): Promise<void>;
}

```

<!-- tab:WsServer -->

```javascript
/**
 * Web socket info
 */
export interface WebSocketInfo {
    id: number;
    name?: string;
    socket: WebSocket;
}
/**
 * Ws server event listener
 */
export interface WsServerEventListener {
    onConnection?: (socketInfo: WebSocketInfo) => void;
    onError?: (error: Error) => void;
    onClose?: () => void;
    onListening?: () => void;
    onSocketError?: (socketInfo: WebSocketInfo, error: Error) => void;
    onSocketMessage?: (socketInfo: WebSocketInfo, data: Array<number>) => void;
    onSocketClose?: (socketInfo: WebSocketInfo, code: number, reason: string) => void;
}
/**
 * Ws server
 */
export declare class WsServer {
    port: number;
    server: WebSocketServer | null;
    listener: WsServerEventListener;
    socketInfoMap: Map<number, WebSocketInfo>;
    socketIndex: number;
    /**
     * Create an instance of ws server.
     * @param port the websocket server port
     * @param listener WsServerEventListener
     */
    constructor(port: number, listener: WsServerEventListener);
    /**
     * Start ws server
     * @returns  a promise
     */
    start(): Promise<void>;
    /**
     * Stop ws server
     * @returns  a promise
     */
    stop(): Promise<void>;
    /**
     * Send data to ws client
     * @param message Array<number> | string | Buffer | Uint8Array | string
     * @param [socketIdentity] number | string, WebSocketInfo.id or WebSocketInfo.name
     * @returns  a promise
     */
    send(message: Array<number> | string | Buffer | Uint8Array, socketIdentity?: number | string): Promise<void>;
}

```

<!-- tabs:end -->
