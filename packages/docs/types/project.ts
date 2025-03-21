export interface ProjectItem {
  /**
   * 项目名称
   */
  title: string
  /**
   * 项目描述
   */
  description?: string
  /**
   * 项目图标
   */
  logo: string
  /**
   * 主题色
   */
  color?: string
  /**
   * 图标
   * @description 使用到的技术栈
   */
  icons: string[]
  /**
   * 项目链接
   */
  link: string
}
