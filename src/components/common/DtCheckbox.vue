<script setup>
const uniqId = window.crypto.randomUUID()
const emit = defineEmits(['update:modelValue', 'handleChange'])

const props = defineProps({
  hasModel: {
    type: Boolean,
    default: true
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  labelTxt: {
    type: String,
    default: ''
  }
})

const handleChange = (checked) => {
  if (props.hasModel) {
    emit('update:modelValue', checked)
  } else {
    emit('handleChange', checked)
  }
}
</script>
<template>
  <div class="dt-checkbox">
    <input
      :id="uniqId"
      type="checkbox"
      :checked="modelValue"
      class="dt-checkbox__input peer disabled:border-steel-400 disabled:bg-steel-400"
      @change="handleChange($event.target.checked)"
    />
    <label :htmlFor="uniqId">
      <slot>{{ labelTxt }}</slot>
    </label>
    <svg
      class="dt-checkbox__icon peer-checked:block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
</template>

<style>
.dt-checkbox {
  @apply flex gap-2 relative;

  &__input {
    @apply shrink-0
    appearance-none
    w-5
    h-5
    rounded
    border-2
    border-primary
    bg-white
    mt-1
    checked:bg-primary
    checked:border-0
    focus:outline-none
    focus:ring-offset-0
    focus:ring-2 focus:ring-blue-100;
  }

  &__icon {
    @apply absolute w-5 h-5 mt-1 hidden pointer-events-none;
  }
}
</style>
