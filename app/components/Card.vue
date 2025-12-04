<template>
  <div class="card">
    <slot>Here</slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.card {
  @include card-style(#c8ffc8);
}
</style>
