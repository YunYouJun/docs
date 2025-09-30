---
repo: YunYouJun/tauri-vite-vue
---

# vitesse-tauri

TODO: 重命名 tauri-vite-vue -> vitesse-tauri

GitHub: [vitesse-tauri](https://github.com/YunYouJun/tauri-vite-vue)

::: tip

推荐使用 Vite 作为基础模板，尝试使用 Nuxt 增加了许多配置复杂性，官方文档提供的配置还是旧版本，

> [Nuxt | Tauri](https://tauri.app/start/frontend/nuxt/)

:::

## 自定义

### 修改图标

```bash
# https://tauri.app/distribute/google-play/#changing-app-icon
pnpm tauri icon /path/to/app-icon.png
```

## 构建

### 构建 APK

```bash
# https://tauri.app/distribute/google-play/#build-apks
pnpm tauri android build --apk
```

## CheckList

## 其他

考虑到踩了许多坑和生态成熟度，打算先使用 [Capacitor](https://capacitorjs.com/) 作为 Web 构建 App 的方案。

- [Nuxt Ionic](https://ionic.nuxtjs.org/)
