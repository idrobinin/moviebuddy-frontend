<script setup lang="ts">
import TimeControl from "./TimeControl.vue";
import VolumeControl from "./VolumeControl.vue";
import { onMounted, ref } from "vue";

const videoDuration = ref<number>(0);
const videoCurrentTime = ref<number>(0);
const video = ref();
const player = ref<HTMLElement>();

const setVideoData = () => {
  if (video.value?.readyState) {
    console.log(video.value.duration);
    videoDuration.value = video.value?.duration;
  }
};

const progress = () => {
  console.log("PROGRESS", video.value.currentTime);
  videoCurrentTime.value = video.value.currentTime;
};

const onTimeChange = (value: number) => {
  video.value.currentTime = value;
};

onMounted(() => {
  video.value.addEventListener("timeupdate", progress);
});
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
    />
    <TimeControl
      :videoDuration="videoDuration"
      :currentVideoPosition="videoCurrentTime"
      :isActive="true"
      @on-time-change="onTimeChange"
    />
    {{ videoCurrentTime }}
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

/* video::-webkit-media-controls {
 display: none !important;
}*/
</style>
