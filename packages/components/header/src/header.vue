<template>
  <header
    :class="bem.b()"
    :style="{ height }"
  >
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pipit-ui/hooks'
import type { HeaderProps } from './header'

defineOptions({
  name: 'PtHeader',
})

withDefaults(defineProps<HeaderProps>(), {
  height: '60px',
})

const bem = useNamespace('header')
</script>
