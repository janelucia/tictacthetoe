<template>
  <div class="flex justify-center items-center ">
    <div class='w-1/2'>
      <Gamefield :field="big" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield';
const big = new Field(() => new Field(() => '_'));
</script>
