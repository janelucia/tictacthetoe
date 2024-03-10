<template>
  <div v-for="(row, rowIndex) in field.rows" class="flex h-calc[100%/3]" :class="{
  'bg-red-500' : activeField === field}">
    <div
      v-for="(cell, cellIndex) in row"
      class="flex border border-solid flex-col w-full h-full"
      :class="{
        'border-t-0':
          (rowIndex === 0 && cellIndex === 1) ||
          (rowIndex === 0 && cellIndex === 0) ||
          (rowIndex === 0 && cellIndex === 2),
        'border-l-0':
          (rowIndex === 1 && cellIndex === 0) ||
          (rowIndex === 0 && cellIndex === 0) ||
          (rowIndex === 2 && cellIndex === 0),
        'border-r-0':
          (rowIndex === 1 && cellIndex === 2) ||
          (rowIndex === 0 && cellIndex === 2) ||
          (rowIndex === 2 && cellIndex === 2),
        'border-b-0':
          (rowIndex === 2 && cellIndex === 1) ||
          (rowIndex === 2 && cellIndex === 0) ||
          (rowIndex === 2 && cellIndex === 2),
        'border-secondary border-4': field.hasSubFields,
        'border-primary border-2 text-center': !field.hasSubFields,
      }"
    >
      <Gamefield
        v-if="field.hasSubFields && typeof cell !== 'string'"
        :field="cell"
        :player="player"
        :outer-row="rowIndex"
        :outer-cell="cellIndex"
        @clickedCell="(subField, _row, _cell) => $emit('clickedCell', subField, _row, _cell)"
      />
      <span v-else @click="$emit('clickedCell', field as Field<string>, rowIndex, cellIndex)">{{ cell }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield';

defineProps<{
  field: Field<Field<string>> | Field<string>;
  activeField?: Field<Field<string>> | Field<string>;
  player: 'X' | 'O';
  outerRow?: number;
  outerCell?: number;
}>();

defineEmits<{
  (event: 'clickedCell', field: Field<string>, row: number, cell: number): void;
}>();
</script>
