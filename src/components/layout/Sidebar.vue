<script setup lang="ts">
import {
  HomeIcon as HomeOutlineIcon,
  FilmIcon as FilmOutlineIcon,
  MagnifyingGlassCircleIcon as MagnifyingGlassCircleOutlineIcon,
} from "@heroicons/vue/24/outline";
import {
  HomeIcon as HomeSolidIcon,
  FilmIcon as FilmSolidIcon,
  MagnifyingGlassCircleIcon as MagnifyingGlassCircleSolidIcon,
} from "@heroicons/vue/24/solid";
import { useRoute } from "vue-router";

const menu = [
  {
    to: { name: "home" },
    icon: HomeOutlineIcon,
    activeIcon: HomeSolidIcon,
  },
  {
    to: { name: "search" },
    icon: MagnifyingGlassCircleOutlineIcon,
    activeIcon: MagnifyingGlassCircleSolidIcon,
  },
  {
    to: { name: "movie", params: { id: "1" } },
    icon: FilmOutlineIcon,
    activeIcon: FilmSolidIcon,
  },
];

const route = useRoute();
</script>

<template>
  <nav class="block bg-bright-basic-black">
    <div class="flex flex-col py-9 px-7 relative space-y-3">
      <router-link
        v-for="(nav, i) in menu"
        :to="nav.to"
        :key="`${nav.to}${i}`"
        class="cursor-pointer h-14 w-14 flex flex-shrink items-center justify-center rounded-lg"
        :class="
          route.name == nav.to.name
            ? 'text-gray-400'
            : 'bg-basic-black hover:scale-110 hover:shadow-zinc-950 hover:shadow-md'
        "
      >
        <component :is="nav.icon" class="w-8 h-8" />
      </router-link>
    </div>
  </nav>
</template>
