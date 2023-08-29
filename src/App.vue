<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex flex-1 overflow-hidden">
      <aside>Aside</aside>
      <main class="min-w-0 flex">
        <router-view />
      </main>
    </div>
  </div>
</template>
