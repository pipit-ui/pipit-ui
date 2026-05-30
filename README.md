# Pipit UI

基于 Vue 3 的高质量 UI 组件库。

[![npm version](https://img.shields.io/npm/v/pipit-ui.svg)](https://www.npmjs.com/package/pipit-ui)
[![npm downloads](https://img.shields.io/npm/dm/pipit-ui.svg)](https://www.npmjs.com/package/pipit-ui)
[![license](https://img.shields.io/npm/l/pipit-ui.svg)](https://github.com/pipit-ui/pipit-ui/blob/main/LICENSE)

## 特性

- **TypeScript** - 使用 TypeScript 编写，提供完整类型定义
- **可定制** - 基于 SCSS 的主题系统，支持深度定制
- **按需加载** - 支持 Tree Shaking，只打包使用的组件
- **高性能** - 基于 Vue 3 Composition API，优化渲染性能

## 安装

```bash
npm install pipit-ui
```

## 快速开始

### 完整引入

```ts
import { createApp } from 'vue'
import PipitUI from 'pipit-ui'
import 'pipit-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(PipitUI)
app.mount('#app')
```

### 按需引入

```vue
<template>
  <PtButton type="primary">按钮</PtButton>
</template>

<script setup lang="ts">
import { PtButton } from 'pipit-ui'
import 'pipit-ui/dist/theme-chalk/button.css'
</script>
```

## 组件

| 组件 | 说明 | 版本 |
|------|------|------|
| Button 按钮 | 常用的操作按钮 | - |
| Icon 图标 | 语义化的矢量图形 | - |
| Table 表格 | 用于展示多条结构化数据 | - |
| Row / Col 布局 | 24 分栏栅格布局系统 | - |
| Container 容局 | 用于搭建页面的基本结构 | - |

## 文档

- [在线文档](https://pipit-ui.github.io/pipit-ui)
- [快速开始](https://pipit-ui.github.io/pipit-ui/guide/)
- [组件预览](https://pipit-ui.github.io/pipit-ui/components/button)

## 开发

```bash
pnpm install          # 安装依赖
pnpm docs:dev         # 启动文档站点
pnpm play:dev         # 启动 playground
pnpm build            # 构建库
pnpm typecheck        # 类型检查
pnpm lint             # 代码检查
```

## Monorepo 结构

```
packages/
├── pipit-ui/       # 主库包（入口、构建脚本）
├── components/     # UI 组件（button、icon、table、row、col、container...）
├── hooks/          # 组合式函数（useNamespace）
├── utils/          # 工具函数（withInstall、类型守卫）
├── constants/      # 共享常量（COMPONENT_PREFIX='Pt'）
├── directives/     # 自定义指令
├── locale/         # 国际化
└── theme-chalk/    # SCSS 样式，BEM 规范，pt- 前缀
docs/               # VitePress 文档站点
play/               # Playground，用于开发测试
```

## 浏览器支持

| Chrome | Firefox | Safari | Edge |
|--------|---------|--------|------|
| >= 87  | >= 78   | >= 13  | >= 88 |

## 许可证

[MIT](./LICENSE)
