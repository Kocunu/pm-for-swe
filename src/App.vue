<!-- src/App.vue -->
<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
  },
});
</script>

<style scoped>
/* Einfaches Layout-Beispiel */
#app {
  display: flex;
}

.content {
  margin-left: 250px;
  flex-grow: 1;
  padding: 1rem;
  transition: margin-left 0.3s ease;
}

/* Anpassung des Inhaltsbereichs, wenn Sidebar eingeklappt ist */
.sidebar.collapsed ~ .content {
  margin-left: 70px;
}
</style>