<script setup>
import { ref } from 'vue'
const showResults = ref(false)
</script>
<template>
  <section class="dt-search">
    <section class="dt-search__field">
      <input
        class="dt-search__field__input"
        name="fieldName"
        placeholder="fieldPlaceholder"
        type="text"
        @blur="showResults = true"
      />
      <v-icon class="dt-search__field__icon" name="oi-search" :scale="1.4" />
    </section>
    <ul v-show="showResults" class="dt-search__results" @mouseleave="showResults = false">
      <li>asdsadasd</li>
      <li>asdsadasd</li>
      <li>asdsadasd</li>
      <li>asdsadasd</li>
      <li>asdsadasd</li>
      <li>asdsadasd</li>
      <li>asdsadasd</li>
    </ul>
  </section>
</template>

<style>
.dt-search {
  @apply w-full h-auto relative inline-block mb-4;

  &__field {
    @apply w-full h-full;

    &__input {
      @apply w-full pr-3 pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary;
    }

    &__icon {
      @apply absolute;
      left: 8px;
      top: calc(50% - (1.68rem / 2));
    }
  }

  &__results {
    @apply absolute border border-slate-300 z-10 right-0 left-0 bg-white flex flex-col gap-1 shadow-xl mt-1 rounded-sm max-h-36 overflow-y-auto;

    li {
      @apply cursor-pointer hover:bg-slate-300 pl-3 py-1;
    }
  }
}
</style>
