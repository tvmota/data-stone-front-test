<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import DtButton from '@/components/common/DtButton.vue'
import DtSelect from '@/components/common/DtSelect.vue'
import DtCheckbox from '@/components/common/DtCheckbox.vue'
import DtSearch from '@/components/common/DtSearch.vue'

const clients = [
  {
    value: 1,
    label: 'cliente 1'
  },
  {
    value: 2,
    label: 'cliente 2'
  },
  {
    value: 3,
    label: 'cliente 3'
  },
  {
    value: 4,
    label: 'cliente 4'
  },
  {
    value: 5,
    label: 'cliente 5'
  }
]

const products = [
  {
    id: 1,
    name: 'produto 1',
    active: false
  },
  {
    id: 2,
    name: 'produto 2',
    active: true
  },
  {
    id: 3,
    name: 'produto 3',
    active: true
  },
  {
    id: 1,
    name: 'produto 1',
    active: false
  },
  {
    id: 2,
    name: 'produto 2',
    active: true
  },
  {
    id: 3,
    name: 'produto 3',
    active: true
  },
  {
    id: 1,
    name: 'produto 1',
    active: false
  },
  {
    id: 2,
    name: 'produto 2',
    active: true
  },
  {
    id: 3,
    name: 'produto 3',
    active: true
  }
]

const route = useRoute()
const router = useRouter()
const { clientId = '' } = route.params || {}

const modelEx = ref('')
</script>

<template>
  <section class="clients-associate">
    <section class="clients-associate__content">
      <section class="clients-associate__content__header">
        <h2 class="clients-associate__content__header--title">Associar produtos</h2>
      </section>
      <section class="clients-associate__content__main">
        <DtSelect
          v-model="modelEx"
          field-name="teste"
          label-txt="Clientes"
          field-placeholder="Selecionar cliente"
          :options="clients"
        />
        <section>
          <p class="clients-associate__content__main--subtitle">Produtos</p>
          <DtSearch />
          <ol class="clients-associate__content__main__list">
            <li
              v-for="p in products"
              :key="p.id"
              class="clients-associate__content__main__list__item"
            >
              <DtCheckbox v-model="chkModel2" :label-txt="p.name" />
              <span
                class="clients-associate__content__main__list__item--subtitle"
                :class="{ 'clients-associate__content__main__list__item--active': p.active }"
              >
                {{ p.active ? 'Ativo' : 'Inativo' }}
              </span>
            </li>
          </ol>
        </section>
      </section>
      <section class="clients-associate__content__footer">
        <section class="clients-associate__content__footer__actions">
          <DtButton variant="neutral" size="sm" button-text="voltar" />
          <DtButton variant="primary" size="sm" button-text="salvar" />
        </section>
      </section>
    </section>
  </section>
</template>

<style>
.clients-associate {
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

    &__main {
      @apply flex flex-col gap-8;

      &--subtitle {
        @apply block text-primary font-bold mb-4;
      }

      &__list {
        @apply grid gap-2 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xs:max-h-96 xs:overflow-y-scroll;

        &__item {
          @apply flex border border-neutral rounded-lg px-2 py-3 shadow-md flex-col gap-2;

          &--subtitle {
            @apply text-sm font-semibold pl-6 text-red-800;
          }

          &--active {
            @apply text-green-900;
          }
        }
      }
    }

    &__footer {
      @apply py-2 flex justify-end;

      &__actions {
        @apply flex gap-2;
      }
    }
  }
}
</style>
