<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const emit = defineEmits(['menuOpen'])

const menuShow = ref(false)

const handleClick = () => {
  menuShow.value = !menuShow.value
  emit('menuOpen', menuShow.value)
}
</script>

<template>
  <header class="app__header" role="banner">
    <button
      class="app__header__btn-menu"
      type="button"
      :class="{ 'app__header__btn-menu--open': menuShow }"
      @click="handleClick"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <RouterLink to="/" class="app__header--title">Shop App</RouterLink>
  </header>
</template>

<style>
.app {
  &__header {
    @apply bg-primary flex items-center justify-center w-full relative;
    grid-area: 1 / 1 / 2 / 2;

    &--title {
      @apply text-white text-2xl font-semibold;
    }

    &__btn-menu {
      @apply absolute bg-transparent;
      height: 32px;
      width: 32px;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      left: 16px;

      span {
        @apply bg-white;
        display: block;
        position: relative;
        height: 3px;
        width: 100%;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
        top: 0;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;

        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }

      &--open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -2px;
        left: 8px;
      }

      &--open span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &--open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: -1px;
        left: 8px;
      }
    }
  }
}
</style>
