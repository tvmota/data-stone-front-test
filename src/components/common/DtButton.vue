<script setup>
import { computed } from 'vue'

const props = defineProps({
  buttonType: {
    type: String,
    default: 'button'
  },
  buttonText: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'sm'
  }
})

const getVariantClass = computed(() => {
  const variants = ['primary', 'secondary', 'neutral']
  if (variants.includes(props.variant.toLowerCase())) {
    return `dt-btn__${props.variant}`
  }

  return `dt-btn__primary`
})

const getSizeClass = computed(() => {
  const sizes = ['sm', 'md', 'lg']
  if (sizes.includes(props.size.toLowerCase())) {
    return `dt-btn__${props.size}`
  }

  return `dt-btn__sm`
})
</script>

<template>
  <button class="dt-btn" :class="[getVariantClass, getSizeClass]" :type="buttonType">
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<style>
.dt-btn {
  @apply rounded-md
    font-bold
    uppercase
    shadow-md
  text-white
    transition-all
    hover:shadow-md
    focus:shadow-none
    active:shadow-none
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:shadow-none;

  &__sm {
    @apply py-2 px-4 text-xs;
  }

  &__md {
    @apply py-3 px-6 text-sm;
  }

  &__lg {
    @apply py-3.5 px-7 text-base;
  }

  &__primary {
    @apply bg-primary hover:shadow-primary active:opacity-[0.9] focus:opacity-[0.9];
  }

  &__secondary {
    @apply bg-secondary hover:shadow-secondary active:opacity-[0.75] focus:opacity-[0.75];
  }

  &__neutral {
    @apply bg-neutral hover:shadow-neutral;
  }
}
</style>
