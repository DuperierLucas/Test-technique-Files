<template>
  <div class="file-option-delete">
    <div class="file-option-delete__list">
      <FileCard
        v-for="(item, index) in file.getFileList"
        :key="index"
        class="file-option-delete__list-item"
        :title="item.name"
        :content="item.content"
        @click="displayModal(item)"
        ><IconTrash class="file-option-delete__list-item-icon"
      /></FileCard>
    </div>

    <VModal :isDisplayed="isModalDisplayed" @modal-toggle="isModalDisplayed = false">
      <div class="file-option-delete__form">
        <h2>{{ formTitle }} {{ fileToDelete.name }} ?</h2>
        <div class="file-option-delete__form-buttons">
          <VButton
            @click="isModalDisplayed = false"
            btnStyle="secondary"
            class="file-option-delete__form-buttons-item"
            >{{ formCancelButton }}</VButton
          >
          <VButton
            @click="deleteFile(fileToDelete)"
            btnStyle="delete"
            class="file-option-delete__form-buttons-item"
            >{{ formDeleteButton }}</VButton
          >
        </div>
      </div>
    </VModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useFile } from '@/stores/file'

import FileCard from '@/components/file/FileCard.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

import VModal from '@/components/shared/VModal.vue'
import VButton from '@/components/shared/VButton.vue'

const file = useFile()

const isModalDisplayed = ref(false)
const fileToDelete = ref(null)

const formTitle = 'You want to delete'
const formCancelButton = 'Cancel'
const formDeleteButton = 'Delete'

const deleteFile = (deletedFile) => {
  file.DELETE_FILE(deletedFile)
  isModalDisplayed.value = false
}

const displayModal = (file) => {
  fileToDelete.value = file
  isModalDisplayed.value = true
}
</script>

<style lang="scss">
.file-option-delete__list-item {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.file-option-delete__list-item-icon {
  width: 20px;
  height: 20px;

  color: $red;
}

.file-option-delete__form {
  @include modal-content();

  @media (min-width: $break--tablet-l) {
    height: auto;
    width: auto;
    padding: 20px;
  }

  text-align: center;
  padding: 0;
  max-height: unset;

  height: 100%;
  width: 100%;
}

.file-option-delete__form-buttons {
  display: flex;
  align-items: center;
}

.file-option-delete__form-buttons-item {
  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
