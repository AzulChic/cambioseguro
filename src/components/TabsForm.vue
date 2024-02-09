<script setup lang="ts">
interface Props {
  tabs: Array<{ id: number; active: boolean; title: string; price: number }>
}

defineProps<Props>()
</script>

<template>
  <div class="tabs">
    <button
      v-for="(tab, tabIdx) in tabs"
      :key="tabIdx"
      class="tabs-item"
      :class="{ 'tabs-item--active': tab.active }"
    >
      <p class="tabs-item__title">{{ tab.title }}</p>
      <span class="tabs-item__price">{{ tab.price }}</span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.tabs {
  align-items: center;
  border-bottom: 1px solid $gray-10;
  display: grid;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  justify-content: space-evenly;

  &-item {
    @include font-style($x-small, $regular, 14.22px, $gray);
    border-bottom: 1px solid transparent;
    padding-bottom: 6px;

    &--active {
      color: $blue;
      border-color: $blue;
    }

    &__price {
      font-weight: $semibold;
    }
  }
}
</style>
