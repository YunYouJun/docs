---
name: setup-yunyoujun-docs
description: 一键将 @yunyoujun/docs 集成到 VitePress 文档项目，自动安装依赖并接入 getViteConfig / getVitepressConfig。适用于用户提到“集成 @yunyoujun/docs”、“配置 VitePress 文档基础设施”、“接入 UnoCSS 和组件自动导入”、“迁移现有 VitePress 配置”等场景。只要任务涉及 VitePress 项目的初始化、迁移或统一配置，就应优先使用此 skill。
metadata:
  title: 集成 @yunyoujun/docs
  icon: "🧩"
  category: 文档
---

# setup-yunyoujun-docs

为 VitePress 文档项目接入 `@yunyoujun/docs` 预设，并在不破坏现有配置的前提下完成依赖安装与配置合并。

## 目标结果

完成后项目应具备：

- 可用的 `getViteConfig()` 集成（Vite 插件链路）
- 可用的 `getVitepressConfig()` 集成（VitePress 默认站点配置）
- 主题入口包含 `uno.css` 与 `virtual:group-icons.css`
- 依赖安装完整，可直接运行 `docs:dev` 或 `docs:build`

## 执行流程

### 1. 识别项目结构与目标目录

1. 优先识别文档子项目目录：
   - `docs/`（常见）
   - 仓库根目录（单项目）
2. 检查以下候选文件：
   - Vite 配置：`vite.config.ts`、`vite.config.mts`、`docs/vite.config.ts`、`docs/vite.config.mts`
   - VitePress 配置：`.vitepress/config.ts`、`.vitepress/config.mts`、`.vitepress/config/index.ts`、`.vitepress/config/index.mts`（含 `docs/` 前缀变体）
   - 主题入口：`.vitepress/theme/index.ts`（含 `docs/` 前缀变体）
3. 若配置文件不存在，则按参考模板创建（见 `references/integration-templates.md`）。

### 2. 安装依赖（按包管理器）

优先根据锁文件选择包管理器（`pnpm-lock.yaml` > `package-lock.json` > `yarn.lock`），默认使用 `pnpm`。

在文档项目目录执行安装（例如 `docs/` 子项目则使用 `pnpm -C docs`）：

```bash
# 文档项目位于仓库根目录
pnpm add -D @yunyoujun/docs unocss unplugin-vue-components vite-plugin-vue-devtools @shikijs/vitepress-twoslash

# 文档项目位于 docs/ 子目录
pnpm -C docs add -D @yunyoujun/docs unocss unplugin-vue-components vite-plugin-vue-devtools @shikijs/vitepress-twoslash
```

说明：

- `@yunyoujun/docs` 提供预设 API。
- `unocss`、`unplugin-vue-components`、`vite-plugin-vue-devtools`、`@shikijs/vitepress-twoslash` 由预设链路使用，建议一并安装。
- 已存在依赖时不要重复修改版本策略。

### 3. 接入 Vite 配置

在目标 Vite 配置中：

1. 引入 `getViteConfig`。
2. 将预设配置与用户现有配置合并，保留用户已有字段与插件。
3. 避免覆盖用户自定义插件逻辑。

优先使用以下结构（可按现有风格调整）：

```ts
import { getViteConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vite'

const viteConfig = getViteConfig({})

export default defineConfig({
  ...viteConfig,
})
```

### 4. 接入 VitePress 配置

在 VitePress 配置中：

1. 引入 `getVitepressConfig` 与 `defineConfig`。
2. 基于 `vpConfig` 展开，并保留用户现有 `title`、`description`、`themeConfig`。
3. 若可推断仓库地址，传入 `repo` 以自动生成 `editLink` 与 `socialLinks`。

推荐结构：

```ts
import { getVitepressConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vitepress'

const vpConfig = getVitepressConfig({
  repo: 'https://github.com/<owner>/<repo>',
})

export default defineConfig({
  ...vpConfig,
  themeConfig: {
    ...vpConfig.themeConfig,
  },
})
```

### 5. 接入主题样式入口

在 `.vitepress/theme/index.ts` 确保包含：

```ts
import 'uno.css'
import 'virtual:group-icons.css'
```

如果文件不存在，按模板创建并继承默认主题（见参考模板）。

### 6. 验证与回归

按项目脚本执行最小验证：

1. `pnpm lint`（若存在）
2. `pnpm typecheck`（若存在）
3. `pnpm docs:build`（根脚本）或 `pnpm -C docs run build`（子项目脚本）

若命令不存在，使用最接近的可用脚本，并在结果中明确说明替代命令。

## 修改原则

- 优先“增量合并”，不要粗暴重写现有配置。
- 保留用户注释、已有插件与业务配置。
- 路径与导入风格保持与项目一致（`ts`/`mts`、单引号/双引号）。
- 当配置文件存在多个候选时，优先修改实际被脚本使用的文件。
- 若仓库为 monorepo，明确说明改动发生在哪个 package。

## 常见问题

- 仅安装 `@yunyoujun/docs`，但未安装 `unocss` 等配套依赖，导致运行时报模块缺失。
- 在 `themeConfig` 合并时漏掉 `...vpConfig.themeConfig`，导致默认搜索/大纲配置丢失。
- `docs/` 子项目与根目录配置混用，导致改动文件未被实际加载。
- 主题入口未引入 `uno.css`，样式类不生效。
- pnpm workspace 中若存在多个 VitePress 依赖实例，可能出现 TS2345 类型不兼容（私有字段不一致）。可将共享配置先断言为 `unknown`，再断言为当前项目的 `UserConfig`：

```ts
import type { UserConfig } from 'vitepress'

const vpConfig = getVitepressConfig({
  repo: 'https://github.com/<owner>/<repo>',
}) as unknown as UserConfig
```

## 输出格式

最终回复应包含：

1. 改动摘要（做了什么）
2. 变更文件清单
3. 验证命令与结果
4. 后续可选优化（例如 TypeDoc、Mermaid、CI）
