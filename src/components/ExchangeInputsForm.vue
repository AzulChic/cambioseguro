<script setup lang="ts">
import { ref, type Ref } from 'vue'
import InputForm from './InputForm.vue'

interface Props {
  purchasePrice: number
  salePrice: number
}

const props = defineProps<Props>()

const inputs: Ref<
  { id: number; code: string; currency: string; label: string; symbol: string; value: number }[]
> = ref([
  {
    id: 1,
    code: 'USD',
    currency: 'Dólares',
    label: 'Envías',
    symbol: '$',
    value: 1000
  },
  {
    id: 2,
    code: 'PEN',
    currency: 'Soles',
    label: 'Recibes',
    symbol: 'S/',
    value: 3945
  }
])

const updateInputsByCurrency = ({ code }: { code: string }, model: number) => {
  inputs.value[inputs.value.findIndex((i) => i.code !== code)].value =
    model * (code === 'USD' ? props.purchasePrice : props.salePrice)
}
</script>

<template>
  <div class="exchange-inputs-form">
    <button class="exchange-inputs-form__button">
      <img src="../assets/icons/switch.svg" height="42" width="42" />
    </button>
    <template v-for="(item, idx) in inputs" :key="idx">
      <input-form v-model="item.value" :settings-data="item" @on-input="updateInputsByCurrency" />
    </template>
  </div>
</template>
<style lang="scss" scoped>
.exchange-inputs-form {
  align-content: center;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-items: center;
  position: relative;
  row-gap: 21px;

  &__button {
    align-self: center;
    display: grid;
    margin: auto;
    position: absolute;
    z-index: 10;
  }
}
</style>
