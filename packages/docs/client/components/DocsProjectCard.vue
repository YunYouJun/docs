<script setup lang="ts">
import type { ProjectItem } from '../../types'

defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <a
    :key="project.title"
    class="project-link relative rounded-xl p-2"
    border="~ 1px solid transparent"
    hover="border-color-$vp-c-brand"
    :href="project.link"
    :target="project.blank ? '_blank' : ''"
    flex="~ col items-center justify-center"
    size-40
  >
    <div class="text-4xl" flex="~ grow" :style="`color: ${project.color}`" :class="project.logo" />
    <div class="flex items-center justify-center" gap-2>
      <div v-for="icon in project.icons" :key="icon" class="my-2" :class="icon" />
    </div>
    <span text-sm class="font-sans-serif font-bold">
      {{ project.title }}
    </span>
    <span class="text-8px">
      {{ project.description }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
.project-link {
  color: inherit !important;
  text-decoration: none !important;
  background-color: var(--vp-c-bg-soft, #f6f6f7);

  transition:
    border-color 0.25s,
    background-color 0.25s;

  &:hover {
    color: var(--vp-c-brand) !important;
  }
}
</style>
