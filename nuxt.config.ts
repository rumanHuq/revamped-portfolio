import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxt/content"],
  target: "static",
  ssr: false,
  content: {
    highlight: {
      theme: "dark-plus",
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
