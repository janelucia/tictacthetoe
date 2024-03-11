<template>
  <div class="max-w-screen-md mx-auto flex gap-12 h-full flex-col relative items-center">
    <div class="border-x border-b border-solid border-primary rounded-br-box rounded-bl-box flex flex-col gap-2 w-full">
      <h2 class="font-bold text-2xl sm:text-4xl px-4 bg-primary w-fit rounded-tr-box rounded-br-box">
        Tic Tac Toe - Ultimate
      </h2>
      <div
        class="flex justify-between px-4 text-xl sm:text-2xl"
        :class="{ 'font-bold bg-secondary px-4': player === 'X' }"
      >
        <p>Player 1</p>
        <p>X</p>
      </div>
      <div
        class="flex justify-between px-4 mb-4 text-xl sm:text-2xl"
        :class="{ 'font-bold bg-secondary px-4 ': player === 'O' }"
      >
        <p>Player 2</p>
        <p>O</p>
      </div>
      <div
        v-if="field.hasWon"
        class="absolute bg-secondary rounded flex flex-col items-center justify-center gap-4 translate-x-1/4 p-4"
      >
        <p class="font-bold text-4xl">Player {{ player }} has won</p>
        <button class="rounded-box bg-primary px-4 py-2">Play again!</button>
      </div>
    </div>
    <div class="w-[90vw] h-[90vw] sm:w-[50vw] sm:h-[50vw] lg:w-[30vw] lg:h-[30vw]">
      <Gamefield :field="field" :player="player" @clicked-cell="clickedCell" :active-field="activeField" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '~/components/gamefield';
import confettiModule from 'canvas-confetti/dist/confetti.module.mjs';

const field = reactive(new Field(() => new Field(() => '')));
const player = ref<'X' | 'O'>(Math.random > 0.5 ? 'X' : 'O');

const activeField = ref<{ row: number; col: number } | null>(null);

const clickedCell = (
  subField: Field<string>,
  row: number,
  cell: number,
  outerRow: number | undefined,
  outerCell: number | undefined,
) => {

  console.log(subField.getXY(row, cell));

  console.log(
    'Clicked in Right Box',
    activeField.value !== null && activeField.value?.row === outerRow && activeField.value?.col === outerCell,
    activeField.value,
  );

  if (
    field.hasWon ||
    subField.hasWon ||
    subField.getXY(row, cell) !== '' ||
    (activeField.value !== null && !(activeField.value?.row === outerRow && activeField.value?.col === outerCell))
  )
    return;

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
    activeField.value = null;
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
