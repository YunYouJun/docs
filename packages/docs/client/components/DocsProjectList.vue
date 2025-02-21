<script setup lang="ts">
import type { ProjectItem } from '../../types'
import DocsProjectCard from './DocsProjectCard.vue'

defineProps<{
  projects: ProjectItem[]
}>()
</script>

<template>
  <div flex="~ wrap gap-2">
    <DocsProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>
