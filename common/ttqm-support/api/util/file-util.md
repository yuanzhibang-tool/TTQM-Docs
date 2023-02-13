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
