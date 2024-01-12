<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useClientsStore } from '@/stores/clients'
import { clientSchema } from '@/schemas/client'
import { extractSchemaErr, deepClone } from '@/utils/form'
import DtInput from '@/components/common/DtInput.vue'
import DtToggle from '@/components/common/DtToggle.vue'
import DtButton from '@/components/common/DtButton.vue'

const route = useRoute()
const router = useRouter()
const clientsStore = useClientsStore()
const navigate = () => router.push('/clients')
const { id = '' } = route.params || {}

const pageTitle = ref(id ? 'Editar cliente' : 'Novo cliente')
const clientModel = reactive({
  id: '',
  name: '',
  document: '',
  phone: '',
  email: '',
  active: true
})

const clientModelErr = reactive({
  name: '',
  document: '',
  phone: '',
  email: ''
})

const successAlert = (msg) =>
  toast(msg, {
    type: 'success',
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => router.push('/clients')
  })

const handleSubmit = async () => {
  try {
    await clientSchema.validate(clientModel, { abortEarly: false })

    if (!id) {
      const findClient = clientsStore.getClientByName(clientModel.name)

      if (!findClient) {
        clientsStore.add(Object.assign({}, clientModel, { id: window.crypto.randomUUID() }))
        successAlert('Cliente cadastrado com sucesso')
      } else {
        toast('Já existe um client cadastrado com o mesmo nome', {
          type: 'warning',
          position: toast.POSITION.TOP_RIGHT
        })
      }
    } else {
      const cloneClients = Array.from(new Set(clientsStore.getClients))
      const clientIdx = cloneClients.findIndex((c) => c.id === id)

      cloneClients[clientIdx] = clientModel
      clientsStore.set(cloneClients)
      successAlert('Cliente alterado com sucesso')
    }
  } catch (err) {
    const errors = Object.entries(extractSchemaErr(err))
    errors.forEach((e) => {
      const [field = '', errMsg = ''] = e
      clientModelErr[field] = errMsg
    })
  }
}

const cleanErr = (field) => {
  if (clientModel[field].length > 0) {
    clientModelErr[field] = ''
  }
}

if (id) {
  const findClient = deepClone(clientsStore.getClientById(id))
  clientModel.id = findClient.id
  clientModel.name = findClient.name
  clientModel.document = findClient.document
  clientModel.phone = findClient.phone
  clientModel.email = findClient.email
  clientModel.active = findClient.active
}
</script>

<template>
  <section class="clients-edit">
    <section class="clients-edit__content">
      <section class="clients-edit__content__header">
        <h2 class="clients-edit__content__header--title">{{ pageTitle }}</h2>
      </section>
      <form novalidate @submit.prevent="handleSubmit">
        <DtInput
          v-model="clientModel.name"
          field-name="inptNomeCliente"
          field-placeholder="Nome do Cliente"
          label-txt="Nome"
          :field-required="true"
          :has-error="clientModelErr.name.length > 0"
          :error-msg="clientModelErr.name"
          @handle-blur="cleanErr('name')"
        />
        <DtInput
          v-model="clientModel.document"
          field-name="inptDocCliente"
          field-placeholder="Documento do Cliente"
          label-txt="Documento"
          :field-required="true"
          :has-error="clientModelErr.document.length > 0"
          :error-msg="clientModelErr.document"
          @handle-blur="cleanErr('document')"
        />
        <DtInput
          v-model="clientModel.phone"
          field-name="inptTelefoneCliente"
          field-placeholder="Numero de telefone"
          label-txt="Telefone"
          :field-required="true"
          :has-mask="true"
          mask="['(##) #####-####', '(##) ####-####']"
          :has-error="clientModelErr.phone.length > 0"
          :error-msg="clientModelErr.phone"
          @handle-blur="cleanErr('phone')"
        />
        <DtInput
          v-model="clientModel.email"
          field-name="inptEmailCliente"
          field-placeholder="Enderço de email"
          label-txt="E-mail"
          :field-required="true"
          :has-error="clientModelErr.email.length > 0"
          :error-msg="clientModelErr.email"
          field-type="email"
          @handle-blur="cleanErr('email')"
        />
        <DtToggle v-model="clientModel.active">Ativo</DtToggle>

        <div class="clients-edit__content__frm__actions">
          <DtButton variant="neutral" size="sm" button-text="voltar" @click="navigate" />
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

    &__frm {
      &__actions {
        @apply flex gap-2 justify-end pt-10;
      }
    }
  }
}
</style>
