<script setup lang="ts">
import Page from "../components/layout/Page.vue";
import Tabs from "../components/Tabs.vue";
import { ref, defineAsyncComponent } from "vue";
import { tabsMock } from "../mocks/tabs";
import MainBanner from "../components/MainBanner.vue";
import ContentRow from "../components/ContentRow.vue";

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
  </Page>
</template>
