<script setup lang="ts">
import SVGatorDemoAnimation from '@/components/SVGatorDemoAnimation.vue'
</script>

<template>
  <main class="svgator-animation">
    <SVGatorDemoAnimation />
  </main>
</template>

<style scoped>
/* Default style */
.svgator-animation {
  margin-top: 0; /* or padding-top: 0 */
}

/* When viewport width is less than 1024px */
@media (max-width: 1024px) {
  .svgator-animation {
    margin-top: 10%; /* adjust as needed */
    /* or padding-top: 20px; */
  }
}
</style>
