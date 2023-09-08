<script setup lang="ts">
import { ITab } from "../types/index.ts";
defineProps<{
  tabs: ITab[];
  activeTabId: string;
}>();

// передаем эмит с id таба для детекта активного таба
const emits = defineEmits<{
  (e: "on-tab-change", activeTabId: string): void;
}>();
</script>

<template>
  <div class="px-5">
    <nav class="rounded-xl bg-basic-black p-1">
      <ul class="flex flex-wrap column items-center gap-5 text-l font-medium">
        <li
          v-for="{ id, emoji, title } in tabs"
          :key="id"
          class="bg-bright-basic-black rounded-2xl text-white-500 drop-shadow-sm"
        >
          <a
            @click="emits('on-tab-change', id)"
            href="#"
            :class="
              id == activeTabId ? 'bg-orange-500' : 'bg-bright-basic-black'
            "
            class="flex items-center rounded-2xl justify-center gap-2 px-8 py-3 text-white shadow transition-transform duration-300 transform hover:bg-basic-orange hover:scale-105 hover:shadow-zinc-950 hover:shadow-md"
          >
            <div>{{ emoji }}</div>
            <div>{{ title }}</div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
