<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@pipit-ui/hooks'

defineOptions({
  name: 'PtIcon',
})

const props = withDefaults(
  defineProps<{
    color?: string
    size?: number | string
  }>(),
  {
    color: undefined,
    size: undefined,
  }
)

const bem = useNamespace('icon')

const style = computed(() => {
  const result: Record<string, string> = {}
  if (props.color) result.color = props.color
  if (props.size) result.fontSize = typeof props.size === 'number' ? `${props.size}px` : props.size
  return result
})
</script>
