<script setup lang="ts">
import type { DocsProjectItem } from '../../types'
import { computed } from 'vue'

const props = defineProps<{
  status: DocsProjectItem['status']
}>()

const type = computed(() => {
  switch (props.status) {
    case 'dev':
      return 'warning'
    case 'prod':
      return 'tip'
    default:
      return 'info'
  }
})
</script>

<template>
  <Badge :type="type">
    {{ status }}
  </Badge>
</template>
