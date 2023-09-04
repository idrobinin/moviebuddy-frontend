<script setup lang="ts">
import Stack from "./Stack.vue";
import { flashNews } from "../mocks/news.ts";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

const currNews = flashNews[0];
</script>

<template>
  <Stack>
    <div class="w-full h-full bg-white rotate-3 drop-shadow-xl p-6 rounded-2xl">
      <div class="news-top">
        <img
          class="rounded-2xl aspect-video"
          :src="currNews.image"
          alt="flash news poster"
        />
        <h2 class="mt-4 font-bold text-xl text-basic-orange">🔥 Hot news</h2>
        <p class="mt-4 font-bold">{{ currNews.text }}</p>
      </div>
      <div class="news-footer flex justify-between w-full mt-5">
        <p class="text-gray-400">{{ currNews.date }}</p>
        <p class="text-gray-900 mr-8 flex">
          1/5 <ArrowRightIcon class="w-6 ml-2" />
        </p>
      </div>
    </div>
  </Stack>
</template>

<style scoped></style>
