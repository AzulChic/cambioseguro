<script setup lang="ts">
import InputForm from './InputForm.vue'

interface Props {
  inputs: Array<{
    id: number
    code: string
    currency: string
    symbol: string
    value: number | string
  }>
}

defineProps<Props>()

const emit = defineEmits(['update-inputs-by-currency', 'on-click'])

const onInput = ({ code }: { code: string }, model: number) => {
  emit('update-inputs-by-currency', code, model)
}
</script>

<template>
  <div class="exchange-inputs-form">
    <button class="exchange-inputs-form__button" @click.prevent="emit('on-click')">
      <img src="../assets/icons/switch.svg" height="42" width="42" />
    </button>
    <template v-for="(item, idx) in inputs" :key="idx">
      <input-form
        v-model="item.value"
        :label="idx === 0 ? 'Envías' : 'Recibes'"
        :settings-data="item"
        @on-input="onInput"
      />
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
