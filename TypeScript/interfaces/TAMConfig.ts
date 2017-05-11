export interface TAMConfig {
    storagePolicies: Array<StorageConfig>,
}

/**
 * Customs the requirements of TestArtifactManager handling the artifacts.
 */
export interface StorageConfig {
    //commen properties: e.g., duration...
    port?: number // should we ever enable clients to provide port?
}

export interface LocalStorageConfig extends StorageConfig {
    port: number // should we ever enable clients to provide port?
}

export interface S3StorageConfig extends StorageConfig {
    bucketName?: string // which bucket to use
}