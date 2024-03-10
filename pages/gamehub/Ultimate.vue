<template>
  <div class="md:w-1/2 mx-auto flex gap-12 h-full flex-col relative">
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
      <div v-if="field.hasWon" class="absolute bg-secondary rounded flex flex-col items-center justify-center gap-4 translate-x-1/4 p-4">
        <p class="font-bold text-4xl">Player {{player}} has won</p>
        <button class="rounded-box bg-primary px-4 py-2">Play again!</button>
      </div>
    </div>
    <div class="w-full">
      <Gamefield :field="field" :player="player" @clicked-cell="clickedCell" :active-field="activeField"  />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '~/components/gamefield';
import confettiModule from "canvas-confetti/dist/confetti.module.mjs";

const field = reactive(new Field(() => new Field(() => '_')));
const player = ref<'X' | 'O'>(Math.random > 0.5 ? 'X' : 'O');

const activeField = ref<{row: number, col: number} | null>(null);

const clickedCell = (subField: Field<string>, row: number, cell: number) => {
  if (subField.getXY(row, cell) !== '_' || subField.hasWon ) return;

  subField.markField(row, cell, player.value);

  console.log('inside clicked cell', activeField.value);

  if (field.hasWon) {
    if (field.hasWon === 'D') {
      alert('Draw');
    } else {
      confettiModule({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  } else {
    player.value = player.value === 'X' ? 'O' : 'X';
    if (!field.subFieldIsWon(row, cell)) {
      activeField.value = { row, col: cell };
      console.log('subField is not won', activeField.value);
    } else {
      activeField.value = null;
    }
  }
};
</script>
