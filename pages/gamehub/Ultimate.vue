<template>
  <div class="md:w-1/2 mx-auto flex gap-12 h-full flex-col">
    <div
      class="border-x border-b border-solid border-secondary px-4 pb-4 rounded-br-box rounded-bl-box flex flex-col gap-2"
    >
      <h2 class="font-bold text-2xl">Welcome player X</h2>
      <div class="flex justify-between" :class="{ 'font-bold': player === 'X' }">
        <p>Player 1</p>
        <p>X</p>
      </div>
      <div class="flex justify-between" :class="{ 'font-bold': player === '0' }">
        <p>Player 2</p>
        <p>O</p>
      </div>
    </div>
    <div class="w-full">
      <Gamefield :field="field" :player="player" @clicked-cell="clickedCell" :active-field="activeField"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '~/components/gamefield';

const field = reactive<Field<Field<string>>>(new Field(() => new Field(() => '_')));
const player = ref<'X' | 'O'>(Math.random > 0.5 ? 'X' : 'O');

const activeField = ref<Field<Field<string>> | null>(null);

const clickedCell = (subField: Field<string>, row: number, cell: number) => {
  if (subField.getXY(row, cell) !== '_') return;

  subField.markField(row, cell, player.value);

  if (field.hasWon) {
    if (field.hasWon === 'draw') {
      alert('Draw');
    } else {
      alert(`Player ${field.hasWon} has won`);
    }
  } else {
    player.value = player.value === 'X' ? 'O' : 'X';
    activeField.value = field.getXY(row, cell);
    console.log(activeField.value);
  }
};
</script>
