<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!--header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <button class="btn">Button</button>
    </div>
  </header-->
  <section class="app__container">
    <header class="app__header" role="banner">App Head</header>
    <main class="app__main">
      <RouterView />
      <button class="btn btn__large">teste</button>
    </main>
    <footer class="app__footer" role="contentinfo">footer</footer>
  </section>
</template>

<style scoped>
.btn {
  @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 border-2 rounded border-blue-200 hover:bg-blue-500;
  width: 40px;

  &__large {
    width: 80px;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
