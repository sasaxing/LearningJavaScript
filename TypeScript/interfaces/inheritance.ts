/**
 * Interfaces.
 */
export interface StoragePolicy {
    provider: Provider
}
export interface LocalStoragePolicy extends StoragePolicy {
    artifactRoot?: string
}
export interface S3StoragePolicy extends StoragePolicy {
    bucketName?: string
}
export enum Provider {
    local,
    s3
}

abstract class StorageProvider {
    policy: StoragePolicy
    constructor(policy: StoragePolicy) {
        this.policy = policy
    }
    abstract greet()
}

class s3Provider extends StorageProvider {
    bucketName: string
    constructor(policy: S3StoragePolicy) {
        super(policy)
        this.policy = policy as S3StoragePolicy
        this.bucketName = policy.bucketName
    }
    greet() {
        console.log('I am s3 provider, use bucket: ', this.bucketName)
    }
}

const aPolicy = {
    provider: Provider.s3,
    bucketName: 'rtc-byot-bucket'
}

const aProvider = new s3Provider(aPolicy)
aProvider.greet()