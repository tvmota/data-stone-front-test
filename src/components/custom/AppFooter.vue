<script setup>
defineProps({
  footerTitle: {
    type: String,
    default: 'Teste'
  }
})
</script>

<template>
  <footer class="app__footer" role="contentinfo">
    <div class="app__footer__content">
      <a
        class="app__footer__content--title"
        href="https://github.com/tvmota/data-stone-front-test"
        target="blank"
        title="{footerTitle}"
      >
        {{ footerTitle }}
      </a>
    </div>
  </footer>
</template>

<style>
.app {
  &__footer {
    @apply bg-neutral p-3 flex justify-center;
    grid-area: 3 / 1 / 4 / 2;

    &__content {
      @apply flex items-center;

      &--title {
        @apply text-sm text-primary sm:text-sm md:text-lg lg:text-xl xl:text-xl font-semibold hover:underline hover:text-secondary align-middle;
      }
    }
  }
}
</style>
