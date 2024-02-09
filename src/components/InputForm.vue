<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: number
  settingsData: { id: number; currency: string; label: string; symbol: string; value: number }
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const internalValue = computed<number>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  {{ settingsData.currency }} {{ settingsData.label }} {{ settingsData.symbol }}
  <input v-model="internalValue" type="number" />
</template>
