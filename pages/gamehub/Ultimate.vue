<template>
  <div class="flex w-full h-full flex-1 justify-center items-center">
    <div class="w-[95vw] h-[95vw]">
      <Gamefield :field="big" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield.ts';
const big = new Field(() => new Field(() => '_'));
</script>
