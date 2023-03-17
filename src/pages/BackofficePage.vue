<template>
  <div class="backoffice-page">
    <div class="backoffice-page__header">
      <h1>{{ title }}</h1>
      <router-link to="/">{{ backToAppButton }}</router-link>
      <BackofficeMenu />
    </div>
    <VButton @click="loadFakeData" class="file-form__send">{{ resetButton }}</VButton>

    <div class="backoffice-page__body">
      <Transition name="fade">
        <FileOptionCreate v-if="activeMenuOption === 'Create'" />
        <FileOptionUpdate v-else-if="activeMenuOption === 'Update'" />
        <FileOptionDelete v-else />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { useFile } from '@/stores/file'
import { computed } from 'vue'

import { fileList } from '@/mocks/fakeData'

import VButton from '@/components/shared/VButton.vue'

import BackofficeMenu from '@/components/backoffice/BackofficeMenu.vue'
import FileOptionCreate from '@/components/file/FileOptionCreate.vue'
import FileOptionUpdate from '@/components/file/FileOptionUpdate.vue'
import FileOptionDelete from '@/components/file/FileOptionDelete.vue'

const file = useFile()

const activeMenuOption = computed(() => {
  return file.getCurrentFileOption
})

const title = 'Welcom on the backoffice'
const resetButton = 'Reset and load fake data'
const backToAppButton = 'Return to the App'

const loadFakeData = () => {
  localStorage.setItem('files', JSON.stringify(fileList))
  location.reload()
}
</script>

<style lang="scss" scoped>
.backoffice-page {
  height: 100%;
  width: 100%;
}

.backoffice-page__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
}
.backoffice-page__body {
  @media (min-width: $break--tablet-l) {
    display: flex;
    justify-content: center;

    margin: 30px;
  }

  margin: 30px 0;
}
</style>
