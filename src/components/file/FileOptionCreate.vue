<template>
  <div class="file-option-create">
    <FileForm @send="addFileToList" />

    <VModal :isDisplayed="isModalDisplayed" @modal-toggle="isModalDisplayed = false">
      <div class="file-option-create__form">
        <h2>{{ formTitle }}</h2>
        <div class="file-option-create__form-buttons">
          <VButton
            @click="isModalDisplayed = false"
            btnStyle="primary"
            class="file-option-create__form-buttons-item"
            >{{ formConfirmButton }}</VButton
          >
        </div>
      </div>
    </VModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useFile } from '@/stores/file'

import VModal from '@/components/shared/VModal.vue'
import VButton from '@/components/shared/VButton.vue'

import FileForm from '@/components/file/FileForm.vue'

const file = useFile()

const isModalDisplayed = ref(false)

const formTitle = 'File successfully created'
const formConfirmButton = 'Confirm'

const addFileToList = (newFile) => {
  file.ADD_FILE(newFile)

  isModalDisplayed.value = true
}
</script>

<style lang="scss">
.file-option-create__form {
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

.file-option-create__form-buttons {
  display: flex;
  align-items: center;
}

.file-option-create__form-buttons-item {
  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
