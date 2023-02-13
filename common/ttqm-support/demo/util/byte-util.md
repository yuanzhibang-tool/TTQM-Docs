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
