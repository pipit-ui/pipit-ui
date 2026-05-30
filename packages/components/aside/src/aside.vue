<template>
  <aside
    :class="bem.b()"
    :style="{ width }"
  >
    <slot />
  </aside>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pipit-ui/hooks'
import type { AsideProps } from './aside'

defineOptions({
  name: 'PtAside',
})

withDefaults(defineProps<AsideProps>(), {
  width: '300px',
})

const bem = useNamespace('aside')
</script>
