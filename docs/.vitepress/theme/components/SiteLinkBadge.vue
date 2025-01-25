<script setup lang="ts">
defineProps<{
  /**
   * 站点链接
   */
  title?: string
  link: string
}>()
</script>

<template>
  <a
    :href="link" target="_blank" :title="title"
    flex="~ items-center justify-start gap-2 cursor-pointer"
    class="my-4 rounded bg-$vp-c-bg-soft p-4 shadow text-$vp-c-text-1! no-underline!"
    hover="bg-gray-50 dark:bg-dark-500"
  >
    <div class="size-10" i-ri-global-line />
    <div flex="~ col gap-1">
      <div class="text-base">
        在线站点
      </div>
      <span class="text-xs op-60">
        {{ link }}
      </span>
    </div>
  </a>
</template>
