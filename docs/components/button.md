# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```vue
<template>
  <mo-button>Default</mo-button>
  <mo-button type="primary">Primary</mo-button>
  <mo-button type="success">Success</mo-button>
  <mo-button type="info">Info</mo-button>
  <mo-button type="warning">Warning</mo-button>
  <mo-button type="danger">Danger</mo-button>
</template>
```

## 不同尺寸

使用 `size` 属性控制按钮尺寸。

```vue
<template>
  <mo-button size="large">Large</mo-button>
  <mo-button size="default">Default</mo-button>
  <mo-button size="small">Small</mo-button>
</template>
```

## 禁用状态

使用 `disabled` 属性禁用按钮。

```vue
<template>
  <mo-button disabled>Disabled</mo-button>
</template>
```

## API

### Button 属性

| 属性名    | 说明     | 类型      | 默认值      |
| --------- | -------- | --------- | ----------- |
| type      | 按钮类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `default` |
| size      | 按钮尺寸 | `'large' \| 'default' \| 'small'` | `default` |
| disabled  | 是否禁用 | `boolean` | `false`     |
| loading   | 加载状态 | `boolean` | `false`     |
| round     | 圆角按钮 | `boolean` | `false`     |
| circle    | 圆形按钮 | `boolean` | `false`     |
| plain     | 朴素按钮 | `boolean` | `false`     |
| text      | 文字按钮 | `boolean` | `false`     |

### Button 事件

| 事件名 | 说明           | 参数          |
| ------ | -------------- | ------------- |
| click  | 点击按钮时触发 | `(event: MouseEvent)` |
