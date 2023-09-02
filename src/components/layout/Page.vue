<script setup lang="ts">
interface Props {
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <section
    class="bg-basic-black flex h-full min-w-0 flex-1 flex-col overflow-y-auto"
  >
    <!--    upper part of layout-->
    <div class="py-9 px-4 flex justify-between">
      <h1 v-if="title" class="text-4xl font-black text-white">{{ title }}</h1>
      <h1 v-else class="text-4xl font-black text-white">
        <slot name="title" />
      </h1>
      <div>
        <slot name="header" />
      </div>
    </div>
    <!--    lower part of layout-->
    <div>
      <slot />
    </div>
  </section>
</template>
