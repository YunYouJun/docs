import path from 'node:path'

export * from './unocss'
export * from './vite'
export * from './vitepress'

export const componentsDir = path.resolve(import.meta.dirname, '../../client/components')
