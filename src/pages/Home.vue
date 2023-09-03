<script setup lang="ts">
import Page from "../components/layout/Page.vue";
import Tabs from "../components/Tabs.vue";
import { ref } from "vue";
import { tabsMock } from "../mocks/tabs.ts";

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
  </Page>
</template>
