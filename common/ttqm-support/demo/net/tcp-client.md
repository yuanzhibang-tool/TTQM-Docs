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
