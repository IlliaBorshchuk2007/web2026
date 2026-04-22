<script setup>
import { useSubscriptionStore } from '~~/stores/useSubscriptionStore'

const subStore = useSubscriptionStore()
</script>

<template>
  <div>
    <button @click="subStore.setPlan('Basic')">Basic</button>
    <button @click="subStore.setPlan('Pro')">Pro</button>
  </div>
</template>
