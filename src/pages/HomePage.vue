<template>
  <div class="home-page">
    <h1>Profile Browser</h1>
    <router-link to="/backoffice" class="home-page__backoffice">Go to the backoffice</router-link>

    <div class="home-page__body">
      <HomeList />
      <HomeContent class="home-page__body-content" />
    </div>
  </div>
</template>

<script setup>
import HomeList from '@/components/home/HomeList.vue'
import HomeContent from '@/components/home/HomeContent.vue'
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-page__backoffice {
  margin-bottom: 30px;
}

.home-page__body {
  @media (min-width: $break--tablet-l) {
    display: flex;
    width: unset;
  }
  width: 100%;
}

.home-page__body-content {
  @media (min-width: $break--tablet-l) {
    display: block;
  }
  display: none;
}
</style>
