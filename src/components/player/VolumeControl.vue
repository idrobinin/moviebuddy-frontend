<script setup lang="ts">
import { ref } from "vue";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/vue/24/solid";

const volumeLevel = ref(50);

const emits = defineEmits<{
  "on-volume-change": [value: number];
}>();

const adjustVolume = () => {
  emits("on-volume-change", volumeLevel.value / 100);
};
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
.volume-container:hover {
}
</style>
