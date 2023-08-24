<template>
  <Gamefield :field="big" />
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield.ts';
const big = new Field(() => new Field(() => '_'));
</script>
