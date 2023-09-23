<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

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

onMounted(() => {
  window.addEventListener("keydown", skip);
});

onUnmounted(() => {
  window.removeEventListener("keydown", skip);
});
</script>

<template>
  <div class="controls" v-bind="$attrs">
    <time class="text-gray-400">00:00</time>

    <input
      type="range"
      class="time-track"
      :min="0"
      :max="videoDuration"
      :value="currentVideoPosition"
      @change="updateTimeBar"
    />

    <time class="text-gray-400">00:00</time>
  </div>
</template>

<style scoped></style>
