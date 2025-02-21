import { defineConfig } from 'unocss'

import { projects } from './.vitepress/theme/components/demo/data'

const safelist: string[] = []
projects.forEach((project) => {
  safelist.push(project.logo)
  safelist.push(...project.icons ?? [])
})

export default defineConfig({
  safelist,
})
