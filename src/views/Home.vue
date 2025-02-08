<template>
    <div>
        <h1>Home Template</h1>
        <h2>Counter: {{ counter.count }}</h2>
        <p>Wert: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">Erhöhen</button>
        <button @click="counter.decrement">Verringern</button>
        <router-link to="/about">About me</router-link>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useCounterStore } from '../stores/counter';

    export default defineComponent ({
        name: 'Home',
        setup() {
            const counter = useCounterStore()

            return {counter}
        }
    })
</script>