<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useClientsStore } from '@/stores/clients'
import DtButton from '@/components/common/DtButton.vue'
import DtToggle from '@/components/common/DtToggle.vue'

const router = useRouter()
const clientsStore = useClientsStore()
const { getClients } = storeToRefs(clientsStore)

const navigateEdit = () => router.push('/clients-edit')
const navigateAssociate = () => router.push('/associate')

const changeClientStatus = (id, status) => {
  const cloneClients = Array.from(new Set(getClients.value))
  const clientIdx = cloneClients.findIndex((c) => c.id === id)
  cloneClients[clientIdx] = Object.assign({}, cloneClients[clientIdx], { active: status })
  clientsStore.set(cloneClients)
}
</script>
<template>
  <section class="clients-list__content">
    <section class="clients-list__content__header">
      <h2 class="clients-list__content__header--title">Listagem de clientes</h2>
      <section class="clients-list__content__header__actions">
        <DtButton
          variant="secondary"
          title="Novo Cliente"
          button-text="Associar produtos"
          @click="navigateAssociate"
        />
        <DtButton title="Novo Cliente" button-text="Novo cliente" @click="navigateEdit" />
      </section>
    </section>
    <section class="flex flex-col">
      <section class="clients-list__content__list__head">
        <p class="clients-list__content__list__item--txt">Nome</p>
        <p class="clients-list__content__list__item--txt">Status</p>
      </section>
      <ol class="clients-list__content__list">
        <li v-for="c in getClients" :key="c.id" class="clients-list__content__list__item">
          <section>
            <p class="clients-list__content__list__item--txt">{{ c.name }}</p>
            <span class="clients-list__content__list__item--subTxt">{{ c.email }}</span>
          </section>
          <div class="clients-list__content__list__item__actions">
            <RouterLink :to="`/clients-edit/${c.id}`">
              <v-icon
                class="clients-list__content__list__item__actions--icon"
                name="bi-pencil-square"
                :scale="1.5"
                title="Editar Cliente"
              />
            </RouterLink>
            <RouterLink :to="`/associate/${c.id}`">
              <v-icon
                class="clients-list__content__list__item__actions--icon"
                name="oi-link"
                :scale="1.5"
                title="Associar Produtos"
              />
            </RouterLink>
            <DtToggle
              :has-model="false"
              :model-value="c.active"
              @handle-change="(val) => changeClientStatus(c.id, val)"
            />
          </div>
        </li>
      </ol>
    </section>
  </section>
</template>

<style>
.clients-list {
  &__content {
    @apply h-full lg:max-w-5xl md:container mx-auto pt-10;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 32px;

    &__header {
      @apply py-2 flex justify-between;

      &__actions {
        @apply flex gap-2;
      }

      &--title {
        @apply text-primary font-semibold capitalize text-lg;
      }
    }

    &__list {
      @apply flex flex-col gap-3 overflow-y-scroll py-1 pr-1;
      max-height: 480px;

      &__item {
        @apply flex justify-between py-3 px-8 shadow-sm rounded-lg border border-slate-300;

        &--txt {
          @apply text-primary font-semibold capitalize;
        }

        &--subTxt {
          @apply text-sm text-secondary font-medium capitalize;
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
        @apply flex justify-between bg-slate-300 py-3 px-8 shadow-sm rounded-lg border border-slate-300 mb-4;
      }
    }
  }
}
</style>
