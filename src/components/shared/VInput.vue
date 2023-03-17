<template>
  <div>
    <div><slot></slot></div>
    <input v-model="value" class="input" :placeholder="placeholder" type="text" />
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
.input {
  @media (min-width: $break--tablet-l) {
    width: 200px;
  }

  width: 100%;
}
</style>
