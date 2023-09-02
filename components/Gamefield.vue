<template>
  <div
    v-for="(row, rowIndex) in field.getRows()"
    class="flex h-calc(100%/3)"
  >
    <div
      v-for="(cell, cellIndex) in row"
      class="flex border border-solid border-primary flex-col w-full"
      :class='{
        "border-t-0": (rowIndex === 0) && (cellIndex === 1) || (rowIndex === 0) && (cellIndex === 0) || (rowIndex === 0) && (cellIndex === 2),
        "border-l-0": (rowIndex === 1) && (cellIndex === 0) || (rowIndex === 0) && (cellIndex === 0) || (rowIndex === 2) && (cellIndex === 0),
        "border-r-0": (rowIndex === 1) && (cellIndex === 2) || (rowIndex === 0) && (cellIndex === 2) || (rowIndex === 2) && (cellIndex === 2),
        "border-b-0": (rowIndex === 2) && (cellIndex === 1) || (rowIndex === 2) && (cellIndex === 0) || (rowIndex === 2) && (cellIndex === 2),
      }'
    >
      <Gamefield v-if="field.hasSubFields()" :field="cell" />
      <span v-else>{{ cell }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield';

defineProps<{
  field: Field<Field<string>> | Field<string>;
}>();
</script>
