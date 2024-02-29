<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>Outside DS</h1>
  <button class="button button-primary">
    Button
  </button>
</template>

<style scoped>
</style>
