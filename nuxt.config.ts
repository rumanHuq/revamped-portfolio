import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    highlight: {
      theme: "dark-plus",
    },
  },
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
