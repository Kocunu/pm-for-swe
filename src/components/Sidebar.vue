<!-- src/components/Sidebar.vue -->
<template>
    <div :class="['sidebar', { collapsed: isCollapsed }]">
      <!-- Header-Bereich mit optionalem Logo und Toggle-Button -->
      <div class="sidebar-header">
        <!-- Logo wird nur angezeigt, wenn Sidebar geöffnet ist -->
        <div class="logo" v-if="!isCollapsed">
          <!-- Beispiel: Du kannst hier ein Bild oder einen Text als Logo einfügen -->
          <img src="../assets/vue.svg" alt="Logo" />
        </div>
        <button class="toggle-button" @click="toggleSidebar">
          <!-- Das Icon wechselt je nach Zustand -->
          <i v-if="isCollapsed" class="fas fa-chevron-right"></i>
          <i v-else class="fas fa-chevron-left"></i>
        </button>
      </div>
      
      <!-- Navigationsmenü -->
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.name" class="menu-item">
          <router-link :to="item.route">
            <!-- Icon für den Menüpunkt -->
            <i :class="item.icon"></i>
            <!-- Text wird nur angezeigt, wenn Sidebar nicht kollabiert ist -->
            <span v-if="!isCollapsed">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Sidebar',
    setup() {
      // Zustand der Sidebar: true = eingeklappt, false = ausgeklappt
      const isCollapsed = ref(false);
      
      // Funktion zum Umschalten des Zustands
      const toggleSidebar = () => {
        isCollapsed.value = !isCollapsed.value;
      };
  
      // Beispiel-Menüpunkte
      const menuItems = [
        { name: 'Dashboard', route: '/dashboard', icon: 'fas fa-tachometer-alt' },
        { name: 'Projekte', route: '/projects', icon: 'fas fa-briefcase' },
        { name: 'Aufgaben', route: '/tasks', icon: 'fas fa-tasks' },
        { name: 'Kalender', route: '/calendar', icon: 'fas fa-calendar-alt' },
        { name: 'Berichte', route: '/reports', icon: 'fas fa-chart-line' },
      ];
  
      return {
        isCollapsed,
        toggleSidebar,
        menuItems,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Grundstil der Sidebar */
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;
    background: #2c3e50;
    color: #ecf0f1;
    transition: width 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  /* Im eingeklappten Zustand wird die Breite reduziert */
  .sidebar.collapsed {
    width: 70px;
  }
  
  /* Header-Bereich: Logo und Toggle-Button */
  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid rgba(236, 240, 241, 0.2);
  }
  
  /* Beispiel-Logo: Passe dies an oder ersetze es durch Text */
  .logo img {
    max-width: 100%;
    height: auto;
  }
  
  /* Stil des Toggle-Buttons */
  .toggle-button {
    background: none;
    border: none;
    color: #ecf0f1;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  /* Menü-Liste */
  .menu {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }
  
  /* Menü-Einträge */
  .menu-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    transition: background 0.2s;
  }
  
  /* Hover-Effekt für Menü-Einträge */
  .menu-item:hover {
    background: rgba(236, 240, 241, 0.1);
  }
  
  /* Abstand zwischen Icon und Text */
  .menu-item i {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  /* Links im Menü */
  .menu-item a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  /* Verhindert Zeilenumbruch beim Text */
  .menu-item span {
    white-space: nowrap;
  }
  </style>