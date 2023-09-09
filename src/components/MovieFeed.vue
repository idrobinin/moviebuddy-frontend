<script setup lang="ts">
import { IMovie } from "../types";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import MovieCard from "./MovieCard.vue";
import { getSlidesToShow } from "./helpers/getSlidesToShow";

defineProps<{
  movies: IMovie[];
}>();

const { slidesToShow } = getSlidesToShow();
</script>

<template>
  <div class="mb-4">
    <Carousel :items-to-show="slidesToShow" :wrap-around="true">
      <Slide v-for="movie in movies" :key="movie.id">
        <MovieCard v-bind="movie" />
      </Slide>
    </Carousel>
  </div>
</template>
