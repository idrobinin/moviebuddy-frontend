<script setup lang="ts">
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex flex-1">
      <Sidebar />
      <main class="min-w-0 flex flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>
