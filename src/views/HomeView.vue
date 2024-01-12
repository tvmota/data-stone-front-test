<script setup>
import DtButton from '@/components/common/DtButton.vue'
</script>

<template>
  <section class="home-view">
    <section class="home-view__content">
      <div class="home-view__content__header">
        <h2 class="home-view__content__header--subtitle">Opções para gerenciar o shop</h2>
        <h1 class="home-view__content__header--title">Shop app home</h1>
      </div>

      <div class="home-view__content__main">
        <div class="home-view__content__main__card">
          <div class="home-view__content__main__card__wrapper">
            <div class="home-view__content__main__card__wrapper__head">
              <div class="home-view__content__main__card__wrapper__head__logo">
                <v-icon name="bi-pencil-square" :scale="1.2" title="Editar Produto" />
              </div>
              <h2 class="home-view__content__main__card__wrapper__head--title">Clientes</h2>
            </div>
            <div class="home-view__content__main__card__wrapper__body">
              <p class="home-view__content__main__card__wrapper__body--txt">
                Aqui você pode gerenciar os dados dos clientes na plataforma
              </p>
              <div class="home-view__content__main__card__wrapper__body__actions">
                <DtButton button-text="Gerenciar Clientes" :is-link="true" to="/clients"></DtButton>
              </div>
            </div>
          </div>
        </div>

        <div class="home-view__content__main__card">
          <div class="home-view__content__main__card__wrapper">
            <div class="home-view__content__main__card__wrapper__head">
              <div class="home-view__content__main__card__wrapper__head__logo">
                <v-icon name="bi-box-seam" :scale="1.2" title="Editar Produto" />
              </div>
              <h2 class="home-view__content__main__card__wrapper__head--title">Produtos</h2>
            </div>
            <div class="home-view__content__main__card__wrapper__body">
              <p class="home-view__content__main__card__wrapper__body--txt">
                Aqui você pode gerenciar os dados dos Produtos na plataforma
              </p>
              <div class="home-view__content__main__card__wrapper__body__actions">
                <DtButton
                  button-text="Gerenciar Produtos"
                  :is-link="true"
                  to="/products"
                ></DtButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style>
.home-view {
  @apply text-gray-600;

  &__content {
    @apply container px-5 py-24 mx-auto;

    &__header {
      @apply flex flex-col text-center w-full mb-20;

      &--subtitle {
        @apply text-xs text-secondary tracking-widest font-medium mb-1 uppercase;
      }

      &--title {
        @apply sm:text-3xl text-2xl font-medium text-primary uppercase;
      }
    }

    &__main {
      @apply flex flex-wrap -m-4;

      &__card {
        @apply p-4 md:w-1/2;

        &__wrapper {
          @apply flex rounded-lg h-full bg-slate-300 bg-opacity-70 p-8 flex-col;

          &__head {
            @apply flex items-center mb-3;

            &__logo {
              @apply w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0;
            }

            &__title {
              @apply text-primary text-lg font-medium;
            }
          }

          &__body {
            @apply flex flex-col flex-grow gap-4;

            &--txt {
              @apply leading-relaxed text-base;
            }

            &__actions {
              @apply flex justify-end;
            }
          }
        }
      }
    }
  }
}
</style>
