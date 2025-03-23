export interface DocsProjectItem {
  /**
   * 项目标题
   */
  title: string
  /**
   * 项目描述
   */
  description: string
  /**
   * 项目状态
   */
  status: 'dev' | 'prod'
  /**
   * 项目仓库
   *
   * YunYouJun/docs -> https://github.com/YunYouJun/docs
   */
  repo: string
  /**
   * 项目链接
   */
  link: string
}
