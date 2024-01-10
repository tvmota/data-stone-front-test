<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/custom/AppHeader.vue'
import AppFooter from '@/components/custom/AppFooter.vue'
import AppMenu from '@/components/custom/AppMenu.vue'

const menuSts = ref(false)

const handleMenuOpen = (param) => {
  menuSts.value = param
}
</script>

<template>
  <section class="app__container">
    <AppHeader :menu-show="menuSts" @menu-open="handleMenuOpen" />

    <AppMenu :menu-show="menuSts" @menu-close="handleMenuOpen(false)" />
    <main class="app__main">
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
</style>
