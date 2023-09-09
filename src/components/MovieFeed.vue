<script setup lang="ts">
import { IMovie } from "../types";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import MovieCard from "./MovieCard.vue";

defineProps<{
  movies: IMovie[];
}>();
</script>

<template>
  <div class="my-6">
    <Carousel :items-to-show="3.5" :wrap-around="true">
      <Slide class="drop-shadow-2xl" v-for="movie in movies" :key="movie.id">
        <MovieCard v-bind="movie" />
      </Slide>
    </Carousel>
  </div>
</template>
