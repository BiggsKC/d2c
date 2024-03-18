<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => {
      return ["primary", "secondary"].includes(value);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => {
      return ["small", "medium", "large"].includes(value);
    },
  },
});
</script>

<template>
  <button :class="`button button-${variant} button-${size}`">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.button {
  border: 0;
  cursor: pointer;

  &-primary {
    background-color: var(--button-primary);
    color: var(--text-white);

    &:hover {
      background-color: var(--colour-green-500);
    }
  }

  &-small {
    font-size: medium;
    padding: 4px 8px;
    border-radius: 3px;
  }

  &-medium {
    font-size: large;
    padding: 8px 12px;
    border-radius: 5px;
  }

  &-large {
    font-size: x-large;
    padding: 12px 24px;
    border-radius: 10px;
  }
}
</style>
