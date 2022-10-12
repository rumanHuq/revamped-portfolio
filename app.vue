<script setup lang="ts">
definePageMeta({ layout: "main" });
</script>

<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <pre>{{ navigation }}</pre>
    </ContentNavigation>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style lang="scss">
/* global styles */
body {
  background-color: #f0f0f0;
  color: red;
}
</style>
