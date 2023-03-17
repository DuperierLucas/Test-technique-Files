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

    <VEmptyList v-else :message="emptyList" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import HomeListItem from '@/components/home/HomeListItem.vue'

import VEmptyList from '@/components/shared/VEmptyList.vue'

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
</style>
