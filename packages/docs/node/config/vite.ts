import type { PluginOption, UserConfig } from 'vite'
import dayjs from 'dayjs'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentsDir } from '..'

import { unocssConfig } from './unocss'

/**
 * 获取常用的 vite 配置
 * get common vite config
 */
export function getViteConfig(options: {
  /**
   * @default true
   * @see https://unocss.dev/
   */
  unocss?: import('unocss').UserConfig | boolean

  /**
   * unplugin-vue-components options
   */
  componentsOptions?: Parameters<typeof Components>[0]
  /**
   * custom components dirs
   */
  componentsDirs?: string[]

  /**
   * @default true
   */
  vueDevTools?: import('vite-plugin-vue-devtools').VitePluginVueDevToolsOptions | boolean
} = {
  vueDevTools: true,
}) {
  const plugins: PluginOption[] = [
    Unocss({
      ...unocssConfig,
      ...(options.unocss === true ? {} : options.unocss),
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
  ]

  // https://github.com/vuejs/devtools
  if (options.vueDevTools) {
    plugins.push(
      import('vite-plugin-vue-devtools').then(m => m.default(
        typeof options.vueDevTools === 'object' ? options.vueDevTools : {},
      )),
    )
  }

  const viteConfig: UserConfig = {
    define: {
      __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm:ss')),
    },

    plugins,
  }

  return viteConfig
}
