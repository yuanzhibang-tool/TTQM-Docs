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
