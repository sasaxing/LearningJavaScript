export interface TAMConfig {
    storagePolicies: Array<StoragePolicy>,
}

export interface StoragePolicy {
    provider: string
    port?: number // should we ever enable clients to provide port?
}

export interface LocalStoragePolicy extends StoragePolicy {
    artifactRoot?: string
}

export interface S3StoragePolicy extends StoragePolicy {
    bucketName?: string // which bucket to use
}

const localStoragePolicy = <LocalStoragePolicy>{
    port: 3000,
    provider: 'local'
}

const s3StoragePolicy = <S3StoragePolicy>{
    port: 3000,
    provider: 's3',
    bucketName: 'aBucket'
}


const storagePolicies = Array<LocalStoragePolicy | S3StoragePolicy>()
storagePolicies.push(localStoragePolicy)
storagePolicies.push(localStoragePolicy)
let s3SPCs = storagePolicies.filter((config) => config.provider === 's3')
s3SPCs.forEach((config) => {
    let s3spc = config as S3StoragePolicy
    console.log(s3spc.bucketName)
})
