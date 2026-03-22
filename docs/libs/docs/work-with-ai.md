# 与 AI 协作

`@yunyoujun/docs` 基于 VitePress + Vue 3 + UnoCSS 技术栈。通过安装对应的 [Skills](https://skills.sh/)，可以让 AI（如 GitHub Copilot）更好地理解项目上下文，提升协作效率。

## 什么是 Skills？

[Skills](https://skills.sh/) 是开放的 AI Agent 技能生态系统，为 AI 工具提供领域知识，使其更准确地理解特定技术栈和最佳实践。

通过 [Skills CLI](https://github.com/nicepkg/skills) 可以快速搜索和安装：

```bash
# 搜索 skills
npx skills find <query>
# 安装 skill
npx skills add <owner/repo@skill> -g -y
```

> 浏览所有可用 Skills：<https://skills.sh/>

## 选择建议

以下 Skills 方向可直接帮助集成 `@yunyoujun/docs`：

| 能力方向 | 建议检索关键词          | 主要作用                              |
| -------- | ----------------------- | ------------------------------------- |
| 文档框架 | `vitepress`             | 理解文档路由、主题配置、Markdown 扩展 |
| Vue 组件 | `vue` `composition-api` | 生成/重构 Vue 3 组件与组合式逻辑      |
| 样式系统 | `unocss`                | 处理原子化样式、规则与预设            |
| 构建配置 | `vite`                  | 调整构建配置与插件链路                |
| 包管理   | `pnpm` `workspace`      | 管理 monorepo 依赖与脚本              |
| 测试验证 | `vitest`                | 补充单测与回归验证                    |

推荐流程：

```bash
# 1) 先按能力方向检索
npx skills find vitepress
npx skills find vue
npx skills find unocss
npx skills find vite
npx skills find pnpm
npx skills find vitest

# 2) 再从结果中选择并安装
npx skills add <owner/repo@skill> -g -y
```

建议优先安装与你当前改动最相关的 2~3 个 Skills，避免一次性引入过多上下文噪音。

## 项目内置 Skill

本仓库内置了 `setup-yunyoujun-docs`，用于自动化集成 `@yunyoujun/docs`：

- Skill 路径：`skills/setup-yunyoujun-docs/SKILL.md`
- 主要能力：安装依赖、接入 `getViteConfig()` / `getVitepressConfig()`、合并现有配置并执行最小验证

可直接向 AI 描述以下任务触发：

- “帮我把 `@yunyoujun/docs` 集成到这个 VitePress 项目”
- “文档在 `docs/` 子目录，接入 `getVitepressConfig` 并保留现有 nav/sidebar”
- “修复接入后缺失 `unocss` 依赖的问题并验证构建”

## 项目说明文件

在项目根目录添加 `.copilot-instructions.md`，帮助 AI 理解项目结构：

```markdown [.copilot-instructions.md]
# Project Context

基于 VitePress 的文档站点，使用 @yunyoujun/docs 提供的预设配置和组件。

## 技术栈

- VitePress + Vue 3 + TypeScript
- UnoCSS 原子化 CSS
- @antfu/eslint-config

## 核心 API

- `getVitepressConfig()`: VitePress 预设配置
- `getViteConfig()`: Vite 预设配置（含 UnoCSS、组件自动导入等）
```

## 相关资源

- [Skills 市场](https://skills.sh/)
- [Skills CLI](https://github.com/nicepkg/skills)
- [@yunyoujun/docs 文档](/libs/docs/)
- [快速开始](/guide/getting-started)
