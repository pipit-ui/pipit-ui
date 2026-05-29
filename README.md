# Pipit UI

基于 Vue 3 的高质量组件库。

[![npm version](https://img.shields.io/npm/v/pipit-ui.svg)](https://www.npmjs.com/package/pipit-ui)
[![npm downloads](https://img.shields.io/npm/dm/pipit-ui.svg)](https://www.npmjs.com/package/pipit-ui)
[![license](https://img.shields.io/npm/l/pipit-ui.svg)](https://github.com/basicmo/pipit-ui/blob/main/LICENSE)

## 特性

- 🎯 **TypeScript** - 使用 TypeScript 编写，提供完整类型定义
- 🎨 **可定制** - 基于 SCSS 的主题系统，支持深度定制
- 📦 **按需加载** - 支持 Tree Shaking，只打包使用的组件
- ⚡ **高性能** - 基于 Vue 3 Composition API，优化渲染性能

## 安装

```bash
# npm
npm install pipit-ui

# pnpm
pnpm add pipit-ui

# yarn
yarn add pipit-ui
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

## 组件列表

| 组件 | 说明 |
|------|------|
| PtButton | 按钮 |
| PtIcon | 图标 |

## 开发

```bash
# 安装依赖
pnpm install

# 启动文档站点
pnpm docs:dev

# 启动 playground
pnpm play:dev

# 构建库
pnpm build

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint
```

## Monorepo 结构

```
packages/
├── pipit-ui/       # 主库包
├── components/     # UI 组件
├── hooks/          # 组合式函数
├── utils/          # 工具函数
├── constants/      # 共享常量
├── directives/     # 自定义指令
├── locale/         # 国际化
└── theme-chalk/    # SCSS 样式主题
docs/               # VitePress 文档站点
play/               # 开发测试用 playground
```

## 浏览器支持

| 浏览器 | 版本 |
|---------|------|
| Chrome | >= 87 |
| Firefox | >= 78 |
| Safari | >= 13 |
| Edge | >= 88 |

## 许可证

[MIT](./LICENSE)
