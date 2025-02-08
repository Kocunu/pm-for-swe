<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">E-Mail:</label>
                <input id="email" type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Passwort:</label>
                <input id="passwort" type="password" v-model="password" required />
            </div>
            <button type="submit">Einloggen</button>
        </form>
        <p>Noch kein Account? <router-link to="/register">Regisitrieren</router-link></p>
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref } from 'vue';

    export default defineComponent({
        name: "Login",
        setup() {
            const email = ref('')
            const password = ref('')

            const handleLogin = () => {
                console.log("Login mit", email.value, password.value);   
            }
            return {
                email,
                password,
                handleLogin,
            }
        },
    })
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>