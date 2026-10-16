import type { UserConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { withYunlefun, yunlefunMarkdown, zhThemeConfig } from 'vitepress-theme-yunlefun/config'
import pkg from '../../../package.json'

import { getVitepressConfig } from '../../../packages/docs/node'
import typedocSidebar from '../../api/typedoc-sidebar.json'
import { docsMark } from '../docs-mark'
import { getProjectSidebar } from './project'

// Bridge config type across different VitePress dependency instances in pnpm workspaces.
const vpConfig = getVitepressConfig({
  repo: 'https://github.com/YunYouJun/docs',
}) as unknown as UserConfig
// The theme draws the brand mark, so the shared native logo is dropped.
const { logo: _logo, ...baseThemeConfig } = vpConfig.themeConfig ?? {}

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig(withYunlefun({
  ...vpConfig,

  title: '云游君的文档',
  description: 'Docs for YunYouJun Projects.',

  vite: {
    // mermaid 11.17 imports CommonJS fastdom and its promised extension; pre-bundle them like the other deps vitepress-plugin-mermaid lists.
    optimizeDeps: { include: ['mermaid > fastdom', 'mermaid > fastdom/extensions/fastdom-promised.js'] },
  },

  markdown: {
    ...vpConfig.markdown,
    config(md) {
      vpConfig.markdown?.config?.(md)
      md.use(yunlefunMarkdown)
    },
  },

  themeConfig: {
    ...baseThemeConfig,
    ...zhThemeConfig,
    // Keep the deeper outline from @yunyoujun/docs.
    outline: { label: '本页内容', level: [2, 4] },
    brand: { icon: docsMark, hero: true },
    editLink: { ...baseThemeConfig.editLink, text: '在 GitHub 上编辑此页' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '博客', link: 'https://www.yunyoujun.cn' },
      { text: '项目橱窗', link: 'https://www.yunyoujun.cn/projects/' },
      { text: 'AI 笔记', link: 'https://ai.yunyoujun.cn/' },
      { text: 'Docs API', link: '/api/' },
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          items: [
            { text: '为什么有这个站点？', link: '/guide/why' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '参与贡献', link: '/guide/contribution' },
            { text: '变更日志', link: '/changelog' },
          ],
        },
        getProjectSidebar(),
        {
          text: 'Starter 模板',
          items: [
            { text: 'Tauri + Vite + Vue3', link: '/starters/tauri-vite-vue' },
          ],
        },
        {
          text: '辅助类库',
          items: [
            {
              text: '@yunyoujun/docs',
              link: '/libs/docs',
              items: [
                { text: '与 AI 协作', link: '/libs/docs/work-with-ai' },
                { text: 'API', link: '/api/' },
              ],
            },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API',
          items: typedocSidebar,
        },
      ],
    },

    socialLinks: [
      ...vpConfig.themeConfig.socialLinks,

      { icon: 'x', link: 'https://x.com/YunYouJun' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1579790' },
      { icon: 'wechat', link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg' },
      { icon: 'sinaweibo', link: 'https://weibo.com/jizhideyunyoujun' },
      { icon: 'tencentqq', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Znfp7iGZpYjAJLIUlB6lEK-b9taKuK0h&authKey=OjWij7kKhi%2Bvc8JsHVdYm9Q8pBIF4tClK8ulupn28MTZ8jDyPhZWCB8q7K7u9PTT&noverify=0&group_code=1050458482' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9.06 8.683L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513z"/></svg>',
        },
        link: 'mailto:me@yunyoujun.cn',
      },
    ],

    footer: {
      copyright: '@YunYouJun',
      message: `v${pkg.version}`,
    },
  },
})))
