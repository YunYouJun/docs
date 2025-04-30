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

const logoClasses = computed(() => {
  const classes = []
  if (props.project.logo)
    classes.push(props.project.logo)

  let textSize = 'text-6xl'
  if (props.project.description) {
    if (props.project.icons?.length) {
      textSize = 'text-4xl'
    }
    else {
      textSize = 'text-5xl'
    }
  }

  classes.push(textSize)
  return classes
})
</script>

<template>
  <a
    :key="project.title"
    class="project-link relative rounded-xl p-2 cursor-pointer"
    border="~ 1px solid transparent"
    hover="border-color-$vp-c-brand"
    :href="isExternalLink ? project.link : undefined"
    :target="isExternalLink ? '_blank' : ''"
    flex="~ col items-center justify-center"
    size-40
    :class="{
      'gap-2': project.description,
      'gap-4': !project.description,
    }"
    @click="onClick"
  >
    <div
      flex="~"
      :style="`color: ${project.color}`"
      :class="logoClasses"
    />
    <div
      v-if="project.icons?.length"
      class="flex items-center justify-center my-1" gap-2
    >
      <div v-for="icon in project.icons" :key="icon" :class="icon" />
    </div>
    <div class="flex items-center justify-center flex-col gap-2">
      <div
        text-sm
        class="font-sans-serif font-bold leading-none"
        :class="{
          '-mb-2': !project.description,
        }"
      >
        {{ project.title }}
      </div>
      <span
        v-if="project.description"
        class="text-8px leading-normal"
      >
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
