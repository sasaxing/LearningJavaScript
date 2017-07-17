/**
 *  1. take SUTFeatureConfig as a new property.
        
        export interface BYOTConfig {
            globalSUTFeature?: SUTFeatureConfig
            sutConfigs: Array<SUTConfig>
        }

        export interface SUTConfig {
            sutId: string
            sutFeature: SUTFeatureConfig
        }

        export interface SUTFeatureConfig {
            setupTimeoutMs?: number
            teardownTimeoutMs?: number
        }

        const byotConfig: BYOTConfig = {
            sutConfigs: []
        }

        const sutConfig: SUTConfig = {
            sutId: 'sutid-try',
            sutFeature: {

            }
        }
*/

// 2. extends SUTFeatureConfig
export interface SUTFeatureConfig {
    setupTimeoutMs?: number
    teardownTimeoutMs?: number
}

export interface BYOTConfig extends SUTFeatureConfig {
    sutConfigs: Array<SUTConfig>
}

export interface SUTConfig extends SUTFeatureConfig {
    sutId: string
}

const byotConfig: BYOTConfig = {
    sutConfigs: []
}

const sutConfig: SUTConfig = {
    sutId: 'sutid-try'
}