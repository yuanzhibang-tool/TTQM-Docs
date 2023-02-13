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
