import type { ExtractPropTypes, PropType } from 'vue'

export interface TableColumn {
  prop: string
  label: string
  width?: number | string
  minWidth?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sortable?: boolean
  formatter?: (row: Record<string, unknown>, column: TableColumn, cellValue: unknown, index: number) => string
}

export const tableProps = {
  data: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<TableColumn[]>,
    default: () => [],
  },
  border: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  hover: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: '暂无数据',
  },
  rowKey: {
    type: String,
    default: '',
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: undefined,
  },
  maxHeight: {
    type: [Number, String] as PropType<number | string>,
    default: undefined,
  },
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>

export const tableEmits = {
  'row-click': (row: Record<string, unknown>, column: TableColumn, index: number) =>
    row !== undefined && column !== undefined && index !== undefined,
  'sort-change': (prop: string, _order: 'ascending' | 'descending' | null) =>
    prop !== undefined,
}

export type TableEmits = typeof tableEmits
