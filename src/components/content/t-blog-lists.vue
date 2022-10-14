<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = { path: "/blog" };
</script>

<template>
  <main>
    <ContentList v-slot="{ list }" :query="query">
      <NuxtLink
        v-for="blog in list.filter((l) => ['/blog', '/'].includes(l._path) === false)"
        :key="blog._path"
        :to="blog._path"
      >
        <t-card>
          <template #left>
            <h3>{{ blog.title }}</h3>
          </template>
          <template #right>
            <p>{{ blog.description }}</p>
          </template>
        </t-card>
      </NuxtLink>
    </ContentList>
  </main>
</template>
