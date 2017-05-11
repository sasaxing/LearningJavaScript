export interface TAMConfig {
    storagePolicies: Array<StoragePolicyConfig>,
}

export interface StoragePolicyConfig {
    provider: string
    port?: number // should we ever enable clients to provide port?
}

export interface LocalStoragePolicyConfig extends StoragePolicyConfig {
    artifactRoot?: string
}

export interface S3StoragePolicyConfig extends StoragePolicyConfig {
    bucketName?: string // which bucket to use
}

const localStorageConfig = <LocalStoragePolicyConfig>{
    port: 3000,
    provider: 'local'
}

const s3StorageConfig = <S3StoragePolicyConfig>{
    port: 3000,
    provider: 's3',
    bucketName: 'aBucket'
}


const storagePolicies = Array<LocalStoragePolicyConfig | S3StoragePolicyConfig>()
storagePolicies.push(localStorageConfig)
storagePolicies.push(localStorageConfig)
let s3SPCs = storagePolicies.filter((config) => config.provider === 's3')
s3SPCs.forEach((config) => {
    let s3spc = config as S3StoragePolicyConfig
    console.log(s3spc.bucketName)
})
