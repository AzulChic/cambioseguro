<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ExchangeInputsForm from './ExchangeInputsForm.vue'
import TabsForm from './TabsForm.vue'

const tabs: Ref<{ id: number; title: string; price: number }[]> = ref([
  {
    id: 1,
    title: 'Dolar compra',
    price: 3.924
  },
  {
    id: 2,
    title: 'Dolar venta',
    price: 3.945
  }
])
</script>

<template>
  <form class="exchange-form">
    <tabs-form :tabs="tabs" />
    <exchange-inputs-form />
    <button>Iniciar operación</button>
  </form>
</template>
<style lang="scss" scoped>
.exchange-form {
  background-color: $white;
  padding: 21px 0px 26px;
  width: 100%;

  @include tablet() {
    border: 1px solid $gray-10;
    border-radius: 8px;
    max-width: 386px;
  }
}
</style>
