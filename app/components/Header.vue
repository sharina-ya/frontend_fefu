<template>
  <header class="header">
      <div class="header-left">
        <img class="logo" src="../assets/images/logo.svg" alt="FEFU logo" />
        <nav class="nav">
          <p>Реализованные проекты</p>
          <p>Новости</p>
          <p>Контакты</p>
        </nav>
      </div>

      <div class="header-right">
        <img class="phone-icon" src="../assets/images/telephone.svg" alt="Phone" />
        <span class="phone-text">+7 (900) 900-90-90</span>
        <BaseButton>Оставить заявку</BaseButton>
      </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/mixins" as mixins;
@use "../assets/scss/colors" as *;

.header {
  justify-content: space-between;
  padding: 24px 88px;
  background-color: $white;
  @include mixins.flex-row;
}

.header-left {
  gap: 80px;
  @include mixins.flex-row;
}

.logo {
  width: 160px;
  height: 39px;
}

.nav {
  gap: 24px;
  font-size: 16px;
  color: $gray;
  @include mixins.flex-row;
}

.header-right {
  gap: 24px;
  @include mixins.flex-row;
}

.phone-icon {
  width: 16px;
  height: 16px;
}

.phone-text {
  font-family: $font-text;
  font-size: 14px;
  color: #000000;
}
</style>
