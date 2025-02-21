import type { UserConfig } from 'vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import path from 'path'
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
      ...unocssConfig
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
        path.resolve(__dirname, '../../client/components'),

        ...options.componentsDirs ?? [],
      ],
      dts: '.vitepress/components.d.ts',

      ...options.componentsOptions,
    }),

    groupIconVitePlugin({
      customIcon: {
        node: 'vscode-icons:file-type-node',
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

  const viteConfig: UserConfig = {
    css: {
      /**
       * @see https://vite.dev/config/shared-options.html#css-preprocessoroptions
       */
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          importers: [
            // ...
          ],
        },
      },
    },
    
    plugins,
  }

  return viteConfig
}
