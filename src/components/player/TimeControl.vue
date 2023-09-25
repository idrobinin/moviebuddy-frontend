<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs } from "vue";

const props = defineProps<{
  isActive: boolean;
  videoDuration: number;
  currentVideoPosition: number;
}>();

const emits = defineEmits<{
  "on-time-change": [value: number];
}>();

const timeBar = ref<number>(0);

const updateTimeBar = (event: Event) => {
  const currentTarget = event.target as HTMLInputElement;
  timeBar.value = +currentTarget.value;
  emits("on-time-change", timeBar.value);
};

const skip = () => {};

const calculateTime = (duration: number) => {
  const seconds = Math.floor(duration % 60);
  const minutes = Math.floor(duration / 60);
  const computedSeconds = seconds >= 10 ? seconds : `0${seconds}`;

  return `${minutes}:${computedSeconds}`;
};

const { currentVideoPosition, videoDuration } = toRefs(props);

const currentTime = computed(() => {
  return calculateTime(currentVideoPosition.value);
});

const timeTotal = computed(() => {
  return calculateTime(videoDuration.value);
});

const range = computed(() => {
  const percent = (
    (currentVideoPosition.value / videoDuration.value) *
    100
  ).toFixed(2);
  return `${percent}%`;
});

onMounted(() => {
  window.addEventListener("keydown", skip);
});

onUnmounted(() => {
  window.removeEventListener("keydown", skip);
});
</script>

<template>
  <div class="controls" v-bind="$attrs">
    <time class="text-white">{{ currentTime }}</time>

    <input
      type="range"
      class="time-track"
      step="1"
      :min="0"
      :max="videoDuration"
      :value="currentVideoPosition"
      @change="updateTimeBar"
    />

    <time class="text-white">{{ timeTotal }}</time>
  </div>
</template>

<style scoped>
.time-track {
  @apply cursor-pointer rounded-2xl self-center opacity-70 w-[90%] h-[8px] outline-none;
  background-image: linear-gradient(#f37515, #f37515);
  background-repeat: no-repeat;
  background-size: v-bind(range);
  -webkit-appearance: none;
}
.time-track::-webkit-slider-thumb {
  @apply w-[18px] h-[18px] rounded-full bg-basic-orange cursor-pointer;
  -webkit-appearance: none;
  outline: none;
}
.controls {
  @apply flex items-center w-full justify-between px-4 m-0 opacity-0;
  transition: 0.5s;
  transition-property: opacity, visibility;
  transform: translateY(-50px);
}
.controls:hover {
  @apply opacity-100;
}
</style>
