<script setup>
import { useSubscriptionStore } from '~~/stores/useSubscriptionStore'

const subStore = useSubscriptionStore()
</script>

<template>
  <div>
    <h2>Ваша підписка: {{ subStore.selectedPlan }}</h2>
  </div>
</template>
