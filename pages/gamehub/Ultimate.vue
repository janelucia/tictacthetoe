<template>
  <div  class="max-w-screen-md mx-auto flex gap-12 h-full flex-col relative items-center relative">
    <Box v-if="!field.hasWon" title="Tic Tac Toe - Ultimate">
      <div
        class="flex justify-between px-4 text-xl sm:text-2xl"
        :class="{ 'font-bold bg-secondary px-4': player === 'X' }"
      >
        <p>{{playerOne}}</p>
        <p>X</p>
      </div>
      <div
        class="flex justify-between px-4 mb-4 text-xl sm:text-2xl"
        :class="{ 'font-bold bg-secondary px-4 ': player === 'O' }"
      >
        <p>{{playerTwo}}</p>
        <p>O</p>
      </div>
    </Box>
    <Box v-if="field.hasWon" :title="`${field.hasWon === 'X' ? playerOne : playerTwo} won`">
      <button class="w-fit self-end rounded-br-box rounded-tl-box bg-primary px-4 py-2 text-xl font-bold" @click="newGame">Want to play again?</button>
    </Box>
    <div class="w-[90vw] h-[90vw] sm:w-[50vw] sm:h-[50vw] lg:w-[30vw] lg:h-[30vw]">
      <Gamefield :field="field" :player="player" @clicked-cell="clickedCell" :active-field="activeField" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Field } from '~/components/gamefield';
import confettiModule from 'canvas-confetti/dist/confetti.module.mjs';
import { ref } from 'vue';

let field = reactive(new Field(() => new Field(() => '')));
const player = ref<'X' | 'O'>(Math.random > 0.5 ? 'X' : 'O');
const activeField = ref<{ row: number; col: number } | null>(null);

function getItem(item) {
  console.log(process.client, Date.now())
  if (process.client) {
    return localStorage.getItem(item)
  } else {
    return null
  }
}

const playerOne = ref<string | null>(getItem('playerOne'));
const playerTwo = ref<string | null>(getItem('playerTwo'));

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

const newGame = () => {
  console.log('New Game');
  field = reactive(new Field(() => new Field(() => '')));
  player.value = Math.random() > 0.5 ? 'X' : 'O';
  activeField.value = null;
};
</script>
