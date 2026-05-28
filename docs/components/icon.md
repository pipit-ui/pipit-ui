# Icon 图标

图标组件。

## 基础用法

```vue
<template>
  <mo-icon :size="20">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  </mo-icon>
</template>
```

## API

### Icon 属性

| 属性名 | 说明     | 类型               | 默认值    |
| ------ | -------- | ------------------ | --------- |
| color  | 图标颜色 | `string`           | -         |
| size   | 图标大小 | `number \| string` | -         |
