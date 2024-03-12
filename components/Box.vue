<template>
  <div class="border-x border-b border-solid border-primary rounded-br-box rounded-bl-box flex flex-col gap-2 w-full">
    <h2 class="font-bold text-2xl sm:text-4xl px-4 bg-primary w-fit rounded-tr-box rounded-br-box">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
