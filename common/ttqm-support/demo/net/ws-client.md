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
