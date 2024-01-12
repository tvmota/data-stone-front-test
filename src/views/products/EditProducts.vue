<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useProductsStore } from '@/stores/products'
import { productSchema } from '@/schemas/product'
import { extractSchemaErr, deepClone } from '@/utils/form'
import DtInput from '@/components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'
import DtButton from '@/components/common/DtButton.vue'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
const { id = '' } = route.params || {}

const pageTitle = ref(id ? 'Editar produto' : 'Novo produto')
const productModel = reactive({
  id: '',
  name: '',
  active: false
})

const productModelErr = reactive({
  name: ''
})

const successAlert = (msg) =>
  toast(msg, {
    type: 'success',
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => router.push('/products')
  })

const handleSubmit = async () => {
  try {
    await productSchema.validate(productModel, { abortEarly: false })

    if (!id) {
      const findProduct = productsStore.getProductByName(productModel.name)
      if (!findProduct) {
        productsStore.add(Object.assign({}, productModel, { id: window.crypto.randomUUID() }))
        successAlert('Produto cadastrado com sucesso')
      } else {
        toast('Já existe um produto cadastrado com o mesmo nome', {
          type: 'warning',
          position: toast.POSITION.TOP_RIGHT
        })
      }
    } else {
      const cloneProducts = Array.from(new Set(productsStore.getProducts))
      const productIdx = cloneProducts.findIndex((p) => p.id === id)

      cloneProducts[productIdx] = productModel
      productsStore.set(cloneProducts)
      successAlert('Produto alterado com sucesso')
    }
  } catch (err) {
    const errors = Object.entries(extractSchemaErr(err))
    errors.forEach((e) => {
      const [field = '', errMsg = ''] = e
      productModelErr[field] = errMsg
    })
  }
}

const cleanErr = () => {
  if (productModel.name.length > 0) {
    productModelErr.name = ''
  }
}

if (id) {
  const findProduct = deepClone(productsStore.getProductById(id))
  productModel.id = findProduct.id
  productModel.name = findProduct.name
  productModel.active = findProduct.active
}
</script>

<template>
  <section class="products-edit">
    <section class="products-edit__content">
      <section class="products-edit__content__header">
        <h2 class="products-edit__content__header--title">{{ pageTitle }}</h2>
      </section>
      <form novalidate @submit.prevent="handleSubmit">
        <DtInput
          v-model="productModel.name"
          field-name="inptNomeProduto"
          field-placeholder="Nome do produto"
          label-txt="Nome"
          :field-required="true"
          :has-error="productModelErr.name.length > 0"
          :error-msg="productModelErr.name"
          @handle-blur="cleanErr"
        />
        <DtToggle v-model="productModel.active">Ativo</DtToggle>
        <div class="products-edit__content__frm__actions">
          <DtButton
            variant="neutral"
            size="sm"
            button-text="voltar"
            :is-link="true"
            url="/products"
          />
          <DtButton
            variant="primary"
            size="sm"
            button-type="submit"
            button-text="salvar"
            @click="btn2"
          />
        </div>
      </form>
    </section>
  </section>
</template>

<style>
.products-edit {
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

    &__frm {
      &__actions {
        @apply flex gap-2 justify-end pt-10;
      }
    }
  }
}
</style>
