<script setup lang="ts">
import { IMovie } from "../types";
defineProps<IMovie>();
</script>

<template>
  <div
    class="rounded-lg cursor-pointer mx-5 h-48 w-96 hover:scale-105 hover:shadow-zinc-950 hover:shadow-md transition-transform duration-300 transform"
  >
    <img
      :src="poster"
      :alt="title"
      class="rounded-lg object-cover h-full w-full hover:scale-105 transition-transform duration-300 transform"
    />
  </div>
</template>

<style scoped></style>
