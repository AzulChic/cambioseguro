<script setup lang="ts">
interface Props {
  tabs: Array<{ id: number; title: string; price: number }>
}

defineProps<Props>()
</script>

<template>
  <div class="tabs">
    <button v-for="(tab, tabIdx) in tabs" :key="tabIdx" class="tabs-item">
      <p class="tabs-item__title">{{ tab.title }}</p>
      <span class="tabs-item__price">{{ tab.price }}</span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.tabs {
  &-item {
    &__title {
      @include font-style($x-small, $regular, 14.22px, $blue);
    }

    &__price {
      @include font-style($x-small, $semibold, 14.22px, $blue);
    }
  }
}
</style>
