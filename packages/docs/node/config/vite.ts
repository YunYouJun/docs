import type { UserConfig } from 'vite'
import dayjs from 'dayjs'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentsDir } from '..'

import { unocssConfig } from './unocss'

/**
 * 获取常用的 vite 配置
 * get common vite config
 */
export function getViteConfig(options: {
  /**
   * unplugin-vue-components options
   */
  componentsOptions?: Parameters<typeof Components>[0]
  /**
   * custom components dirs
   */
  componentsDirs?: string[]
} = {}) {
  const plugins = [
    Unocss({
      ...unocssConfig,
    }),

    Components({
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      dirs: [
        '.vitepress/theme/components',

        // common components for vitepress docs
        componentsDir,

        ...options.componentsDirs ?? [],
      ],
      dts: '.vitepress/components.d.ts',
      extensions: ['vue', 'md'],

      ...options.componentsOptions,
    }),

    groupIconVitePlugin({
      customIcon: {
        nodejs: 'vscode-icons:file-type-node',
        cli: 'vscode-icons:folder-type-cli',
        postcss: 'vscode-icons:file-type-postcss',
        playwright: 'vscode-icons:file-type-playwright',
        vitepress: 'simple-icons:vitepress',
        typedoc: 'vscode-icons:file-type-typedoc',
        类型检查: 'vscode-icons:file-type-typescript',
        eslint: 'vscode-icons:file-type-eslint',
      },
    }),

    // https://github.com/vuejs/devtools
    VueDevTools(),
  ]

  const viteConfig: UserConfig = {
    define: {
      __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm:ss')),
    },

    plugins,
  }

  return viteConfig
}
