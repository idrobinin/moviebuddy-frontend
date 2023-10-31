<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/vue/24/solid";

const volumeLevel = ref(50);

const emits = defineEmits<{
  "on-volume-change": [value: number];
}>();

const addVolume = () => {
  const videoVolume =
    volumeLevel.value + 10 >= 100 ? 100 : volumeLevel.value + 10;
  volumeLevel.value = videoVolume;
  emits("on-volume-change", videoVolume / 100);
};
const decVolume = () => {
  const videoVolume =
    volumeLevel.value - 10 <= 100 ? 0 : volumeLevel.value - 10;
  volumeLevel.value = videoVolume;
  emits("on-volume-change", videoVolume / 100);
};

const adjustVolume = (event: KeyboardEvent | WheelEvent | Event) => {
  //key
  if (event instanceof KeyboardEvent) {
    if (event.code === "ArrowUp") {
      addVolume();
      return;
    }
    if (event.code === "ArrowDown") {
      decVolume();
      return;
    }
  }
  //wheel
  if (event instanceof WheelEvent) {
    if (event.deltaY < 0) {
      addVolume();
      return;
    }
    if (event.deltaY > 0) {
      decVolume();
      return;
    }
  }
  emits("on-volume-change", volumeLevel.value / 100);
};

onMounted(() => {
  window.addEventListener("keydown", adjustVolume);
  window.addEventListener("wheel", adjustVolume);
});
onUnmounted(() => {
  window.removeEventListener("keydown", adjustVolume);
  window.removeEventListener("wheel", adjustVolume);
});
</script>

<template>
  <div class="volume-container">
    <SpeakerWaveIcon
      v-if="volumeLevel > 0"
      class="w-[25px] text-white rotate-90"
      @click="volumeLevel = 0"
    />
    <SpeakerXMarkIcon
      v-else
      class="w-[25px] text-white rotate-90"
      @click="volumeLevel = 10"
    />
    <input
      type="range"
      class="volume-slider"
      min="0"
      max="100"
      step="1"
      @change="adjustVolume"
      @mousemove="adjustVolume"
      v-model="volumeLevel"
    />
  </div>
</template>

<style scoped>
.volume-container {
  @apply rotate-270 flex gap-2 absolute left-[-20px] bottom-2/4;
}

.volume-slider {
  cursor: pointer;
}
.volume-container:hover {
}
</style>
