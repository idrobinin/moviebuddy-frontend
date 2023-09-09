<script setup lang="ts">
import { IMovie } from "../types";
defineProps<IMovie>();
</script>

<template>
  <div class="rounded-lg px-4 mt-5 min-h-52 h-56 w-96">
    <img
      :src="poster"
      :alt="title"
      class="hover:rounded-lg cursor-pointer max-h-40 rounded-lg object-cover h-full w-full shadow-md hover:shadow-zinc-950 hover:scale-105 transition-transform duration-300 transform"
    />
    <div class="flex justify-between mt-2.5">
      <h2 class="text-white font-bold">{{ title }}</h2>
      <div class="text-gray-500">
        <span class="mr-3">{{ year }}</span>
        <span class="mr-1.5">⭐</span>
        <span>{{ rate }}</span>
      </div>
    </div>
  </div>
</template>
