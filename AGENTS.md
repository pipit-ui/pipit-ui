# pipit-ui

Vue 3 组件库 monorepo。npm 包名：`pipit-ui`。组件前缀：`Pt`。CSS 命名空间：`pt-`。

## 命令

```bash
pnpm install              # 安装所有 workspace 依赖（使用 shamefully-hoist=true）
pnpm dev                  # 监听构建库（在 packages/pipit-ui 中运行）
pnpm build                # 完整库构建（打包 + ES 模块 + 主题 + 类型）
pnpm build:packages       # 构建所有子包的独立 dist（用于独立发包）
pnpm lint                 # eslint --fix（.ts, .tsx, .vue）
pnpm typecheck            # tsc --noEmit 跨项目引用
pnpm docs:dev             # VitePress 文档开发服务器
pnpm play:dev             # playground 开发服务器（用于手动组件测试）
pnpm clean                # 删除所有 dist 目录
```

完整 `pnpm build` 按顺序执行四步：`build:full`（vite UMD/ESM 打包）→ `build:es`（rollup 逐文件 ES/CJS 模块）→ `build:theme`（复制 SCSS + 编译 CSS）→ `build:types`（tsc 声明文件）。每步可单独运行。

## 独立发包

`pnpm build:packages` 为 `packages/` 下的子包生成独立的 `dist/` 目录，支持独立发布到 npm。每个子包的 `package.json` 已配置：
- `main` / `module` / `types` 指向 `dist/` 产物
- `exports` 支持 tree-shaking（ESM + CJS + 类型声明）
- `files` 只发布 `dist/` 目录

子包之间使用 `workspace:*` 依赖，发布前需替换为实际版本号。

## Monorepo 结构

```
packages/
  pipit-ui/       # 主库包（入口、vite 配置、构建脚本）
  components/      # 所有 UI 组件（button、icon、...）
  hooks/           # 组合式函数（useNamespace）
  utils/           # 工具函数（withInstall、类型守卫）
  constants/       # 共享常量（COMPONENT_PREFIX='Pt'、defaultNamespace='pt'）
  directives/      # 自定义指令
  locale/          # 国际化
  theme-chalk/     # SCSS 样式，BEM 规范，pt- 前缀
  es-entry.ts      # build:es 的 tree-shakeable 入口
internal/build/    # 构建配置工具（目前较简单）
docs/              # VitePress 文档站点
play/              # playground 应用，用于开发测试
```

workspace 包使用 `workspace:*` 协议。所有包均为 `type: "module"`。

## 添加新组件

1. 创建 `packages/components/<name>/src/<name>.vue` 和 `<name>.ts`（props/类型）
2. 创建 `packages/components/<name>/index.ts`，使用 `withInstall`：
   ```ts
   import { withInstall } from '@pipit-ui/utils'
   import Comp from './src/<name>.vue'
   export const Pt<Name> = withInstall(Comp)
   export default Pt<Name>
   export type { ... } from './src/<name>'
   ```
3. 从 `packages/components/index.ts` 重新导出
4. 在 `packages/pipit-ui/index.ts`（添加到 `installer` 数组）和 `component.ts` 中注册
5. 在 `packages/theme-chalk/src/<name>.scss` 添加 SCSS 文件，并在 `index.scss` 中 `@use` 引入
6. 将 SCSS 文件名添加到 `packages/pipit-ui/scripts/copy-theme.mjs` 的 `entries` 数组中

组件 `.vue` 文件使用 `<script lang="ts" setup>` 作为 setup 脚本，使用单独的 `<script lang="ts">` 块用于非响应式导出。使用 `defineOptions({ name: 'Pt<Name>' })` 设置组件名。使用 `useNamespace('<name>')` 生成 BEM 类名。

## TypeScript

项目引用：`tsconfig.json` → `tsconfig.web.json`（Vue/库代码）+ `tsconfig.node.json`（构建工具）。两者均继承 `tsconfig.base.json`。

目标：ES2020。模块：ESNext，bundler 解析。JSX：preserve，Vue JSX import source。

`typecheck` 在根目录运行 `tsc --noEmit`。

## 样式

SCSS + BEM。使用 `@pipit-ui/hooks` 中的 `useNamespace` 生成类名：
- `bem.b()` → `pt-button`（块）
- `bem.m('primary')` → `pt-button--primary`（修饰符）
- `bem.e('icon')` → `pt-button__icon`（元素）
- `bem.is('disabled', disabled)` → `is-disabled`（状态）

SCSS 变量在 `packages/theme-chalk/src/common/var.scss`。共享 mixins 在 `packages/theme-chalk/src/mixins/mixins.scss`。

## 注意事项

- `.npmrc` 设置了 `shamefully-hoist=true` — 所有依赖提升到根 `node_modules`
- `.npmrc` 设置了 `strict-peer-dependencies=false` — 安装时忽略 peer 依赖冲突
- 指定了 `packageManager: pnpm@9.15.6` — 使用 corepack 时会锁定此版本
- vite 配置使用 `emptyOutDir: false` — 如产物过时，需先运行 `pnpm clean` 再完整重建
- `build:es` 入口是 `packages/es-entry.ts`，而非 `packages/pipit-ui/index.ts`
- `build:types` 运行两次 tsc，分别将类型文件输出到 `dist/es/` 和 `dist/lib/`，与模块文件同目录
- UMD 包名是 `PipitUI`（定义在 `packages/pipit-ui/vite.config.ts`）
- `vue` 在所有构建输出中始终为 external
- 根目录无 ESLint 配置文件 — `pnpm lint` 可能需要先添加配置文件才能工作
