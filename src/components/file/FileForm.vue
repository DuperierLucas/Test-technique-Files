<template>
  <div class="file-form">
    <form class="file-form__form">
      <VInput v-model="name" placeholder="Put the name here" class="file-form__form-input">{{
        inputTitleLabel
      }}</VInput>
      <VTextArea
        v-model="content"
        placeholder="Put your file content here"
        class="file-form__form-input"
        >{{ inputContentLabel }}</VTextArea
      >

      <VInput v-model="url" placeholder="Put your image url here" class="file-form__form-input">{{
        inputUrlLabel
      }}</VInput>
    </form>

    <VButton @click="sendForm" class="file-form__send">Send</VButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import VInput from '@/components/shared/VInput.vue'
import VTextArea from '@/components/shared/VTextArea.vue'
import VButton from '@/components/shared/VButton.vue'

const props = defineProps({ file: { type: Object, default: null, required: false } })
const emit = defineEmits(['send'])

const name = ref(props.file?.name)
const content = ref(props.file?.content)
const url = ref(props.file?.url)

const inputTitleLabel = 'File title'
const inputContentLabel = 'File content'
const inputUrlLabel = 'File image'

const sendForm = () => {
  emit('send', { id: props.file?.id, name: name.value, content: content.value, url: url.value })
}
</script>

<style lang="scss">
.file-form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.file-form__send {
  margin-top: 10px;
}

.file-form__form-input {
  @media (min-width: $break--tablet-l) {
    width: auto;
  }

  width: 70vw;
}
</style>
