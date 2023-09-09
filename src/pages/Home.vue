<script setup lang="ts">
import Page from "../components/layout/Page.vue";
import Tabs from "../components/Tabs.vue";
import { ref, defineAsyncComponent } from "vue";
import { tabsMock } from "../mocks/tabs";
import { moviesMock } from "../mocks/movies";
import MainBanner from "../components/MainBanner.vue";
import ContentRow from "../components/ContentRow.vue";
import MovieFeed from "../components/MovieFeed.vue";

const FlashNews = defineAsyncComponent(() => {
  return import("../components/FlashNews.vue");
});

const activeTabId = ref<string>("1");
const onTabChange = (tabId: string) => {
  activeTabId.value = tabId;
};
</script>

<template>
  <Page>
    <template #title>Home</template>

    <div>
      <Tabs
        :tabs="tabsMock"
        :activeTabId="activeTabId"
        @on-tab-change="onTabChange"
      />
    </div>
    <ContentRow>
      <MainBanner />
      <FlashNews />
    </ContentRow>

    <h1 class="text-white text-2xl font-bald w-full mt-6 px-5">
      Special for you
    </h1>
    <MovieFeed :movies="moviesMock" />
  </Page>
</template>
