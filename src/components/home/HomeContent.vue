<template>
  <div class="home-content">
    <div class="home-content__image">
      <img :src="currentSelectedFile?.url" alt="Image file" />
    </div>
    <h2>{{ currentSelectedFile?.name }}</h2>
    <div class="home-content__text">{{ currentSelectedFile?.content }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useFile } from '@/stores/file'

const file = useFile()

const currentSelectedFile = computed(() => {
  return file.getCurrentSelectedFile
})
</script>

<style lang="scss">
.home-content {
  margin-left: 10px;
}

.home-content__image {
  width: 100px;
  height: 150px;

  margin: 10px;

  border: 5px solid $white;
  box-shadow: $secondary-box-shadow;

  float: left;
}

.home-content__text {
  max-width: 300px;
  white-space: pre-wrap;
}
</style>
