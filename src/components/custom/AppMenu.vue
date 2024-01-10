<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  menuShow: Boolean
})
defineEmits(['menuClose'])
</script>

<template>
  <aside class="app__menu" :class="{ 'app__menu--visible': menuShow }">
    <section class="app__menu__overlay"></section>
    <section class="app__menu__content">
      <ul>
        <li>
          <RouterLink
            active-class="app__menu__content--link-active"
            to="/"
            @click="$emit('menuClose')"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="app__menu__content--link-active"
            to="/clients"
            @click="$emit('menuClose')"
          >
            Clientes
          </RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="app__menu__content--link-active"
            to="/Products"
            @click="$emit('menuClose')"
          >
            Produtos
          </RouterLink>
        </li>
      </ul>
    </section>
  </aside>
</template>

<style>
.app {
  &__menu {
    @apply fixed pointer-events-none w-full h-screen;
    z-index: 2;

    &__overlay {
      @apply absolute w-full bg-black left-0 opacity-0 invisible;
      top: var(--headerHeight);
      height: calc(100% - var(--headerHeight));
      transition: 0.3s;
    }

    &__content {
      @apply absolute pointer-events-auto top-0 left-0;
      margin-top: var(--headerHeight);
      padding: 20px;
      width: 90%;
      max-width: 300px;
      height: calc(100% - 70px);
      background: #ececec;
      transform: translateX(-100%);
      transition: transform 0.3s;
      will-change: transform;
      contain: paint;

      ul {
        @apply flex flex-col h-full;

        li {
          @apply text-primary font-semibold;

          &:hover {
            @apply text-neutral;
          }
        }
      }

      &--link-active {
        @apply text-neutral;
      }
    }

    &--visible {
      .app__menu__overlay {
        visibility: visible;
        opacity: 0.6;
      }

      .app__menu__content {
        transform: translateX(0);
      }
    }
  }
}
</style>
