import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...baseConfig,
    // services: ["edgedriver"],
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true
        }
    ]
}
