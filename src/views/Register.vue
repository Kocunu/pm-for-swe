<!-- src/views/Register.vue -->
<template>
    <div class="register-container">
      <h1>Registrieren</h1>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="name">Name:</label>
          <input id="name" type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">E-Mail:</label>
          <input id="email" type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Passwort:</label>
          <input id="password" type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Passwort bestätigen:</label>
          <input id="confirmPassword" type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Registrieren</button>
      </form>
      <p>Schon einen Account? <router-link to="/login">Einloggen</router-link></p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'Register',
    setup() {
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')
  
      const handleRegister = () => {
        if (password.value !== confirmPassword.value) {
          alert('Die Passwörter stimmen nicht überein!')
          return
        }
        // Hier später API-Aufruf zum Registrieren einfügen
        console.log('Registrierung mit:', name.value, email.value, password.value)
      }
  
      return {
        name,
        email,
        password,
        confirmPassword,
        handleRegister,
      }
    },
  })
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>