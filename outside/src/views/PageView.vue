<script setup>
import { ref } from "vue";
import BaseButton from "../components/BaseButton.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>Outside DS</h1>
  <BaseButton label="Button" size="small" />
</template>

<style scoped></style>
