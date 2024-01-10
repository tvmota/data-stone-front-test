<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/custom/AppHeader.vue'
import AppFooter from '@/components/custom/AppFooter.vue'
import AppMenu from '@/components/custom/AppMenu.vue'
import DtButton from './components/common/DtButton.vue'
import DtInput from './components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'

const menuSts = ref(false)
const modelEx = ref('Xablau')
const chkModel = ref(!true)

const handleMenuOpen = (param) => {
  menuSts.value = param
}

const btn1 = () => console.log('click btn 1')
const btn2 = () => console.log('click btn 2')
</script>

<template>
  <section class="app__container">
    <AppHeader @menu-open="handleMenuOpen" />

    <AppMenu :show-menu="menuSts" />
    <main class="app__main">
      <DtButton variant="primary" size="sm" @click="btn1">Button 1</DtButton>
      <DtButton variant="secondary" size="sm" @click="btn2">Button 2</DtButton>
      <DtToggle v-model="chkModel">text</DtToggle>

      <DtInput
        v-model="modelEx"
        field-name="teste"
        field-placeholder="teste"
        label-txt="Teste"
        :field-required="true"
        :has-error="true"
        error-msg="Teste"
      />
      <RouterView />
    </main>
    <AppFooter />
  </section>
</template>

<style>
.app {
  &__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: var(--headerHeight) 1fr var(--footerHeight);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
  }

  &__main {
    @apply p-4;
    grid-area: 2 / 1 / 3 / 2;
  }
}

.btn {
  @apply rounded-md
    font-bold
    uppercase
    shadow-md
  text-white
    transition-all
    hover:shadow-md
    focus:opacity-[0.85]
    focus:shadow-none
    active:opacity-[0.85]
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
    @apply bg-primary hover:shadow-primary;
  }

  &__secondary {
    @apply bg-secondary hover:shadow-secondary;
  }

  &__neutral {
    @apply bg-neutral hover:shadow-neutral;
  }
}
</style>
