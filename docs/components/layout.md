# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

> 组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

## 基础布局

使用列创建基础网格布局。通过 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```vue
<template>
  <pt-row>
    <pt-col :span="24"><div class="grid-content ep-bg-purple-dark" /></pt-col>
  </pt-row>
  <pt-row>
    <pt-col :span="12"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="12"><div class="grid-content ep-bg-purple-light" /></pt-col>
  </pt-row>
  <pt-row>
    <pt-col :span="8"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="8"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="8"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
  </pt-row>
</template>
```

## 分栏间隔

支持列间距。行提供 `gutter` 属性来指定列之间的间距，其默认值为 0。

```vue
<template>
  <pt-row :gutter="20">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
</template>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

```vue
<template>
  <pt-row :gutter="20">
    <pt-col :span="16"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="8"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row :gutter="20">
    <pt-col :span="8"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="8"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="4"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="4"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
</template>
```

## 列偏移

通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

```vue
<template>
  <pt-row :gutter="20">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6" :offset="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row :gutter="20">
    <pt-col :span="6" :offset="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6" :offset="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row :gutter="20">
    <pt-col :span="12" :offset="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
</template>
```

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。您可以通过 `justify` 属性来定义子元素的排版方式，其取值为 `start`、`center`、`end`、`space-between`、`space-around` 或 `space-evenly`。

```vue
<template>
  <pt-row class="row-bg">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row class="row-bg" justify="center">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row class="row-bg" justify="end">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row class="row-bg" justify="space-between">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row class="row-bg" justify="space-around">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
  <pt-row class="row-bg" justify="space-evenly">
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple-light" /></pt-col>
    <pt-col :span="6"><div class="grid-content ep-bg-purple" /></pt-col>
  </pt-row>
</template>
```

## 响应式布局

参照了 Bootstrap 的响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

```vue
<template>
  <pt-row :gutter="10">
    <pt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple" />
    </pt-col>
    <pt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple-light" />
    </pt-col>
    <pt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple" />
    </pt-col>
    <pt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple-light" />
    </pt-col>
  </pt-row>
</template>
```

## Row API

### Row Attributes

| 属性名  | 说明                       | 类型     | 默认值    |
| ------- | -------------------------- | -------- | --------- |
| gutter  | 栅格间隔                   | `number` | `0`       |
| justify | flex 布局下的水平排列方式   | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `start` |
| align   | flex 布局下的垂直排列方式   | `'top' \| 'middle' \| 'bottom'` | —         |
| tag     | 自定义元素标签             | `string` | `div`     |

### Row Slots

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 自定义默认内容 | Col    |

## Col API

### Col Attributes

| 属性名 | 说明                       | 类型                 | 默认值 |
| ------ | -------------------------- | -------------------- | ------ |
| span   | 栅格占据的列数             | `number`             | `24`   |
| offset | 栅格左侧的间隔格数         | `number`             | `0`    |
| push   | 栅格向右移动格数           | `number`             | `0`    |
| pull   | 栅格向左移动格数           | `number`             | `0`    |
| xs     | `<768px` 响应式栅格数      | `number \| object`   | —      |
| sm     | `≥768px` 响应式栅格数      | `number \| object`   | —      |
| md     | `≥992px` 响应式栅格数      | `number \| object`   | —      |
| lg     | `≥1200px` 响应式栅格数     | `number \| object`   | —      |
| xl     | `≥1920px` 响应式栅格数     | `number \| object`   | —      |
| tag    | 自定义元素标签             | `string`             | `div`  |

### Col Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
