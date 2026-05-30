<template>
  <component
    :is="tag"
    :class="[
      bem.b(),
      bem.is(justify, justify !== 'start'),
      align ? bem.is(`align-${align}`) : '',
    ]"
    :style="style"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, provide, toRef } from 'vue'
import { useNamespace } from '@pipit-ui/hooks'
import { ROW_INJECTION_KEY } from './row'
import type { RowProps } from './row'

defineOptions({
  name: 'PtRow',
})

const props = withDefaults(defineProps<RowProps>(), {
  gutter: 0,
  justify: 'start',
  tag: 'div',
})

const bem = useNamespace('row')

provide(ROW_INJECTION_KEY, {
  gutter: toRef(props, 'gutter'),
})

const style = computed(() => {
  const gutter = props.gutter
  if (gutter) {
    return {
      marginLeft: `${-gutter / 2}px`,
      marginRight: `${-gutter / 2}px`,
    }
  }
  return {}
})
</script>
