<script setup lang="ts">
import { ref, type Ref } from 'vue'
import InputForm from './InputForm.vue'

const inputs: Ref<
  { id: number; currency: string; label: string; symbol: string; value: number }[]
> = ref([
  {
    id: 1,
    currency: 'Dólares',
    label: 'Envías',
    symbol: '$',
    value: 1000
  },
  {
    id: 2,
    currency: 'Soles',
    label: 'Recibes',
    symbol: 'S/',
    value: 3945
  }
])
</script>

<template>
  <div>
    <template v-for="(item, idx) in inputs" :key="idx">
      <input-form v-model="item.value" :settings-data="item" />
    </template>
  </div>
</template>
