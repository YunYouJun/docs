import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [
    Unocss(),

    Components({
      // include: [/\.vue/, /\.md/],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      dirs: [
        '.vitepress/theme/components',
      ],
      dts: '.vitepress/components.d.ts',
    }),

    groupIconVitePlugin({
      customIcon: {
        cli: 'vscode-icons:folder-type-cli',
        postcss: 'vscode-icons:file-type-postcss',
        playwright: 'vscode-icons:file-type-playwright',
        vitepress: 'simple-icons:vitepress',
        typedoc: 'vscode-icons:file-type-typedoc',
      },
    }),
  ],
})
