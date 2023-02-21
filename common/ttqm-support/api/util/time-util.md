```javascript
/**
 * Time util, This class is used to handle time-related operations
 */
export declare class TimeUtil {
    /**
     * Sleep for given millisecond, it must be used in async function with await.
     * @param ms millisecond
     * @returns a promise
     */
    static sleep(ms: number): Promise<void>;
    /**
     * Get current unix second
     * @returns number
     */
    static getCurrentUnixSecond(): number;
    /**
     * Get current unix millisecond
     * @returns number
     */
    static getCurrentUnixMillisecond(): number;
    /**
     * Get unix second from format date like 'YYYY-MM-DD HH:mm:ss'
     * @param formatDate date string like 'YYYY-MM-DD HH:mm:ss'
     * @returns number unix second of given format date
     */
    static getUnixSecondFromFormatDate(formatDate: string): number;
    /**
     * Get format date from unix millisecond with given format
     * @param [format] given format like 'YYYY-MM-DD HH:mm:ss'
     * @param [unixMillisecond] given unix millisecond, if not specified, default is current unix millisecond
     * @returns the format date string
     */
    static getFormatDateFromUnixMillisecond(format?: string, unixMillisecond?: number): string;
    /**
     * Get format date from unix second with given format
     * @param [format] given format like 'YYYY-MM-DD HH:mm:ss'
     * @param [unixSecond] given unix second, if not specified, default is current unix second
     * @returns the format date string
     */
    static getFormatDateFromUnixSecond(format?: string, unixSecond?: number): string;
}


```
