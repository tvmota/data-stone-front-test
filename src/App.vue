<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { getItem } from '@/utils/storage'
import { productStorageKey, clientStorageKey, associateStorageKey } from '@/utils/keys'
import { useProductsStore } from '@/stores/products'
import { useClientsStore } from '@/stores/clients'
import { useAssociationsStore } from '@/stores/associations'
import AppHeader from '@/components/custom/AppHeader.vue'
import AppFooter from '@/components/custom/AppFooter.vue'
import AppMenu from '@/components/custom/AppMenu.vue'

const productsStore = useProductsStore()
const clientsStore = useClientsStore()
const associationsStore = useAssociationsStore()
const menuSts = ref(false)

const handleMenuOpen = (param) => {
  menuSts.value = param
}
const initStore = () => {
  const prdSrc = getItem(productStorageKey)
  const cliSrc = getItem(clientStorageKey)
  const assocSrc = getItem(associateStorageKey)

  if (prdSrc) {
    const { products = [] } = JSON.parse(prdSrc)
    productsStore.set(products)
  }

  if (cliSrc) {
    const { clients = [] } = JSON.parse(cliSrc)
    clientsStore.set(clients)
  }

  if (assocSrc) {
    const { associations = [] } = JSON.parse(assocSrc)
    associationsStore.set(associations)
  }
}

initStore()
</script>

<template>
  <section class="app__container">
    <AppHeader :menu-show="menuSts" @menu-open="handleMenuOpen" />

    <AppMenu :menu-show="menuSts" @menu-close="handleMenuOpen(false)" />
    <main class="app__main">
      <RouterView />
    </main>
    <AppFooter footer-title="@Tiago Mota / data-stone-front-test" />
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
