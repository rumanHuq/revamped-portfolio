import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxt/content"],
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
