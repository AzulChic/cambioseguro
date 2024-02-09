<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'

interface Props {
  modelValue: number | any
  settingsData: {
    id: number
    code: string
    currency: string
    label: string
    symbol: string
    value: number
  }
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue', 'on-input'])

const internalValue = computed<number>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const qtyDigits: Ref<number> = ref(`${internalValue.value}`.length)

const symbolPosition = computed<string>(() => `${16 + 10.5 * qtyDigits.value}px`)

const limitChars = (payload: KeyboardEvent) => {
  const { value = '' } = payload.target as HTMLInputElement
  if (value.length === 10) {
    payload.preventDefault()
    return false
  }
}

const updateQtyDigits = (payload: Event) => {
  const { value = '' } = payload.target as HTMLInputElement
  qtyDigits.value = value.includes('.') ? value.length - 0.5 : value.length
  emit('on-input', props.settingsData, internalValue.value)
}
</script>

<template>
  <div class="input-form">
    <section class="input-form__currency">{{ settingsData.currency }}</section>
    <label class="input-form__label" :for="`${settingsData.id}`">{{ settingsData.label }}</label>
    <p class="input-form__symbol">{{ settingsData.symbol }}</p>
    <input
      v-model="internalValue"
      :id="`${settingsData.id}`"
      class="input-form__value"
      type="number"
      @input="updateQtyDigits"
      @keypress="limitChars"
    />
  </div>
</template>
<style lang="scss" scoped>
.input-form {
  align-content: end;
  border: 1px solid $purple;
  border-radius: 6px;
  display: grid;
  height: 45px;
  position: relative;
  width: 100%;

  &__currency {
    @include font-style($small, $regular, 24px, $purple);

    align-content: center;
    background-color: $gray-5;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    display: grid;
    height: 100%;
    position: absolute;
    text-align: center;
    width: 96.44px;

    @include tablet() {
      width: 94px;
    }
  }

  &__label {
    @include font-style($x-small, $regular, 14.22px, $gray);

    align-content: center;
    display: grid;
    height: 24px;
    position: absolute;
    right: 16px;
    top: 0px;
  }

  &__symbol {
    @include font-style($medium, $regular, 24px, $dark);

    bottom: 0px;
    height: 24px;
    right: v-bind(symbolPosition);
    position: absolute;
  }

  &__value {
    @include font-style($medium, $regular, 24px, $dark);

    border-radius: 6px;
    height: 24px;
    padding: 0px 16px 0px 0px;
    text-align: right;
    width: 100%;
  }
}
</style>
