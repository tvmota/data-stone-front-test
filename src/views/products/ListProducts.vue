<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import DtButton from '@/components/common/DtButton.vue'
import DtToggle from '@/components/common/DtToggle.vue'

const productsStore = useProductsStore()
const { getProducts } = storeToRefs(productsStore)
const router = useRouter()

const navigate = () => router.push('/products-edit')

const changeProductStatus = (id, status) => {
  const cloneProducts = Array.from(new Set(getProducts.value.map((p) => p)))
  const productIdx = cloneProducts.findIndex((p) => p.id === id)

  cloneProducts[productIdx] = Object.assign({}, cloneProducts[productIdx], { active: status })
  productsStore.set(cloneProducts)
}
</script>
<template>
  <section class="products-list__content">
    <section class="products-list__content__header">
      <h2 class="products-list__content__header--title">Listagem de produtos</h2>
      <DtButton title="Novo Produto" button-text="Novo Produto" @click="navigate" />
    </section>
    <ol class="products-list__content__list">
      <li class="products-list__content__list__item products-list__content__list__head">
        <p class="products-list__content__list__item--txt">Nome</p>
        <p class="products-list__content__list__item--txt">Status</p>
      </li>
      <li v-for="p in getProducts" :key="p.id" class="products-list__content__list__item">
        <p class="products-list__content__list__item--txt">{{ p.name }}</p>
        <div class="products-list__content__list__item__actions">
          <RouterLink :to="`/products-edit/${p.id}`">
            <v-icon
              class="products-list__content__list__item__actions--icon"
              name="bi-pencil-square"
              :scale="1.5"
              title="Editar Produto"
            />
          </RouterLink>
          <DtToggle
            :has-model="false"
            :model-value="p.active"
            @handle-change="(val) => changeProductStatus(p.id, val)"
          />
        </div>
      </li>
    </ol>
  </section>
</template>

<style>
.products-list {
  &__content {
    @apply h-full lg:max-w-5xl md:container mx-auto pt-10;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 32px;

    &__header {
      @apply py-2 flex justify-between;

      &--title {
        @apply text-primary font-semibold capitalize text-lg;
      }
    }

    &__list {
      @apply flex flex-col gap-3;

      &__item {
        @apply flex justify-between py-3 px-8 shadow-sm rounded-lg border border-slate-300;

        &--txt {
          @apply text-primary font-semibold capitalize;
        }

        &__actions {
          @apply flex items-center gap-4;

          &--icon {
            @apply fill-primary hover:fill-secondary;
            cursor: pointer;
          }
        }
      }

      &__head {
        @apply bg-slate-300;
      }
    }
  }
}
</style>
