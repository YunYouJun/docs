import { defineConfig } from 'vite'

import { getViteConfig } from '../packages/docs/node'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

const viteConfig = getViteConfig({})

viteConfig.plugins!.push(MarkdownTransform())

export default defineConfig({
  resolve: {
    alias: {
      '@yunyoujun/docs': '../packages/docs/node/index.ts',
    },
  },

  ...viteConfig,
})
