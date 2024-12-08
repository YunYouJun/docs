---
status: dev
repo: YunYouJun/bilibili-cover-generator
link: https://bilibili-cover-generator.yunyoujun.cn
---

# 哔哩哔哩封面生成器

当前状态：<Badge type="warning">{{ $frontmatter.status }}</Badge>

<SiteLinkBadge :link="$frontmatter.link" />
<GitHubBadge :repo="$frontmatter.repo" />

## 背景

我计划尝试在 B 站上投稿视频，并拟定了多个主题。

> [小云视频选材调研问卷｜腾讯文档](https://docs.qq.com/form/page/DWm1pcXR1VGhBV2hB)

但在制作视频之前，我还需要先制作相关封面。

我有个尽可能使用 Web/Node 技术与 `TypeScript` 实现制作投稿视频流程的想法。

因此，在一切开始之前，我打算制作一个哔哩哔哩封面生成器。
并基于它预置日后视频的封面模板。
