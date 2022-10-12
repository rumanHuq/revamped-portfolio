import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import { NuxtApp } from "nuxt/dist/app/nuxt";

function applyPrimeVue(nuxtApp: Partial<NuxtApp>) {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  // other components that you need
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Card", Card);
}

export default defineNuxtPlugin((nuxtApp) => {
  applyPrimeVue(nuxtApp);
});
