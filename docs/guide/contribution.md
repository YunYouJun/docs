# 参与贡献

如果您想要参与贡献，欢迎直接提交 [PR | GitHub](https://github.com/YunYouJun/docs/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen)。

## 本地开发

请使用 [pnpm](https://pnpm.io/)。

```bash
# 开启 corepack，以使用与 package.json packageManager 一致的 pnpm 版本。
corepack enable
```

```bash [pnpm]
# 安装依赖
pnpm i
```

::: code-group

```bash [启动本地文档]
pnpm docs:dev
```

```bash [构建文档]
pnpm docs:build
```

```bash [预览文档]
pnpm docs:preview
```

:::

::: code-group

```bash [ESLint 格式化代码]
pnpm lint --fix
```

```bash [vue-tsc 类型检查]
pnpm typecheck
```

:::

修改位于 `docs` 目录下的 `.md` 文件即可。

## 联系我

你也可以右上角的 [B站私信](https://space.bilibili.com/1579790)、[`QQ群`](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Znfp7iGZpYjAJLIUlB6lEK-b9taKuK0h&authKey=OjWij7kKhi%2Bvc8JsHVdYm9Q8pBIF4tClK8ulupn28MTZ8jDyPhZWCB8q7K7u9PTT&noverify=0&group_code=1050458482) 或 [`邮件`](mailto:me@yunyoujun.cn) 联系我。
