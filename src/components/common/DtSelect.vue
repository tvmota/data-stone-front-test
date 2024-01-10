<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  errorMsg: {
    type: String,
    default: ''
  },
  fieldName: {
    type: String,
    required: true
  },
  fieldPlaceholder: {
    type: String,
    default: ''
  },
  fieldRequired: {
    type: Boolean,
    default: true
  },
  hasError: {
    type: Boolean,
    default: false
  },
  labelTxt: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true
  },
  size: {
    type: String,
    default: 'sm'
  }
})

const getSizeClass = computed(() => {
  const sizes = ['sm', 'md', 'lg']
  if (sizes.includes(props.size.toLowerCase())) {
    return `dt-input__${props.size}`
  }

  return `dt-btn__sm`
})
</script>

<template>
  <div class="dt-select">
    <label class="dt-select--label" :class="[getSizeClass]" :for="fieldName">{{ labelTxt }}</label>
    <select
      :required="fieldRequired"
      :name="fieldName"
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary bg-slate-200"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled :selected="!modelValue">{{ fieldPlaceholder || labelTxt }}</option>
      <template v-if="options.length > 0">
        <option
          v-for="o in options"
          :key="o.value"
          :value="o.value"
          :selected="modelValue === `${o.value}`"
        >
          {{ o.label }}
        </option>
      </template>
    </select>
  </div>
</template>

<style>
.dt-select {
  @apply mb-4;

  &--label {
    @apply block text-primary font-bold mb-2;
  }

  &__field {
    @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary;

    &__error {
      @apply border-red-500;

      &--msg {
        @apply flex items-center font-medium tracking-wide text-red-500 text-xs mt-1;
      }
    }
  }

  &__sm {
    @apply text-sm;

    .dt-input__field {
      @apply py-2 px-2;
    }
  }

  &__md {
    @apply text-base;

    .dt-input__field {
      @apply py-2 px-3;
    }
  }

  &__lg {
    @apply text-lg;

    .dt-input__field {
      @apply py-3 px-5;
    }
  }
}
</style>
