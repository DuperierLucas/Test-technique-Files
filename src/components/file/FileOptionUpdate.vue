<template>
  <div class="file-option-update">
    <div class="file-option-update__list">
      <FileCard
        v-for="(item, index) in file.getFileList"
        :key="index"
        class="file-option-update__list-item"
        :title="item.name"
        :content="item.content"
        @click="displayModal(item)"
        ><IconPen class="file-option-update__list-item-icon" />
      </FileCard>
    </div>

    <VModal :isDisplayed="isModalDisplayed" @modal-toggle="isModalDisplayed = false">
      <div class="file-option-update__form">
        <h2>{{ formTitle }} {{ fileToUpdate.name }}</h2>
        <FileForm :file="fileToUpdate" @send="updateFile"></FileForm>
      </div>
    </VModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFile } from '@/stores/file'

import FileCard from '@/components/file/FileCard.vue'
import FileForm from '@/components/file/FileForm.vue'

import IconPen from '@/components/icons/IconPen.vue'

import VModal from '@/components/shared/VModal.vue'

const file = useFile()

const isModalDisplayed = ref(false)
const fileToUpdate = ref(null)
const formTitle = 'Updating'

const updateFile = (updatedFile) => {
  file.UPDATE_FILE(updatedFile)
  isModalDisplayed.value = false
}

const displayModal = (file) => {
  fileToUpdate.value = file
  isModalDisplayed.value = true
}
</script>

<style lang="scss">
.file-option-update__list-item {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.file-option-update__list-item-icon {
  width: 20px;
  height: 20px;
}

.file-option-update__form {
  @include modal-content();

  @media (min-width: $break--tablet-l) {
    height: auto;
    width: auto;
    padding: 20px;
  }

  padding: 0;
  max-height: unset;

  height: 100%;
  width: 100%;
}
</style>
