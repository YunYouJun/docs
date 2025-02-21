import { defineConfig } from 'vite'
import { getViteConfig } from '../packages/docs/node'

const viteConfig = getViteConfig({})

export default defineConfig({
  ...viteConfig,

  resolve: {
    alias: {
      '@yunyoujun/docs': '../packages/docs/index.ts',
    },
  },
})
