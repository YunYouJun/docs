import { dirname } from 'node:path'

export const _dirname = dirname(new URL(import.meta.url).pathname)
