<template>
  <div class="card w-96 glass text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <div class="card-actions justify-end">
        <NuxtLink v-if="hotseat" :to="hotseat">
          <button class="btn btn-primary">Hot Seat</button>
        </NuxtLink>
        <NuxtLink v-if="multiplayer" :to="multiplayer">
          <button class="btn btn-ghost">Multiplayer</button>
        </NuxtLink>
        <NuxtLink v-if="ai" :to="ai">
          <button class="btn btn-primary">AI</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  ai?: string;
  multiplayer?: string;
  hotseat?: string;
}>();
</script>
