<script setup lang="ts">
defineProps({
  to: {
    required: true,
    type: String,
  },
  label: {
    required: true,
    type: String,
  },
  external: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <NuxtLink v-if="!external" :to="to">{{ label }}</NuxtLink>
  <a v-else :href="to" target="_blank" rel="noopener noreferrer">{{ label }}</a>
</template>

<style lang="scss" scoped>
a {
  color: rgba($color: #000000, $alpha: 0.6);
}
</style>
