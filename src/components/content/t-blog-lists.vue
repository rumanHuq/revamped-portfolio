<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const contentQuery = await queryContent("blog").find();
console.log(contentQuery);
const query: QueryBuilderParams = { path: "/blog" };
</script>

<template>
  <main>
    <ContentList v-slot="{ list }" :query="query">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
