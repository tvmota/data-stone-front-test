<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch, reactive } from 'vue'
import DtButton from '@/components/common/DtButton.vue'
import DtSelect from '@/components/common/DtSelect.vue'
import DtCheckbox from '@/components/common/DtCheckbox.vue'
import DtInput from '@/components/common/DtInput.vue'

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
    name: 'produto 1a',
    active: false
  },
  {
    id: 2,
    name: 'produto 2s',
    active: true
  },
  {
    id: 3,
    name: 'produto 3e',
    active: true
  },
  {
    id: 4,
    name: 'produto 1e',
    active: false
  },
  {
    id: 5,
    name: 'produto 2r',
    active: true
  },
  {
    id: 6,
    name: 'produto 3t',
    active: true
  },
  {
    id: 7,
    name: 'produto 1r',
    active: false
  },
  {
    id: 8,
    name: 'produto 2t',
    active: true
  },
  {
    id: 9,
    name: 'produto 3a',
    active: true
  },
  {
    id: 10,
    name: 'produto 1r',
    active: false
  },
  {
    id: 11,
    name: 'produto 2t',
    active: true
  },
  {
    id: 12,
    name: 'produto 3a',
    active: true
  }
]

let viewProducts = reactive(products.map((p) => p))

const searchProduct = ref('')

const route = useRoute()
const router = useRouter()
const { clientId = '' } = route.params || {}
const modelEx = ref('')

watch(searchProduct, (newVal = '') => {
  if (newVal.length > 0) {
    viewProducts = products.filter((p) =>
      p.name.toLocaleLowerCase().includes(newVal.toLocaleLowerCase())
    )
  } else {
    viewProducts = products.map((p) => p)
  }
})

const handleSelection = (selected, product) => {
  console.log(selected, product)
}
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
          <DtInput
            v-model="searchProduct"
            field-name="searchProducts"
            field-placeholder="Pesquisar produtos"
            :has-icon="true"
            icon="oi-search"
            field-type="search"
          />
          <ol class="clients-associate__content__main__list">
            <li
              v-for="p in viewProducts"
              :key="p.id"
              class="clients-associate__content__main__list__item"
            >
              <DtCheckbox
                :has-model="false"
                :label-txt="p.name"
                :model-value="true"
                @handle-change="(value) => handleSelection(value, p)"
              />
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
        @apply grid gap-2 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xs:max-h-80 xs:overflow-y-scroll py-1;
        padding-right: 6px;

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
