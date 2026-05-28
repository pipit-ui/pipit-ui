# 快速上手

## 全局引入

```ts
// main.ts
import { createApp } from 'vue'
import PloverUI from 'pipit-ui'
import 'pipit-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(PloverUI)
app.mount('#app')
```

## 按需引入

```ts
import { MoButton } from 'pipit-ui'
import 'pipit-ui/dist/index.css'
```

## 使用组件

```vue
<template>
  <mo-button type="primary">Hello World</mo-button>
</template>
```
