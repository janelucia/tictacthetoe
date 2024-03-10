<template>
  <div
    v-for="(row, rowIndex) in field.rows"
    class="flex h-[calc(100%/3)]"
    :class="{
      'bg-red-500': activeField === field,
    }"
  >
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
        'relative': field.hasSubFields,
        'border-gray-500 border-4':
          field.hasSubFields &&
          !((activeField?.row === rowIndex && activeField?.col === cellIndex) || activeField === null),
        'border-secondary border-4':
          (activeField?.row === rowIndex && activeField?.col === cellIndex) || activeField === null,
        'border-primary border-2 text-center':
          !field.hasSubFields &&
          !((activeField?.row === rowIndex && activeField?.col === cellIndex) || activeField === null),
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
      <div
        v-if="field.hasSubFields && field.subFieldIsWon(rowIndex, cellIndex)"
        class="absolute inset-0 flex justify-center items-center"
      >
        <p class="text-8xl sm:text-[10rem] font-bold text-accent">{{ field.subFieldIsWon(rowIndex, cellIndex) }}</p>
      </div>
      <span
        v-else-if="typeof cell === 'string'"
        class="w-full h-full flex justify-center items-center text-2xl sm:text-4xl font-bold"
        @click="$emit('clickedCell', field as Field<string>, rowIndex, cellIndex)"
        >{{ cell }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield';

defineProps<{
  field: Field<Field<string>> | Field<string>;
  activeField?: { row: number; col: number } | null;
  player: 'X' | 'O';
  outerRow?: number;
  outerCell?: number;
  won?: boolean;
}>();

defineEmits<{
  (event: 'clickedCell', field: Field<string>, row: number, cell: number): void;
}>();
</script>
