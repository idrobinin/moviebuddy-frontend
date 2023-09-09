<script setup lang="ts">
import { IMovie } from "../types";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import MovieCard from "./MovieCard.vue";
import { ref, onBeforeMount, onMounted } from "vue";
import { getSlidesToShow } from "../helpers/getSlidesToShow";

defineProps<{
  movies: IMovie[];
}>();

const screenWidth = ref(window.innerWidth);

const { slides } = getSlidesToShow(screenWidth);
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeMount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="mb-4">
    <Carousel :items-to-show="slides" :wrap-around="true">
      <Slide v-for="movie in movies" :key="movie.id">
        <MovieCard v-bind="movie" />
      </Slide>
    </Carousel>
  </div>
</template>
