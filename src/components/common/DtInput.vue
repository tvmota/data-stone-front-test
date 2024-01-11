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
  hasIcon: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
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

  return `dt-input__sm`
})

const getHasIconStyle = computed(() => {
  return props.hasIcon ? { paddingLeft: '2.5rem', paddingRight: '.5rem' } : ''
})
</script>

<template>
  <div class="dt-input" :class="[getSizeClass]">
    <label class="dt-input--label" :class="[getSizeClass]" :for="fieldName">{{ labelTxt }}</label>
    <input
      class="dt-input__field"
      :class="[`${hasError && fieldRequired ? 'dt-input__field__error' : ''}`]"
      :name="fieldName"
      :placeholder="fieldPlaceholder || labelTxt"
      :type="fieldType"
      :value="modelValue"
      :required="fieldRequired"
      :style="getHasIconStyle"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <v-icon v-if="hasIcon" class="dt-input__field__icon" :name="icon" :scale="1.4" />
    <span v-if="hasError && fieldRequired" class="dt-input__field__error--msg">
      {{ errorMsg }}
    </span>
  </div>
</template>

<style>
.dt-input {
  @apply mb-4 relative;

  &--label {
    @apply block text-primary font-bold mb-2;
  }

  &__field {
    @apply w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary;

    &__error {
      @apply border-red-500;

      &--msg {
        @apply flex items-center font-medium tracking-wide text-red-500 text-xs mt-1;
      }
    }

    &__has-icon {
      .dt-input__field {
        @apply pl-10 pr-2;
      }
    }

    &__icon {
      @apply absolute;
      left: 8px;
      top: calc(50% - (1.64rem / 2));
    }
  }

  &__sm {
    .dt-input--label {
      @apply text-sm;
    }

    .dt-input__field {
      @apply py-2 px-2 text-sm;
    }
  }

  &__md {
    .dt-input--label {
      @apply text-base;
    }

    .dt-input__field {
      @apply py-2 px-3 text-base;
    }
  }

  &__lg {
    .dt-input--label {
      @apply text-lg;
    }

    .dt-input__field {
      @apply py-3 px-5 text-lg;
    }
  }
}
</style>
