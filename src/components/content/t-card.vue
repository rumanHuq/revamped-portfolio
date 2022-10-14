<template>
  <div class="card">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgba($color: #fff, $alpha: 0.5);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  height: max-content;
  min-height: 150px;
  margin: 20px 0;
  width: 700px;

  .left {
    padding: 0 30px;
    background-color: #2a265f;
    color: #fff;
    width: 250px;
    display: grid;
    justify-content: center;
    align-content: center;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .right {
    padding: 0 30px;
    width: 100%;
  }
}
</style>
