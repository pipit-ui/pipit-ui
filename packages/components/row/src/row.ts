import type { InjectionKey, Ref } from 'vue'

export const RowJustify = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'] as const
export type RowJustify = (typeof RowJustify)[number]

export const RowAlign = ['top', 'middle', 'bottom'] as const
export type RowAlign = (typeof RowAlign)[number]

export interface RowProps {
  gutter?: number
  justify?: RowJustify
  align?: RowAlign
  tag?: string
}

export interface RowInjectionContext {
  gutter: Ref<number>
}

export const ROW_INJECTION_KEY: InjectionKey<RowInjectionContext> = Symbol('row')
