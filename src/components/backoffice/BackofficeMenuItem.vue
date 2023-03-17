<template>
  <div
    @click="handleClick"
    class="backoffice-menu-item"
    :class="{ 'backoffice-menu-item--selected': isSelected }"
  >
    {{ label }}
  </div>
</template>

<script setup>
import { useFile } from '@/stores/file'

const file = useFile()

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['input'])

const handleClick = () => {
  file.SET_CURRENT_FILE_OPTION(props.label)
  emit('input', props.id)
}
</script>

<style lang="scss">
.backoffice-menu-item {
  @media (min-width: $break--tablet-l) {
    width: 200px;
  }

  width: 33vw;

  text-align: center;

  border-radius: 15px;

  &:hover:not(&--selected) {
    color: $secondary-color;
  }

  &--selected {
    color: $white;
    background-color: $primary-color;
    pointer-events: none;
  }
}
</style>
