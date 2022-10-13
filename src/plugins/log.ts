export default defineNuxtPlugin(() => {
  return {
    provide: {
      log(...args: unknown[]) {
        // eslint-disable-next-line no-console
        console.log(...args);
      },
    },
  };
});
