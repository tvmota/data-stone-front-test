<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
import { useClientsStore } from '@/stores/clients'
import { useProductsStore } from '@/stores/products'
import { useAssociationsStore } from '@/stores/associations'
import DtButton from '@/components/common/DtButton.vue'
import DtSelect from '@/components/common/DtSelect.vue'
import DtCheckbox from '@/components/common/DtCheckbox.vue'
import DtInput from '@/components/common/DtInput.vue'

const clientsStore = useClientsStore()
const productsStore = useProductsStore()
const associationsStore = useAssociationsStore()
const { getClients } = storeToRefs(clientsStore)
const { getProducts } = storeToRefs(productsStore)

const navigate = () => router.push('/clients')

let viewProducts = reactive(Array.from(new Set(getProducts.value)))
const srcClients = getClients.value.map((c) => ({ label: c.name, value: c.id }))
const searchProduct = ref('')

const route = useRoute()
const router = useRouter()
const { clientId = '' } = route.params || {}
const clientModel = reactive({
  id: '',
  error: ''
})
const productsModel = reactive({
  products: []
})

const successAlert = (msg) =>
  toast(msg, {
    type: 'success',
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => router.push('/clients')
  })

const handleClientSelectChange = (val) => {
  clientModel.id = val
  if (val) {
    clientModel.error = ''
  }
}

const handleSelection = (selected, product) => {
  let { products } = productsModel

  if (selected) {
    productsModel.products.push(product.id)
  } else {
    productsModel.products.splice(products.indexOf(product.id), 1)
  }
}

const handleSaveAssociation = () => {
  if (clientModel.id) {
    if (productsModel.products.length > 0) {
      associationsStore.add({
        id: window.crypto.randomUUID(),
        idClient: clientModel.id,
        idProducts: productsModel.products
      })
      successAlert(clientId ? 'Produtos alterados com sucesso' : 'Produtos associados com sucesso')
    } else {
      toast('Selecionar ao menos um produto', {
        type: 'warning',
        position: toast.POSITION.TOP_RIGHT
      })
    }
  } else {
    clientModel.error = 'Selecionar um cliente para associar'
  }
}

const hasProduct = (idProduct) => {
  return productsModel.products.indexOf(idProduct) >= 0
}

watch(searchProduct, (newVal = '') => {
  if (newVal.length > 0) {
    viewProducts = getProducts.value.filter((p) =>
      p.name.toLocaleLowerCase().includes(newVal.toLocaleLowerCase())
    )
  } else {
    viewProducts = getProducts.value.map((p) => p)
  }
})

onMounted(() => {
  if (clientId) {
    const association = associationsStore.getAssociationByClientId(clientId)
    clientModel.id = clientId
    if (association) {
      productsModel.products = Array.from(new Set(association.idProducts))
    }
  }
})
</script>

<template>
  <section class="clients-associate">
    <section class="clients-associate__content">
      <section class="clients-associate__content__header">
        <h2 class="clients-associate__content__header--title">Associar produtos</h2>
      </section>
      <section class="clients-associate__content__main">
        <DtSelect
          field-name="teste"
          label-txt="Clientes"
          :has-error="clientModel.error.length"
          field-placeholder="Selecionar cliente"
          :options="srcClients"
          :error-msg="clientModel.error"
          :model-value="clientModel.id"
          @handle-change="(value) => handleClientSelectChange(value)"
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
                :model-value="hasProduct(p.id)"
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
          <DtButton variant="neutral" size="sm" button-text="voltar" @click="navigate" />
          <DtButton
            variant="primary"
            size="sm"
            button-text="salvar"
            @click="handleSaveAssociation"
          />
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
