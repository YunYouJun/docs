import type { Plugin } from 'vite'
// node import
import { replacer } from '../../../packages/docs/utils'

const MD_RE = /\.md\b/
const PROJECT_HOME_RE = /\/projects\/[^/]+(\/index)?\.md$/
const HEADER_RE = /\n#{2,6}\s.+/

export function MarkdownTransform(): Plugin {
  return {
    name: 'yyj-docs:md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!MD_RE.test(id)) {
        return null
      }

      /**
       * id 是文件路径
       * 满足以 /projects/xxx.md 或 /projects/xxx/index.md 结尾
       */
      const isProjectHomePage = id.match(PROJECT_HOME_RE)
      if (isProjectHomePage) {
        // const [projectsPath, _name] = id.split('/')
        // const name = _name.toLowerCase().slice(0, -3)

        const frontmatterEnds = code.indexOf('---\n\n')
        const firstHeader = code.search(HEADER_RE)
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
