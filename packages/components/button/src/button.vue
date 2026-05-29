<template>
  <button
    ref="_ref"
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('disabled', disabled),
      bem.is('loading', loading),
      bem.is('round', round),
      bem.is('circle', circle),
      bem.is('plain', plain),
      bem.is('text', text),
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <span v-if="loading" :class="bem.e('loading')"></span>
    <span v-if="$slots.icon && !loading" :class="bem.e('icon')">
      <slot name="icon" />
    </span>
    <span :class="bem.e('content')">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@pipit-ui/hooks'
import type { ButtonProps, ButtonType, ButtonSize } from './button'

defineOptions({
  name: 'PtButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default' as ButtonType,
  size: 'default' as ButtonSize,
  disabled: false,
  loading: false,
  round: false,
  circle: false,
  plain: false,
  text: false,
  nativeType: 'button',
})

const emit = defineEmits<{
  click: [evt: MouseEvent]
}>()

const _ref = ref<HTMLButtonElement>()
const bem = useNamespace('button')

const handleClick = (evt: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', evt)
  }
}
</script>
