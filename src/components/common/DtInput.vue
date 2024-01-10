<script setup>
import { computed } from 'vue';

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
  fieldType: {
    type: String,
    default: 'text'
  },
  fieldPlaceholder: {
    type: String,
    default: ''
  },
  fieldRequired: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  },
  labelTxt: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
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
  <div class="dt-input">
    <label class="dt-input--label" :class="[getSizeClass]" :for="fieldName">{{ labelTxt }}</label>
    <input
      class="dt-input__field" 
      :class="{'dt-input__field__error': hasError && fieldRequired }"
      name: fieldName
      :placeholder="fieldPlaceholder"
      :type="fieldType"
      :value="modelValue"
      :required="fieldRequired"
      @input="emit('update:modelValue', $event.target.value)">
    <span v-if="hasError && fieldRequired" class="dt-input__field__error--msg">
      {{ errorMsg }}
		</span>
  </div>
</template>

<style>
.dt-input {
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
