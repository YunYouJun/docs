# @yunyoujun/docs

搭建文档（VitePress）常用的配置、组件、样式等。

- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components): 自动加载 `.vitepress/theme/components` 下的组件。
- [unocss](https://unocss.dev): 配置 UnoCSS 常用原子化类。
- [vitepress-plugin-group-icons](https://github.com/yuyinws/vitepress-plugin-group-icons): 为文档代码块添加图标和标题。
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists): 支持任务列表。

## 使用

```bash [pnpm]
pnpm add -D @yunyoujun/docs
```

```bash [pnpm]
# 按需添加
pnpm add -D unocss unplugin-vue-components vite-plugin-vue-devtools
# vitepress
pnpm add -D vitepress-plugin-group-icons @shikijs/vitepress-twoslash
```

## 配置

你的文档目录配置：

```ts [vite.config.ts] {2,5-6,9}
import { getViteConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

const viteConfig = getViteConfig({})
viteConfig.plugins?.push(MarkdownTransform())

export default defineConfig({
  ...viteConfig,
})
```

```ts [.vitepress/config/index.ts] {2,4-6,10,16}
import { getVitepressConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vitepress'

const vpConfig = getVitepressConfig({
  /**
   * - 当传入 `repo` 时，默认设置 `editLink` 和 `socialLinks`
   * - `editLink` 为 repo + `/edit/main/docs/:path`
   */
  repo: 'https://github.com/YunYouJun/docs',
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...vpConfig,

  title: '云游君的文档',
  description: 'Docs for YunYouJun Projects.',

  themeConfig: {
    ...vpConfig.themeConfig,

    // your theme config
  },
})
```

## 组件

### DemoDocsProjectList

<<< @/.vitepress/theme/components/demo/DemoDocsProjectList.vue

::: details `.vitepress/theme/components/demo/data.ts`

<<< @/.vitepress/theme/components/demo/data.ts

:::

<DemoDocsProjectList />
