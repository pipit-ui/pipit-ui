<template>
  <div
    :class="[
      bem.b(),
      bem.is('border', border),
      bem.is('stripe', stripe),
      bem.is('hover', hover),
    ]"
    :style="rootStyle"
  >
    <div :class="bem.e('header-wrapper')">
      <table :class="bem.e('header')">
        <colgroup>
          <col
            v-for="col in columns"
            :key="col.prop"
            :style="colStyle(col)"
          >
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="col in columns"
              :key="col.prop"
              :class="[
                bem.e('th'),
                bem.is('align-center', col.align === 'center'),
                bem.is('align-right', col.align === 'right'),
                bem.is('sortable', col.sortable),
              ]"
              @click="col.sortable && handleSort(col)"
            >
              <div :class="bem.e('cell')">
                <slot
                  :name="`header-${col.prop}`"
                  :column="col"
                >
                  {{ col.label }}
                </slot>
                <span
                  v-if="col.sortable"
                  :class="bem.e('sort-icon')"
                >
                  <span
                    :class="[
                      bem.e('sort-caret'),
                      bem.is('ascending', sortProp === col.prop && sortOrder === 'ascending'),
                    ]"
                  />
                  <span
                    :class="[
                      bem.e('sort-caret'),
                      bem.is('descending', sortProp === col.prop && sortOrder === 'descending'),
                    ]"
                  />
                </span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <div
      :class="bem.e('body-wrapper')"
      :style="bodyStyle"
    >
      <table :class="bem.e('body')">
        <colgroup>
          <col
            v-for="col in columns"
            :key="col.prop"
            :style="colStyle(col)"
          >
        </colgroup>
        <tbody>
          <tr
            v-for="(row, rowIndex) in sortedData"
            :key="rowKey ? row[rowKey] : rowIndex"
            :class="bem.e('row')"
            @click="handleRowClick(row, rowIndex)"
          >
            <td
              v-for="col in columns"
              :key="col.prop"
              :class="[
                bem.e('td'),
                bem.is('align-center', col.align === 'center'),
                bem.is('align-right', col.align === 'right'),
              ]"
            >
              <div :class="bem.e('cell')">
                <slot
                  :name="col.prop"
                  :row="row"
                  :column="col"
                  :index="rowIndex"
                >
                  {{ formatCell(row, col, rowIndex) }}
                </slot>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        v-if="!data.length && !loading"
        :class="bem.e('empty')"
      >
        <slot name="empty">
          <p :class="bem.e('empty-text')">
            {{ emptyText }}
          </p>
        </slot>
      </div>

      <div
        v-if="loading"
        :class="bem.e('loading')"
      >
        <slot name="loading">
          <div :class="bem.e('loading-spinner')" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@pipit-ui/hooks'
import type { TableColumn } from './table'
import { tableProps, tableEmits } from './table'

defineOptions({
  name: 'PtTable',
})

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)

const bem = useNamespace('table')

const sortProp = ref('')
const sortOrder = ref<'ascending' | 'descending' | null>(null)

const rootStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  return style
})

const bodyStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.maxHeight) {
    style.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight
    style.overflow = 'auto'
  }
  if (props.height) {
    style.overflow = 'auto'
    style.flex = '1'
  }
  return style
})

const colStyle = (col: TableColumn) => {
  const style: Record<string, string> = {}
  if (col.width) {
    style.width = typeof col.width === 'number' ? `${col.width}px` : col.width
  }
  if (col.minWidth) {
    style.minWidth = typeof col.minWidth === 'number' ? `${col.minWidth}px` : col.minWidth
  }
  return style
}

const sortedData = computed(() => {
  if (!sortProp.value || !sortOrder.value) return props.data
  const sorted = [...props.data].sort((a, b) => {
    const va = a[sortProp.value]
    const vb = b[sortProp.value]
    if (va == null && vb == null) return 0
    if (va == null) return -1
    if (vb == null) return 1
    if (typeof va === 'number' && typeof vb === 'number') return va - vb
    return String(va).localeCompare(String(vb))
  })
  if (sortOrder.value === 'descending') sorted.reverse()
  return sorted
})

const formatCell = (row: Record<string, unknown>, col: TableColumn, index: number) => {
  const value = row[col.prop]
  if (col.formatter) return col.formatter(row, col, value, index)
  return value ?? ''
}

const handleRowClick = (row: Record<string, unknown>, index: number) => {
  const col = {} as TableColumn
  emit('row-click', row, col, index)
}

const handleSort = (col: TableColumn) => {
  if (sortProp.value !== col.prop) {
    sortProp.value = col.prop
    sortOrder.value = 'ascending'
  } else {
    sortOrder.value =
      sortOrder.value === 'ascending'
        ? 'descending'
        : sortOrder.value === 'descending'
          ? null
          : 'ascending'
    if (!sortOrder.value) sortProp.value = ''
  }
  emit('sort-change', sortProp.value, sortOrder.value)
}
</script>
