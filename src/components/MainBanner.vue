<script setup lang="ts">
import { bannerMock } from "../mocks/MainPageBanner";

const bg = `url(${bannerMock.poster})`;
</script>

<template>
  <div
    class="banner flex self-stretch w-[60%] rounded-2xl overflow-hidden drop-shadow-xl cursor-pointer"
  >
    <div class="text-white p-8 self-end">
      <h1 class="text-4xl mb-2 font-bold">{{ bannerMock.title }}</h1>
      <p class="my-2">{{ bannerMock.plot }}</p>
      <div class="flex gap-4 font-bold">
        <span>{{ bannerMock.year }}</span>
        <span>{{ bannerMock.genre }}</span>
        <span>{{ bannerMock.duration }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background:
    linear-gradient(rgb(255, 255, 255, 0%), #262931ad),
    v-bind(bg) no-repeat;

  background-size: cover;
}
</style>
