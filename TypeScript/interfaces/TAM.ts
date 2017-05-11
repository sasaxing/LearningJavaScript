import { TAMConfig, LocalStorageConfig, S3StorageConfig, StorageConfig } from './TAMConfig'

const DEFAULT_S3_BUCKET = 'rtc-platform-fusion-test-artifacts'
const dummyTAMConfig: TAMConfig = {
    storagePolicies: [
        { // a LocalStorageConfig
            port: 3000
        },
        { // S3StorageConfig
            bucketName: DEFAULT_S3_BUCKET
        }
    ]
}

/**
 * User Defined Type Guard!
 */
function isLocalStorageConfig(storageConfig: any): storageConfig is LocalStorageConfig {
    return storageConfig.port !== undefined
}

/**
 * User Defined Type Guard!
 */
function isS3StorageConfig(storageConfig: any): storageConfig is S3StorageConfig {
    return storageConfig.bucketName !== undefined
}

console.log(isLocalStorageConfig(dummyTAMConfig.storagePolicies[0]))
console.log(isS3StorageConfig(dummyTAMConfig.storagePolicies[0]))

dummyTAMConfig.storagePolicies.forEach((storagePolicy) => {
    if (isLocalStorageConfig(storagePolicy)) {
        console.log('Detect a LocalPolicy, TAM will use port:', storagePolicy.port) // needs storageConfig is LocalStorageConfig 
    }
    if (isS3StorageConfig(storagePolicy)) {
        console.log('Detect a S3Policy, TAM will use bucket:', storagePolicy.bucketName) // needs storageConfig is S3StorageConfig 
    }
})