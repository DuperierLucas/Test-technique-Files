<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  width: 100%;
  height: 100%;
}
</style>
