<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use "../assets/scss/mixins" as mixins;
@use "../assets/scss/colors" as *;

.base-button {
  height: 49px;
  width: 204px;
  padding: 16px 40px;
  border-radius: 10px;
  border: none;
  cursor: default;
  font-family: $font-title;
  background-color: $green;
  color: $white;
  font-size: 14px;
}
</style>
