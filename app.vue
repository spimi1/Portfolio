<template>
    <NuxtLayout>
      <NuxtPage />
      <NuxtLink />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>

<script setup>
import { useI18n, useLocalePath } from '#imports'
// ...
</script>
