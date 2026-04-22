import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSubscriptionStore = defineStore('subscription', () => {
  const selectedPlan = ref('')

  function setPlan(plan: string) {
    selectedPlan.value = plan
  }

  return { selectedPlan, setPlan }
})
