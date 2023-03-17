<template>
  <div class="empty-list">{{ message }}</div>
</template>

<script setup>
const props = defineProps({
  message: String
})
</script>

<style lang="scss">
.empty-list {
  @media (min-width: $break--tablet-l) {
    max-width: 200px;

    box-shadow: $secondary-box-shadow;
    padding: 20px;
    border-radius: 10px;
  }

  text-align: center;
  width: 100%;
}
</style>
