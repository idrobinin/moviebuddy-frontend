<script setup lang="ts">
import TimeControl from "./TimeControl.vue";
import VolumeControl from "./VolumeControl.vue";
</script>

<template>
  <div ref="player" class="player">
    <video
      class="video-screen"
      preload="auto"
      ref="video"
      src="../../assets/video.mp4"
      controls
      allowfullscreen
      type="video/mp4"
      poster=""
    />
    <TimeControl />
    <VolumeControl />
  </div>
</template>

<style scoped>
.player {
  @apply w-full rounded-2xl aspect-video object-cover cursor-pointer relative;
}
.video-screen {
  @apply rounded-2xl drop-shadow-lg aspect-video block w-full h-full cursor-pointer bg-basic-black;
}

video::-webkit-media-controls {
  display: none !important;
}
</style>
