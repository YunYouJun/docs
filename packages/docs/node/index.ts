import path from 'node:path'
import { _dirname } from './config/shims'

export * from './config'

export const componentsDir = path.resolve(_dirname, '../client/components')
