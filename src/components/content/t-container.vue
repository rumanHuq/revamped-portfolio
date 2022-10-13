<template>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0 1rem;
  min-width: 392px;

  @media screen and (min-width: 415px) {
    max-width: 1024px;
    margin: 2rem auto;
  }
}
</style>
