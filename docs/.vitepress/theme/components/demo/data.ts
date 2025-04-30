import type { ProjectItem } from '@yunyoujun/docs/types'

export interface Integration {
  icon: string
  name: string
  link: string
  target?: string
  secondary?: string
}

export interface Example {
  name: string
  path: string
  icon?: string
  icons?: string[]
}

export const integrations: Integration[] = [
  { name: 'Vite', link: '/integrations/vite', icon: 'i-logos:vitejs' },
  { name: 'Nuxt', link: '/integrations/nuxt', icon: 'i-logos:nuxt-icon' },
  { name: 'Webpack', link: '/integrations/webpack', icon: 'i-logos-webpack' },
  { name: 'Vue CLI', link: '/integrations/vue-cli', icon: 'i-logos-vue' },
]

export const examples: Example[] = [
  {
    name: 'vite',
    path: 'examples/vite',
    icon: 'i-logos-vitejs',
  },
  {
    name: 'vite-vue',
    path: 'examples/vite-vue',
    icons: [
      'i-logos-vitejs',
      'i-logos-vue',
    ],
  },
  {
    name: 'webpack',
    path: 'examples/webpack',
    icon: 'i-logos-webpack',
  },
  {
    name: 'vue-cli',
    path: 'examples/vue-cli',
    icons: [
      'i-logos-webpack',
      'i-logos-vue',
    ],
  },
  {
    name: 'nuxt3',
    path: 'examples/nuxt',
    icon: 'i-logos-nuxt-icon',
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Vite + Vie + Unocss',
    description: '使用 Unocss 的 Vite + Vue 项目',
    link: 'https://github.com/YunYouJun',
    logo: 'i-ri:projector-line',
    color: '#f35543',
    icons: [
      'i-logos:vitejs',
      'i-logos:vue',
      'i-logos:unocss',
    ],
  },
  {
    title: 'Nuxt + UnoCSS',
    description: '使用 UnoCSS 的 Nuxt 项目',
    link: 'https://github.com/YunYouJun',
    logo: 'i-ri:aed-line',
    color: 'dodgerblue',
    icons: [
      'i-logos:nuxt-icon',
      'i-logos:vue',
      'i-logos:unocss',
    ],
  },
  {
    title: 'Playwright + Vue',
    description: '使用 Playwright 进行测试',
    link: 'https://github.com/YunYouJun',
    logo: 'i-ri:playstation-line',
    color: 'yellow',
    icons: [
      'i-logos:vue',
      'i-logos:vitejs',
      'i-vscode-icons:file-type-playwright',
    ],
  },
  {
    title: 'Logo + Title',
    description: '使用 Playwright 进行测试',
    link: 'https://github.com/YunYouJun',
    logo: 'i-ri:playstation-line',
  },
  {
    title: 'Only Title',
    logo: 'i-logos:vue',
  },
]
