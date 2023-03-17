<template>
  <div v-if="isDisplayed" class="modal__container">
    <div class="modal__wrapper">
      <div @click="hide" class="modal__wrapper-cross">x</div>
      <div class="modal"><slot></slot></div>
    </div>
    <div
      @click="hide"
      class="modal__overlay"
      :class="{ 'modal__overlay--active': isDisplayed }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  isDisplayed: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['modal-toggle'])

const hide = () => {
  emit('modal-toggle', false)
}
</script>

<style lang="scss" scoped>
.modal {
  @media (min-width: $break--tablet-l) {
    height: auto;
    width: auto;
  }

  height: 100%;
  width: 100%;
}

.modal__wrapper {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  z-index: $zModal;

  @media (min-width: $break--tablet-l) {
    height: auto;
    width: auto;
  }

  height: 100%;
  width: 100%;
}

.modal__wrapper-cross {
  position: absolute;
  right: 15px;
  top: 8px;

  padding: 5px;

  cursor: pointer;
}

.modal__overlay {
  background: $dark-grey1;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: $zModalOverlay;

  background-color: rgba($dark-grey1, 0.5);

  cursor: pointer;
}
</style>
