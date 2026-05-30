<template>
  <section
    :class="bem.b()"
    :style="style"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { computed, useSlots, type VNode } from 'vue'
import { useNamespace } from '@pipit-ui/hooks'
import type { ContainerProps } from './container'

defineOptions({
  name: 'PtContainer',
})

const props = defineProps<ContainerProps>()

const bem = useNamespace('container')
const slots = useSlots()

const isVertical = computed(() => {
  if (props.direction === 'vertical') return true
  if (props.direction === 'horizontal') return false
  if (slots.default) {
    const children: VNode[] = slots.default()
    return children.some((child) => {
      const tag = (child.type as any)?.name || ''
      return tag === 'PtHeader' || tag === 'PtFooter'
    })
  }
  return false
})

const style = computed(() => ({
  flexDirection: isVertical.value ? 'column' : 'row',
}))
</script>
