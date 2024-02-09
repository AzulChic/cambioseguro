<script setup lang="ts">
import ExchangeMoneyForm from '../components/ExchangeMoneyForm.vue'
</script>
<template>
  <main class="home-view">
    <header class="home-view__header">
      <h1 class="home-view__header--title">El mejor tipo de cambio</h1>
      <h3 class="home-view__header--subtitle">para cambiar dólares y soles online en Perú</h3>
    </header>
    <ExchangeMoneyForm :purchase-price="3.924" :sale-price="3.945" />
  </main>
</template>
<style lang="scss" scoped>
.home-view {
  @include linear-gradient(top, $background);
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, fit-content(100%));
  justify-items: center;
  min-height: 100vh;
  width: 100%;

  &__header {
    margin: 25px 0px;
    max-width: 217px;
    text-align: center;

    @include tablet() {
      max-width: 342px;
      text-align: left;
    }

    &--title {
      @include font-style($large, $semibold, 25.2px, $white);

      @include tablet() {
        @include font-style($x-large, $semibold, 49.2px, $white);
      }
    }

    &--subtitle {
      @include font-style($small, $regular, 16.59px, $white);

      @include tablet() {
        @include font-style($large, $regular, 28.44px, $white);
      }
    }
  }

  @include tablet() {
    align-items: center;
    grid-template-columns: repeat(2, fit-content(100%));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    justify-content: space-around;
  }
}
</style>
