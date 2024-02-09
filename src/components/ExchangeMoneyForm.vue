<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ExchangeInputsForm from './ExchangeInputsForm.vue'
import TabsForm from './TabsForm.vue'

const tabs: Ref<{ id: number; active: boolean; code: string; price: number; title: string }[]> =
  ref([
    {
      id: 1,
      active: true,
      code: 'purchase',
      title: 'Dólar compra',
      price: 3.924
    },
    {
      id: 2,
      active: false,
      code: 'sale',
      title: 'Dólar venta',
      price: 3.945
    }
  ])
</script>

<template>
  <form class="exchange-form">
    <tabs-form :tabs="tabs" />
    <section class="exchange-form__body">
      <exchange-inputs-form :purchase-price="tabs[0].price" :sale-price="tabs[1].price" />
      <button class="exchange-form__button">Iniciar operación</button>
    </section>
  </form>
</template>
<style lang="scss" scoped>
.exchange-form {
  @include linear-gradient(left, ($white, $smoke));
  display: grid;
  justify-content: center;
  padding: 21px 0px 26px;
  width: 100%;

  @include tablet() {
    border: 1px solid $gray-10;
    border-radius: 8px;
    width: 386px;
  }

  &__body {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: center;
    margin-top: 40px;
    row-gap: 46px;
    width: 281.2px;

    @include tablet() {
      width: 275px;
    }
  }

  &__button {
    @include font-style($medium, $regular, 24px, $white);
    @include linear-gradient(0deg, ($base-color, $base-color));
    @include linear-gradient(0deg, ($purple, $purple));
    border: 1px solid $base-color;
    border-radius: 6px;
    height: 40px;
    padding: 8px 16px;
    width: 100%;
  }
}
</style>
