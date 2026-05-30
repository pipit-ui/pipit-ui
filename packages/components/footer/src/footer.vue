<template>
  <footer
    :class="bem.b()"
    :style="{ height }"
  >
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pipit-ui/hooks'
import type { FooterProps } from './footer'

defineOptions({
  name: 'PtFooter',
})

withDefaults(defineProps<FooterProps>(), {
  height: '60px',
})

const bem = useNamespace('footer')
</script>
