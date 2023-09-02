<template>
  <div class="flex w-full h-full justify-center items-center">
    <div class='w-1/2'>
      <Gamefield :field="big" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield';
const big = new Field(() => new Field(() => '_'));
</script>
