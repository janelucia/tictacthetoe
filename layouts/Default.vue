<template>
  <SpeedInsights />
    <div class="h-screen flex flex-col">
      <header><NavBar /></header>
      <main class="p-4 flex-1">
        <slot />
      </main>
      <FooterBar />
    </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>
