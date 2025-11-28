<template>
  <div class="banner">
    <slot>Banner</slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.banner {
  @include banner-style;
}
</style>
