import { processExpression } from "@vue/compiler-core";
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxt/content"],
  target: "static",
  content: {
    highlight: {
      theme: "dark-plus",
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  router: {
    base: "/revamped-portfolio/",
  },
});
