<template>
  <div class="file-card">
    <div class="file-card__content">
      <div class="file-card__content-title">{{ title }}</div>
      <div class="file-card__content-preview">{{ content }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String
})
</script>

<style lang="scss">
.file-card {
  @media (min-width: $break--tablet-l) {
    margin: 0;
    width: 70vw;
  }

  @media (min-width: $break--mobile) {
    margin: 0 30px;
  }

  display: flex;
  justify-content: space-between;

  padding: 15px 25px;
  border-radius: 10px;

  box-shadow: $primary-box-shadow;

  cursor: pointer;

  &:hover {
    box-shadow: $secondary-box-shadow;
  }
}

.file-card__content {
  display: flex;
  align-items: center;
}

.file-card__content-title {
  margin-right: 30px;

  width: 120px;
}

.file-card__content-preview {
  max-width: 30vw;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
