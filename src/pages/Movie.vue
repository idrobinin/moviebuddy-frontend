<script setup lang="ts">
import Page from "../components/layout/Page.vue";
import VideoPlayer from "../components/player/VideoPlayer.vue";
</script>

<template>
  <Page>
    <template #title>Movie</template>
    <div class="px-5 mb-10">
      <VideoPlayer />
    </div>
  </Page>
</template>
