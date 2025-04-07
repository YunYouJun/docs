import type { UserConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { createFileSystemTypesCache } from '@shikijs/vitepress-twoslash/cache-fs'
// @ts-expect-error no @types
import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

export const markdown: UserConfig['markdown'] = {
  config(md) {
    md.use(taskLists)
    md.use(groupIconMdPlugin, {
      titleBar: { includeSnippet: true },
    })
  },

  codeTransformers: [
    transformerTwoslash({
      typesCache: createFileSystemTypesCache(),
    }),
  ],

  languages: ['ts'],
  lineNumbers: true,
}

export const themeConfig: UserConfig['themeConfig'] = {
  logo: '/favicon.svg',
  search: {
    provider: 'local',
  },
  outline: [2, 4],
  lastUpdated: {
    text: 'Last Updated',
  },
}

/**
 * default UserConfig for VitePress
 */
export const userConfig = defineConfig({
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.svg',
      },
    ],

    ['meta', { name: 'author', content: 'YunYouJun' }],
  ],

  lastUpdated: true,
  ignoreDeadLinks: 'localhostLinks',

  markdown,
  themeConfig,
})

/**
 * 获取默认配置
 *
 * - 例如：
 * - 当传入 `repo` 时，默认设置 `editLink` 和 `socialLinks`
 *  - `editLink` 为 repo + `/edit/main/docs/:path`
 */
export function getVitepressConfig(options: {
  repo?: string
}): UserConfig {
  const themeConfig = userConfig.themeConfig!

  if (options.repo) {
    themeConfig.editLink = {
      pattern: `${options.repo}/edit/main/docs/:path`,
    }
    themeConfig.socialLinks = [
      { icon: 'github', link: options.repo },
    ]
  }

  return userConfig
}
