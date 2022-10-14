import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    [
      "nuxt-content-git",
      {
        createdAtName: "gitCreatedAt",
        updatedAtName: "gitUpdatedAt",
      },
    ],
    "@nuxt/content",
  ],
  target: "static",
  content: {
    highlight: {
      theme: "dark-plus",
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  nitro: { preset: "netlify" },
});
