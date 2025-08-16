import type { DefaultTheme } from 'vitepress'

export function getProjectSidebar(): DefaultTheme.SidebarItem {
  return {
    text: '应用项目',
    items: [
      { text: '❄️ 便携小空调', link: '/projects/ac' },
      {
        text: '🍲 Cook - 食用手册',
        link: '/projects/cook',
        items: [
          { text: '变更日志', link: '/projects/cook/changelog' },
        ],
      },
      { text: '💗 Girid - 动画角色印象表', link: '/projects/girid' },
      { text: '📝 Web Resume 简历', link: '/projects/web-resume' },
      { text: '🧧 AI 春联', link: '/projects/ai-sfc' },
      { text: '🎬 哔哩哔哩封面生成器', link: '/projects/bilibili-cover-generator' },
      { text: '更多项目', link: '/guide/more' },
    ],
  }
}
