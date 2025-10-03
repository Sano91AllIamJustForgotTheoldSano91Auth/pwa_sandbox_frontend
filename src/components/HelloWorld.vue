<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>PWA Sandbox playground, for trying out various PWA features and Sign-up & Login methods</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  /* font-size: 4rem; */
  position: relative;
  top: -1%;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
