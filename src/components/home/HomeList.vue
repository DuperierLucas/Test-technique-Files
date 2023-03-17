<template>
  <div class="home-list">
    <template v-if="file.getFileList.length > 0">
      <HomeListItem
        v-for="(fileItem, index) in file.getFileList"
        :key="index"
        :file="fileItem"
        :is-selected="currentSelectedFile?.id === fileItem.id"
        @click.native="file.SET_CURRENT_SELECTED_FILE(fileItem)"
      />
    </template>

    <div v-else class="home-list__empty">{{ emptyList }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import HomeListItem from '@/components/home/HomeListItem.vue'

import { useFile } from '@/stores/file'

const file = useFile()

const emptyList =
  'Your file list is empty :(. Please go to the backoffice, and add file(s). You can also reset the app in the backoffice.'

const currentSelectedFile = computed(() => {
  return file.getCurrentSelectedFile
})
</script>

<style lang="scss">
.home-list {
  @media (min-width: $break--tablet-l) {
    border-right: 1px solid $black;
    width: unset;
  }

  width: 100%;
  height: 80vh;
}

.home-list__empty {
  @media (min-width: $break--tablet-l) {
    max-width: 200px;
  }

  text-align: center;
  width: 100%;
}
</style>
