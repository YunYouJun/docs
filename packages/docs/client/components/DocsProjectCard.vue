<script setup lang="ts">
import type { ProjectItem } from '../../types'
import { useRouter, withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{
  project: ProjectItem
}>()

const router = useRouter()

/**
 * 是否是外部链接
 */
const isExternalLink = computed(() => {
  if (typeof props.project.blank === 'boolean')
    return props.project.blank
  return props.project.link?.startsWith('http')
})

function onClick() {
  if (isExternalLink.value)
    return

  router.go(withBase(props.project.link || ''))
}
</script>

<template>
  <a
    :key="project.title"
    class="project-link relative rounded-xl p-2 cursor-pointer gap-1"
    border="~ 1px solid transparent"
    hover="border-color-$vp-c-brand"
    :href="isExternalLink ? project.link : undefined"
    :target="isExternalLink ? '_blank' : ''"
    flex="~ col items-center justify-center"
    size-40
    @click="onClick"
  >
    <div class="text-4xl" flex="~" :style="`color: ${project.color}`" :class="project.logo" />
    <div class="flex items-center justify-center" gap-2>
      <div v-for="icon in project.icons" :key="icon" class="my-2" :class="icon" />
    </div>
    <div class="flex items-center justify-center flex-col">
      <span text-sm class="font-sans-serif font-bold">
        {{ project.title }}
      </span>
      <span class="text-8px">
        {{ project.description }}
      </span>
    </div>
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
