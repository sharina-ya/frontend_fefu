<template>
  <footer class="footer">
    <slot>Footer</slot>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  @include footer-style;
}
</style>
