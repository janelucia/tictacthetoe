<template>
  <div
    class="absolute glass rounded flex flex-col items-center justify-center gap-4 w-[40vw] h-[40vh] z-10"
    style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
  >
    <p class="font-bold text-4xl">{{ player }} won</p>
    <button class="rounded-box bg-primary px-4 py-2" @click="$emit('newGame')">Play again!</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ player?: string }>();

// TODO: on button click emit newGame event

defineEmits<{
  (
    event: 'newGame',
  ): void;
}>();
</script>
