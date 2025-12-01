<template>
  <div class="page">
    <Header></Header>
    <main class="content">
      <Banner></Banner>
      <h1 class="title">Hello, World!</h1>
      <p class="subtitle">Look at my website</p>
      <div class="cards-row">
        <Card></Card>
        <Card></Card>
      </div>
    </main>
    <ContentBlock></ContentBlock>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/mixins" as mixins;
@use "assets/scss/colors" as *;

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  padding: 20px 40px;
  flex: 1;
}

.title {
  margin: 20px 0 8px;
  font-size: 32px;
  font-weight: 700;
}

.subtitle {
  margin: 0 0 20px;
  font-size: 16px;
}

.cards-row {
  display: flex;
  gap: 16px;
}
</style>
