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
