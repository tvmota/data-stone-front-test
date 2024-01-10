<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import DtInput from '@/components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'
import DtButton from '@/components/common/DtButton.vue'

const route = useRoute()
const router = useRouter()
const navigate = () => router.push('/clients')
const { id = '' } = route.params || {}

const modelEx = ref('Xablau')
const pageTitle = ref(id ? 'Editar cliente' : 'Novo cliente')
</script>

<template>
  <section class="clients-edit">
    <section class="clients-edit__content">
      <section class="clients-edit__content__header">
        <h2 class="clients-edit__content__header--title">{{ pageTitle }}</h2>
      </section>
      <form>
        <DtInput
          v-model="modelEx"
          field-name="inptNomeCliente"
          field-placeholder="Nome do Cliente"
          label-txt="Nome"
          :field-required="true"
          :has-error="false"
          error-msg=""
        />
        <DtInput
          v-model="modelEx"
          field-name="inptDocCliente"
          field-placeholder="Documento do Cliente"
          label-txt="Documento"
          :field-required="true"
          :has-error="false"
          error-msg=""
        />
        <DtInput
          v-model="modelEx"
          field-name="inptTelefoneCliente"
          field-placeholder="Numero de telefone"
          label-txt="Telefone"
          :field-required="true"
          :has-error="false"
          error-msg=""
        />
        <DtInput
          v-model="modelEx"
          field-name="inptEmailCliente"
          field-placeholder="Enderço de email"
          label-txt="E-mail"
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
.clients-edit {
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
