<template>
  <div
    v-for="(row, rowIndex) in field.getRows()"
    class="flex h-calc[100%/3]"
    v-if="renderComponent"
  >
    <div
      v-for="(cell, cellIndex) in row"
      class="flex border border-solid flex-col w-full h-full"
      :class='{
        "border-t-0": (rowIndex === 0) && (cellIndex === 1) || (rowIndex === 0) && (cellIndex === 0) || (rowIndex === 0) && (cellIndex === 2),
        "border-l-0": (rowIndex === 1) && (cellIndex === 0) || (rowIndex === 0) && (cellIndex === 0) || (rowIndex === 2) && (cellIndex === 0),
        "border-r-0": (rowIndex === 1) && (cellIndex === 2) || (rowIndex === 0) && (cellIndex === 2) || (rowIndex === 2) && (cellIndex === 2),
        "border-b-0": (rowIndex === 2) && (cellIndex === 1) || (rowIndex === 2) && (cellIndex === 0) || (rowIndex === 2) && (cellIndex === 2),
        "border-secondary border-4": field.hasSubFields(),
        "border-primary border-2 text-center": !field.hasSubFields(),
      }'

      @click="!field.hasSubFields() && rerenderGame(field, rowIndex, cellIndex, 'X')"
    >
      <Gamefield v-if="field.hasSubFields() && typeof cell !== 'string'" :field="cell"  />
      <span v-else>{{ cell }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '@/components/gamefield';

defineProps<{
  field: Field<Field<string>> | Field<string>;
}>();

const renderComponent = ref(true);

function rerenderGame(field, rowIndex, cellIndex, player) {
  console.log("Rerendering game");
  renderComponent.value = false;
  renderComponent.value = field.markField(rowIndex, cellIndex, player);
}


</script>
