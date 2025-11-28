<template>
  <header class="header">
    <slot>Header</slot>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  @include header-style;
}
</style>
