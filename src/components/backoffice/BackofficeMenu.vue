<template>
  <div class="backoffice-menu">
    <BackofficeMenuItem
      v-for="(item, index) in menuItems"
      :key="index"
      :id="item.id"
      :label="item.name"
      :is-selected="item.isSelected"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
import BackofficeMenuItem from '@/components/backoffice/BackofficeMenuItem.vue'

import { ref } from 'vue'

const menuItems = ref([
  { id: 1, name: 'Create', isSelected: true },
  { id: 2, name: 'Update', isSelected: false },
  { id: 3, name: 'Delete', isSelected: false }
])

const handleInput = (id) => {
  menuItems.value.forEach((item) => {
    item.id === id ? (item.isSelected = true) : (item.isSelected = false)
  })
}
</script>

<style lang="scss">
.backoffice-menu {
  @media (min-width: $break--tablet-l) {
    width: fit-content;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 20px;

  border: 1px solid $primary-color;
  border-radius: 15px;

  font-size: 18px;

  cursor: pointer;
}
</style>
