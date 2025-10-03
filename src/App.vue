<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      alt="App logo"
      class="logo"
      src="@/assets/pwa sandboxlogo 1024 donor.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Welcome!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/signup">Sign up</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 1%;
}

nav {
  width: 100%;
  /* font-size: 46px; */
  text-align: center;
  margin-top: 1%;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1%;
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
    margin: 0 1% 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1%;
    /* font-size: 2rem; */

    padding: 1% 0;
    margin-top: 1%;
  }
}
</style>
