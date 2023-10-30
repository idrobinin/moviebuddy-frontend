<script setup lang="ts">
import TimeControl from "./TimeControl.vue";
import VolumeControl from "./VolumeControl.vue";
import { ref } from "vue";

const videoDuration = ref<number>(0);
const videoCurrentTime = ref<number>(0);
const video = ref<HTMLVideoElement>();
const player = ref<HTMLElement>();

const setVideoData = () => {
  if (video.value?.readyState) {
    videoDuration.value = video.value?.duration;
  }
};

const progress = () => {
  if (video.value) videoCurrentTime.value = video.value.currentTime;
};

const onTimeChange = (value: number) => {
  if (video.value) video.value.currentTime = value;
};

const onVolumeChange = (volume: number) => {
  if (video.value) video.value.volume = volume;
};
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
      poster="https://i.ytimg.com/vi/0n7llXgSn4U/maxresdefault.jpg"
      @loadedmetadata="setVideoData"
      @progress="progress"
      @timeupdate="progress"
    />
    <TimeControl
      :videoDuration="videoDuration"
      :currentVideoPosition="videoCurrentTime"
      :isActive="true"
      @on-time-change="onTimeChange"
    />
    <VolumeControl @on-volume-change="onVolumeChange" />
  </div>
</template>

<style scoped>
.player {
  @apply w-full rounded-2xl aspect-video object-cover cursor-pointer relative;
}
.video-screen {
  @apply rounded-2xl drop-shadow-lg aspect-video block w-full h-full cursor-pointer bg-basic-black outline-none;
}

video::-webkit-media-controls {
  display: none !important;
  opacity: 0;
  visibility: hidden;
  appearance: none;
}
</style>
