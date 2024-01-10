<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import DtInput from '@/components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'
import DtButton from '@/components/common/DtButton.vue'

const route = useRoute()
const router = useRouter()
const navigate = () => router.push('/products')
const { id = '' } = route.params || {}

const modelEx = ref('Xablau')
const pageTitle = ref(id ? 'Editar produto' : 'Novo produto')
</script>
<template>
  <section class="products-edit">
    <section class="products-edit__content">
      <section class="products-edit__content__header">
        <h2 class="products-edit__content__header--title">{{ pageTitle }}</h2>
      </section>
      <form>
        <DtInput
          v-model="modelEx"
          field-name="inptNomeProduto"
          field-placeholder="Nome do produto"
          label-txt="Nome"
          :field-required="true"
          :has-error="false"
          error-msg=""
        />
        <DtToggle v-model="chkModel">Ativo</DtToggle>
        <div class="flex gap-2 justify-end pt-10">
          <DtButton variant="neutral" size="sm" @click="navigate">voltar</DtButton>
          <DtButton variant="primary" size="sm" button-type="submit" @click="btn2">salvar</DtButton>
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
  }
}
</style>
