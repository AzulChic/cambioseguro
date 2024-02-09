import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', () => {
  const currency = ref('USD')
  const updateCurrency = (value: string) => {
    currency.value = value
  }

  return { currency, updateCurrency }
})
