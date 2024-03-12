<template>
  <div class="max-w-screen-md mx-auto flex gap-12 h-full flex-col items-center">
    <div
      class="flex flex-col justify-center itmes-center gap-4 text-center z-10 p-4 rounded-box w-[90vw] h-[50vh] lg:w-[50vw] lg:h-[50vh]"
    >
      <h1 class="text-4xl sm:text-6xl font-bold">
        Welcome to <br />
        Ultimate <br />
        Tic Tac Toe
      </h1>
      <p>Please choose a name for Player 1 and Player 2. The game will start with a random player.</p>
      <div class="flex flex-wrap gap-4">
        <input
          type="text"
          v-model="playerOneInput"
          class="bg-base-100 outline outline-primary rounded-box w-full px-4 py-2"
          :placeholder="playerOne ? playerOne : 'Player 1'"
        />
        <input
          type="text"
          v-model="playerTwoInput"
          class="bg-base-100 outline outline-secondary rounded-box w-full px-4 py-2"
          :placeholder="playerTwo ? playerTwo : 'Player 2'"
        />
      </div>
      <button class="bg-primary rounded-box px-4 py-2 w-full sm:w-auto" @click="setNames">Start Game</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const playerOneInput = ref<string>('');
const playerTwoInput = ref<string>('');
/*const playerOne = ref<string | null>(getItem('playerOne'));
const playerTwo = ref<string | null>(getItem('playerTwo'));*/

const playerOne = ref<string | null>(getItem('playerOne'));
const playerTwo = ref<string | null>(getItem('playerTwo'));

console.log('Player One', playerOne.value);
console.log('Player Two', playerTwo.value);

function getItem(item) {
  console.log(process.client, Date.now());
  if (process.client) {
    return localStorage.getItem(item);
  } else {
    return null;
  }
}

function setItem(item, value) {
  if (process.client) {
    localStorage.setItem(item, value);

    return true;
  } else {
    return false;
  }
}

const setNames = () => {
  if (playerOneInput.value.trim() === '' || playerTwoInput.value.trim() === '') return;
  console.log('Setting Names', playerOneInput.value, playerTwoInput.value);
  setItem('playerOne', playerOneInput.value);
  setItem('playerTwo', playerTwoInput.value);
  console.log('Player One', playerOne.value);
  console.log('Player Two', playerTwo.value);
  navigateTo('/gamehub/ultimate');
};
</script>
