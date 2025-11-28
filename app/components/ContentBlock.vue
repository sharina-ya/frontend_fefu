<template>
  <section class="content-block">
    <div class="image-wrapper">
      <img src="../assets/images/cat.jpg" alt="cat" />
    </div>

    <div class="text-wrapper">
      <p class="content-text">Drinks:</p>
      <ul class="content-list">
        <li>tea</li>
        <li>water</li>
        <li>coffee</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.content-block {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
}

.image-wrapper {
  width: 260px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text-wrapper {
  flex: 1;
}

.content-title {
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 700;
  font-family: $font-text;
}

.content-text {
  margin: 0 0 4px;
  font-family: $font-text;
}

.content-list {
  margin: 0;
  padding-left: 18px;
  font-family: $font-text;
}
</style>