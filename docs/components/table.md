# Table 表格

用于展示大量结构化数据。

## 基础用法

通过 `data` 和 `columns` 属性传入数据和列配置。

```vue
<template>
  <pt-table :data="tableData" :columns="columns" />
</template>

<script lang="ts" setup>
const columns = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' },
  { prop: 'city', label: '城市' },
]

const tableData = [
  { name: '张三', age: 28, city: '北京' },
  { name: '李四', age: 32, city: '上海' },
]
</script>
```

## 带边框和斑马纹

使用 `border` 和 `stripe` 属性增强可读性。

```vue
<template>
  <pt-table :data="tableData" :columns="columns" border stripe />
</template>
```

## 列对齐

通过 `columns` 的 `align` 属性设置列内容对齐方式。

```vue
<script lang="ts" setup>
const columns = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄', align: 'center' },
  { prop: 'price', label: '价格', align: 'right' },
]
</script>
```

## 列宽设置

通过 `width` 和 `minWidth` 设置列宽。

```vue
<script lang="ts" setup>
const columns = [
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'desc', label: '描述', minWidth: 200 },
]
</script>
```

## 排序

在列配置中设置 `sortable: true` 开启排序。

```vue
<template>
  <pt-table :data="tableData" :columns="columns" @sort-change="onSortChange" />
</template>

<script lang="ts" setup>
const columns = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄', sortable: true },
]

const onSortChange = (prop, order) => {
  console.log(prop, order)
}
</script>
```

## 自定义列

使用具名插槽自定义列内容，插槽名为列的 `prop` 值。

```vue
<template>
  <pt-table :data="tableData" :columns="columns">
    <template #status="{ row }">
      <span :style="{ color: row.status === '在线' ? '#67c23a' : '#f56c6c' }">
        {{ row.status }}
      </span>
    </template>
  </pt-table>
</template>
```

## 自定义表头

使用 `header-{prop}` 格式的插槽自定义表头。

```vue
<template>
  <pt-table :data="tableData" :columns="columns">
    <template #header-name>
      <span>自定义姓名表头</span>
    </template>
  </pt-table>
</template>
```

## 格式化内容

通过列配置的 `formatter` 函数格式化显示内容。

```vue
<script lang="ts" setup>
const columns = [
  { prop: 'name', label: '姓名' },
  {
    prop: 'price',
    label: '价格',
    formatter: (row) => `¥${row.price}`,
  },
]
</script>
```

## 固定高度 / 最大高度

使用 `height` 或 `maxHeight` 属性使表格内容可滚动。

```vue
<template>
  <pt-table :data="tableData" :columns="columns" max-height="200" />
</template>
```

## 加载状态

使用 `loading` 属性显示加载遮罩。

```vue
<template>
  <pt-table :data="tableData" :columns="columns" loading />
</template>
```

## 空数据

数据为空时显示默认提示，可通过 `empty-text` 自定义。

```vue
<template>
  <pt-table :data="[]" :columns="columns" empty-text="没有找到数据" />
</template>
```

## API

### Table 属性

| 属性名     | 说明               | 类型                          | 默认值      |
| ---------- | ------------------ | ----------------------------- | ----------- |
| data       | 表格数据           | `Record<string, unknown>[]`   | `[]`        |
| columns    | 列配置             | `TableColumn[]`               | `[]`        |
| border     | 是否显示边框       | `boolean`                     | `false`     |
| stripe     | 是否显示斑马纹     | `boolean`                     | `false`     |
| hover      | 是否悬停高亮       | `boolean`                     | `true`      |
| loading    | 是否显示加载中     | `boolean`                     | `false`     |
| empty-text | 空数据提示文本     | `string`                      | `暂无数据`  |
| row-key    | 行数据的唯一标识   | `string`                      | `''`        |
| height     | 表格固定高度       | `number \| string`            | -           |
| max-height | 表格最大高度       | `number \| string`            | -           |

### TableColumn

| 属性名    | 说明           | 类型                                      | 默认值  |
| --------- | -------------- | ----------------------------------------- | ------- |
| prop      | 字段名         | `string`                                  | -       |
| label     | 列标题         | `string`                                  | -       |
| width     | 列宽           | `number \| string`                        | -       |
| minWidth  | 最小列宽       | `number \| string`                        | -       |
| align     | 对齐方式       | `'left' \| 'center' \| 'right'`          | `left`  |
| sortable  | 是否可排序     | `boolean`                                 | `false` |
| formatter | 格式化函数     | `(row, column, value, index) => string`   | -       |

### Table 事件

| 事件名      | 说明             | 参数                                              |
| ----------- | ---------------- | ------------------------------------------------- |
| row-click   | 行点击时触发     | `(row: Record<string, unknown>, column: TableColumn, index: number)` |
| sort-change | 排序变化时触发   | `(prop: string, order: 'ascending' \| 'descending' \| null)` |

### Table 插槽

| 插槽名          | 说明           | 作用域                              |
| --------------- | -------------- | ----------------------------------- |
| `{prop}`        | 自定义列内容   | `{ row, column, index }`            |
| `header-{prop}` | 自定义表头     | `{ column }`                        |
| empty           | 空数据内容     | -                                   |
| loading         | 加载中内容     | -                                   |
