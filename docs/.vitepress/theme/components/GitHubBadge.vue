<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  /**
   * GitHub Repo Name
   */
  repo: string
  title?: string
}>()

const repoUrl = computed(() => {
  return `https://github.com/${props.repo}`
})
</script>

<template>
  <a
    :href="repoUrl" target="_blank" :title="title"
    flex="~ items-center justify-start gap-2 cursor-pointer"
    class="my-4 rounded bg-$vp-c-bg-soft p-4 shadow text-$vp-c-text-1! no-underline!"
    hover="bg-gray-50 dark:bg-dark-500"
  >
    <div class="size-10" i-ri-github-line />
    <div class="text-base">
      {{ repo }}
    </div>
  </a>
</template>
