import { getVitepressConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vitepress'

const vpConfig = getVitepressConfig()

export default defineConfig({
  ...vpConfig,
  title: 'Title',
  description: 'Description',

  themeConfig: {
    ...vpConfig.themeConfig,
  },
})
