<template>
  <div class="banner">
    <slot>Banner</slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.banner {
  @include card-style(#009917);
}
</style>
