<script setup lang="ts"></script>

<template>
  <div class="max-w-md w-full self-stretch relative drop-shadow-md">
    <div class="absolute w-full h-full top-0 bg-basic-orange rounded-2xl">
      <div
        class="absolute w-full h-full top-0 bg-orange-400 rounded-2xl rotate-2 drop-shadow-xl"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
