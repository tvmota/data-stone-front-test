<script setup>
const uniqId = window.crypto.randomUUID()
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  toggleTxt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label class="dt-toggle">
    <input
      :id="uniqId"
      type="checkbox"
      class="dt-toggle__input peer"
      :checked="modelValue"
      @change="emit('update:modelValue', $event.target.checked)"
    />
    <label :htmlFor="uniqId" class="dt-toggle__input--hidden"></label>
    <div class="dt-toggle__interactive peer"></div>
    <slot>{{ toggleTxt }}</slot>
  </label>
</template>

<style>
.dt-toggle {
  @apply relative inline-flex cursor-pointer items-center;

  &__input {
    @apply sr-only;

    &--hidden {
      @apply hidden;
    }
  }

  &__interactive {
    @apply h-6
    w-11
    rounded-full
    border
    bg-slate-300
    after:absolute
    after:left-[2px]
    after:top-0.5
    after:h-5
    after:w-5
    after:rounded-full
    after:border
    after:border-gray-300
    after:bg-white
    after:transition-all
    after:content-['']
    peer-checked:bg-primary
    peer-checked:after:translate-x-full
    peer-checked:after:border-white
    peer-focus:ring-green-300;
  }
}
</style>
