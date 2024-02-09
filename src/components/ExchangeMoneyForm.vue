<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useCurrencyStore } from '@/stores/currency'
import ExchangeInputsForm from './ExchangeInputsForm.vue'
import TabsForm from './TabsForm.vue'

const inputs: Ref<
  { id: number; code: string; currency: string; symbol: string; value: number | string }[]
> = ref([
  {
    id: 1,
    code: 'USD',
    currency: 'Dólares',
    symbol: '$',
    value: 1000
  },
  {
    id: 2,
    code: 'PEN',
    currency: 'Soles',
    symbol: 'S/',
    value: 3945
  }
])

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

const { updateCurrency } = useCurrencyStore()

onMounted(() => updateCurrency(inputs.value[0].code))

const updateInputsByCurrency = (code: string, model: number) => {
  const tabSelected = tabs.value.find(
    (tab) => tab.code === (code === 'USD' ? 'purchase' : 'sale')
  ) || { price: 0 }
  inputs.value[inputs.value.findIndex((i) => i.code !== code)].value = (
    (code === 'USD' ? model * tabSelected.price : model / tabSelected.price) as number
  ).toFixed(2)
}

const sortInputs = (code: string) => {
  inputs.value.sort((a, b) => (code === 'sale' ? b.id - a.id : a.id - b.id))
  updateCurrency(inputs.value[0].code)
}

const onChangeTab = (tab: { code: string; id: number }) => {
  tabs.value = tabs.value.map((t) => ({
    ...t,
    active: t.id === tab.id
  }))
  sortInputs(tab.code)
}
</script>

<template>
  <form class="exchange-form">
    <tabs-form :tabs="tabs" @on-click="onChangeTab" />
    <section class="exchange-form__body">
      <exchange-inputs-form
        :inputs="inputs"
        @update-inputs-by-currency="updateInputsByCurrency"
        @on-click="onChangeTab(tabs.find((t) => !t.active) || { code: '', id: 0 })"
      />
      <button class="exchange-form__button">Iniciar operación</button>
    </section>
  </form>
</template>
<style lang="scss" scoped>
.exchange-form {
  @include linear-gradient(left, ($white, $smoke));
  display: grid;
  justify-items: center;
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
