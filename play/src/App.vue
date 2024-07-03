<script setup lang="ts">
import { MButton } from '@migi-ui/components'

const handleClick = () => {
  console.log('click!')
}
</script>

<template>
  <MButton @click="handleClick">click!</MButton>
</template>