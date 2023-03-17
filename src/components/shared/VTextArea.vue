<template>
  <div>
    <div><slot></slot></div>
    <textarea v-model="value" class="textarea" :placeholder="placeholder" type="text" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: String
})

const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>

<style lang="scss" scoped>
.textarea {
  @media (min-width: $break--tablet-l) {
    width: 200px;
  }

  width: 100%;
  height: 200px;
}
</style>
