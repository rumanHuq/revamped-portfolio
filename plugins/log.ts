export default defineNuxtPlugin(() => {
  return {
    provide: {
      log(...args: unknown[]) {
        console.log(...args);
      },
    },
  };
});
