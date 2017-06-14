import { TAMConfig, LocalStoragePolicy, S3StoragePolicy, StoragePolicy } from './TAMConfig'

const DEFAULT_S3_BUCKET = 'rtc-platform-fusion-test-artifacts'
const dummyTAMConfig: TAMConfig = {
    storagePolicies: [
        { // a LocalStoragePolicy
            port: 3000
        },
        { // S3StoragePolicy
            bucketName: DEFAULT_S3_BUCKET
        }
    ]
}

/**
 * User Defined Type Guard!
 */
function isLocalStoragePolicy(StoragePolicy: any): StoragePolicy is LocalStoragePolicy {
    return StoragePolicy.port !== undefined
}

/**
 * User Defined Type Guard!
 */
function isS3StoragePolicy(StoragePolicy: any): StoragePolicy is S3StoragePolicy {
    return StoragePolicy.bucketName !== undefined
}

console.log(isLocalStoragePolicy(dummyTAMConfig.storagePolicies[0]))
console.log(isS3StoragePolicy(dummyTAMConfig.storagePolicies[0]))

dummyTAMConfig.storagePolicies.forEach((storagePolicy) => {
    if (isLocalStoragePolicy(storagePolicy)) {
        console.log('Detect a LocalPolicy, TAM will use port:', storagePolicy.port) // needs StoragePolicy is LocalStoragePolicy 
    }
    if (isS3StoragePolicy(storagePolicy)) {
        console.log('Detect a S3Policy, TAM will use bucket:', storagePolicy.bucketName) // needs StoragePolicy is S3StoragePolicy 
    }
})