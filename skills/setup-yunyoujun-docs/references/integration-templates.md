# integration-templates

用于在目标项目不存在对应配置文件时快速创建初始版本。

## vite.config.ts

```ts
import { getViteConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vite'

const viteConfig = getViteConfig({})

export default defineConfig({
  ...viteConfig,
})
```

## .vitepress/config/index.ts

```ts
import { getVitepressConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vitepress'

const vpConfig = getVitepressConfig({
  repo: 'https://github.com/<owner>/<repo>',
})

export default defineConfig({
  ...vpConfig,

  title: 'My Docs',
  description: 'Docs site powered by VitePress.',

  themeConfig: {
    ...vpConfig.themeConfig,

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
    ],
  },
})
```

## .vitepress/theme/index.ts

```ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'uno.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
```

## docs 子项目安装命令

如果文档站点位于 `docs/` 子目录，在仓库根目录执行：

```bash
pnpm -C docs add -D @yunyoujun/docs unocss unplugin-vue-components vite-plugin-vue-devtools @shikijs/vitepress-twoslash
```

如果文档站点在仓库根目录，执行：

```bash
pnpm add -D @yunyoujun/docs unocss unplugin-vue-components vite-plugin-vue-devtools @shikijs/vitepress-twoslash
```
