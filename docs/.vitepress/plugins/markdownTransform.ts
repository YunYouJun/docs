import type { Plugin } from 'vite'
// node import
import { replacer } from '../../../packages/docs/utils'

export function MarkdownTransform(): Plugin {
  return {
    name: 'yyj-docs:md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/)) {
        return null
      }

      // 满足 /projects/*.md 的条件
      if (id.match(/\/projects\//)) {
        // const [projectsPath, _name] = id.split('/')
        // const name = _name.toLowerCase().slice(0, -3)

        const frontmatterEnds = code.indexOf('---\n\n')
        const firstHeader = code.search(/\n#{2,6}\s.+/)
        const slideIndex = firstHeader < 0
          ? (
              (frontmatterEnds < 0)
                ? 0
                : frontmatterEnds + 4)
          : firstHeader

        const { footer, header } = getProjectMarkdown()
        if (header) {
          code = code.slice(0, slideIndex) + header + code.slice(slideIndex)
        }

        if (footer) {
          code = replacer(code, footer, 'footer', 'tail')
        }

        return code
      }

      // code =
    },
  }
}

/**
 * 包裹项目介绍的 Markdown 额外信息
 *
 * 根据 frontmatter 中字段生成
 */
export function getProjectMarkdown() {
  const projectInfo = `
# {{ $frontmatter.title }}

> {{ $frontmatter.description }}

当前状态：<StatusBadge :status="$frontmatter.status" />

<SiteLinkBadge :link="$frontmatter.link" />
<GitHubBadge :repo="$frontmatter.repo" />
`

  const footer = ''
  const header = `${projectInfo}\n`

  return {
    footer,
    header,
  }
}
