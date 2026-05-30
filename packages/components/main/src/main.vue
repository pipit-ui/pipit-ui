<template>
  <main :class="bem.b()">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pipit-ui/hooks'

defineOptions({
  name: 'PtMain',
})

const bem = useNamespace('main')
</script>
