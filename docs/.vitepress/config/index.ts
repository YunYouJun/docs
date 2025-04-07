import { defineConfig } from 'vitepress'
import pkg from '../../../package.json'
import { getVitepressConfig } from '../../../packages/docs/node'

import typedocSidebar from '../../api/typedoc-sidebar.json'

const vpConfig = getVitepressConfig({
  repo: 'https://github.com/YunYouJun/docs',
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...vpConfig,

  title: '云游君的文档',
  description: 'Docs for YunYouJun Projects.',

  themeConfig: {
    ...vpConfig.themeConfig,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '博客', link: 'https://www.yunyoujun.cn' },
      { text: '项目橱窗', link: 'https://www.yunyoujun.cn/projects/' },
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
        {
          text: '应用项目',
          items: [
            { text: 'Girid - 动画角色印象表', link: '/projects/girid' },
            { text: 'Web Resume 简历', link: '/projects/web-resume' },
            { text: '哔哩哔哩封面生成器', link: '/projects/bilibili-cover-generator' },
          ],
        },
        {
          text: '辅助类库',
          items: [
            { text: '@yunyoujun/docs', link: '/libs/docs' },
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
})
