<script setup>
import { useUserStore } from '~~/stores/useUserStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const userStore = useUserStore()
const { name, isLoggedIn, welcomeMessage } = storeToRefs(userStore)

const inputName = ref('')

const handleLogin = () => {
  if (inputName.value) {
    userStore.login(inputName.value)
    inputName.value = ''
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ welcomeMessage }}</h1>

    <div v-if="!isLoggedIn">
      <input v-model="inputName" placeholder="Введіть ім'я" />
      <button @click="handleLogin">Увійти</button>
    </div>

    <div v-else>
      <p>Ви зайшли о: {{ userStore.loginTime }}</p>
      <button @click="userStore.logout()">Вийти</button>
    </div>

    <button @click="userStore.fetchProfile()">Завантажити профіль</button>

    <div v-if="userStore.isLoading">Завантаження...</div>

    <div v-if="userStore.profileData">
      <p>{{ userStore.profileData.login }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  background: #111827;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  background: #3b82f6;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #2563eb;
}
</style>
