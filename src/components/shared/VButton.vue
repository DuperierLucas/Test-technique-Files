<template>
  <button class="button" :class="[btnStyle]">
    <span class="button__content"><slot></slot></span>
  </button>
</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  btnStyle: {
    type: [String, Object],
    default: 'primary'
  }
})
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;

  padding: 12px 20px;
  border: 0px;
  border-radius: 5px;

  font-size: 15px;
  line-height: 21px;

  white-space: nowrap;

  min-width: 80px;

  &.primary {
    background-color: $primary-color;
    color: $white;

    font-size: 16px;

    &:hover {
      background-color: darken($color: $primary-color, $amount: 3);
    }

    &:active {
      background-color: $secondary-color;
    }
  }
  &.secondary {
    background-color: transparent;
    border: 2px solid $primary-color;

    color: $primary-color;
    font-size: 16px;

    &:hover {
      background-color: $primary-color;
      color: $white;
    }

    &:active {
      border-color: $secondary-color;
    }
  }

  &.delete {
    background: $white;
    border: 1px $red solid;
    border-radius: 5px;

    color: $red;

    &:hover {
      background-color: lighten($color: $red, $amount: 30);
    }

    &:active {
      background-color: lighten($color: $red, $amount: 20);
    }
  }
}

.button__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
