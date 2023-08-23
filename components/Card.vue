<template>
  <div class="card w-96 bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <div class="card-actions justify-end">
        <NuxtLink :to="solo">
          <button class="btn btn-primary">Solo</button>
        </NuxtLink>
        <NuxtLink :to="multiplayer">
          <button class="btn btn-ghost">Multiplayer</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  solo: string;
  multiplayer: string;
}>();
</script>
