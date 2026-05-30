<template>
  <component
    :is="tag"
    :class="classes"
    :style="style"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useNamespace } from '@pipit-ui/hooks'
import { ROW_INJECTION_KEY } from '../../row/src/row'
import type { ColProps, ColSizeObject } from './col'

defineOptions({
  name: 'PtCol',
})

const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0,
  push: 0,
  pull: 0,
  tag: 'div',
})

const bem = useNamespace('col')
const rowContext = inject(ROW_INJECTION_KEY, { gutter: computed(() => 0) })

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const classes = computed(() => {
  const classList: string[] = [bem.b()]

  if (props.span !== 24) {
    classList.push(bem.m(`${props.span}`))
  }
  if (props.offset) {
    classList.push(bem.m(`offset-${props.offset}`))
  }
  if (props.push) {
    classList.push(bem.m(`push-${props.push}`))
  }
  if (props.pull) {
    classList.push(bem.m(`pull-${props.pull}`))
  }

  for (const bp of breakpoints) {
    const val = props[bp]
    if (typeof val === 'number') {
      classList.push(bem.m(`${bp}-${val}`))
    } else if (typeof val === 'object' && val !== null) {
      const sizeObj = val as ColSizeObject
      if (sizeObj.span !== undefined) {
        classList.push(bem.m(`${bp}-${sizeObj.span}`))
      }
      if (sizeObj.offset !== undefined) {
        classList.push(bem.m(`${bp}-offset-${sizeObj.offset}`))
      }
      if (sizeObj.push !== undefined) {
        classList.push(bem.m(`${bp}-push-${sizeObj.push}`))
      }
      if (sizeObj.pull !== undefined) {
        classList.push(bem.m(`${bp}-pull-${sizeObj.pull}`))
      }
    }
  }

  return classList
})

const style = computed(() => {
  const gutter = rowContext.gutter.value
  if (gutter) {
    return {
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    }
  }
  return {}
})
</script>
