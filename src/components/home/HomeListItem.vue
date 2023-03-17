<template>
  <div class="home-list-item" :class="{ 'home-list-item--selected': isSelected }">
    <div class="home-list-item__title">{{ file.name }}</div>

    <div
      class="home-list-item__container"
      :class="{ 'home-list-item__container--visible': isSelected }"
    >
      <div class="home-list-item__image">
        <img :src="file.url" alt="File image" />
      </div>
      <div class="home-list-item__text">{{ file.content }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  file: { type: Object, required: true },
  isSelected: { type: Boolean, default: false }
})
</script>

<style lang="scss">
.home-list-item {
  @media (min-width: $break--tablet-l) {
    width: 200px;
  }

  // width: calc(100vw - 32px); //Padding + border

  padding: 5px 15px;
  cursor: pointer;
  background-color: $grey3;

  border: 1px $black solid;

  &--selected {
    background-color: $white;
  }

  &:hover {
    background-color: $grey1;
  }

  &:first-child {
    border-radius: 15px 0 0 0;
  }

  &:last-child {
    border-radius: 0 0 0 15px;
  }
}

.home-list-item__title {
  @media (min-width: $break--tablet-l) {
    font-weight: unset;
  }
  font-weight: bold;
}

.home-list-item__container {
  display: none;

  &--visible {
    @media (min-width: $break--tablet-l) {
      display: none;
    }

    min-height: 200px;

    display: block;
  }
}

.home-list-item__image {
  width: 100px;
  height: 150px;

  margin: 10px;

  border: 5px solid $white;
  box-shadow: $secondary-box-shadow;

  float: left;
}

.home-list-item__text {
  white-space: pre-wrap;
}
</style>
