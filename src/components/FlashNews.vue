<script setup lang="ts">
import Stack from "./Stack.vue";
import { computed, ref } from "vue";
import { flashNews as FlashNewsMock } from "../mocks/news.ts";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { IFlashNews } from "../types/index.ts";

// Slider
const isBackDirection = ref<boolean>(false);
const currSlideIndex = ref<number>(0);
const currNews = computed(() => {
  return FlashNewsMock[currSlideIndex.value];
});

const isLastSlide = computed(() => {
  return currSlideIndex.value >= FlashNewsMock.length - 1;
});

const nextSlide = () => {
  if (isLastSlide.value) {
    return;
  }
  isBackDirection.value = false;
  toggleLoading();
  currSlideIndex.value++;
};
const prevSlide = () => {
  if (currSlideIndex.value <= 0) {
    return;
  }
  isBackDirection.value = true;
  toggleLoading();
  currSlideIndex.value--;
};

// Animation
const loading = ref<boolean>(false);
const toggleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 300);
};
</script>

<template>
  <Stack>
    <Transition :name="isBackDirection ? 'slide-fade-reverse' : 'slide-fade'">
      <div
        v-show="!loading"
        class="w-full h-full bg-white rotate-3 drop-shadow-xl p-6 rounded-2xl"
      >
        <div class="news-top">
          <img
            class="rounded-2xl aspect-video"
            :src="currNews.image"
            alt="flash news poster"
          />
          <h2 class="mt-4 font-bold text-xl text-basic-orange">🔥 Hot news</h2>
          <div class="min-h-[110px] overflow-hidden">
            <p class="mt-4 font-bold">
              {{ currNews.text }}
            </p>
          </div>
        </div>
        <div class="news-footer flex justify-between w-full mt-3">
          <p class="text-gray-400">{{ currNews.date }}</p>
          <div class="text-gray-900 mr-8 flex">
            <div class="w-6 mr-2">
              <ArrowLeftIcon
                v-if="currSlideIndex > 0"
                @click="prevSlide"
                class="cursor-pointer"
              />
            </div>
            <span>{{ currSlideIndex + 1 }}/{{ FlashNewsMock.length }}</span>
            <div class="w-6 ml-2">
              <ArrowRightIcon
                v-if="!isLastSlide"
                @click="nextSlide"
                class="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Stack>
</template>

<style scoped>
/* Начальное смещение */
.slide-fade-enter-active,
.slide-fade-leave-active,
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active {
  transition:
    opacity 1s,
    transform 1s;
}
.slide-fade-enter,
.slide-fade-leave-to,
.slide-fade-reverse-enter,
.slide-fade-reverse-leave-to {
  opacity: 0.7;
  transform: translateX(0); /* Значение 0 при начале анимации */
}

/* Сдвиг влево */
.slide-fade-enter {
  transform: translateX(-5px); /* При входе сдвиг влево */
}
.slide-fade-leave-to {
  transform: translateX(25px); /* При выходе сдвиг влево */
}

/* Сдвиг вправо */
.slide-fade-reverse-enter {
  transform: translateX(25px); /* При входе сдвиг вправо */
}
.slide-fade-reverse-leave-to {
  transform: translateX(-25px); /* При выходе сдвиг вправо */
}
</style>
