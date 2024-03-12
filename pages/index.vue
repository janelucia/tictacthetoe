<template>
  <div v-if="playerName" class="text-center">
    <h2 class="text-4xl font-bold">Welcome back, {{ playerName }}!</h2>
  </div>
  <div v-else class="h-[30vh] text-center flex flex-col gap-2">
    <h2 class="text-4xl font-bold">Welcome to tictacthetoe!</h2>
    <p class="text-xl font-bold">
      Are you new around here? <br />
      Please enter your name to get started.
    </p>
    <div class="flex gap-2">
      <input
        v-model="playerNameInput"
        class="w-full p-2 text-center outline outline-primary bg-base-100 rounded-md"
        placeholder="Enter your name"
      />
      <button @click="saveName" class="btn btn-primary">Save</button>
    </div>
  </div>

  <div class="flex flex-col gap-8">
    <h2 class="text-2xl font-bold">Available Games</h2>
    <div class="flex flex-wrap justify-center gap-10">
      <Card
        title="Ultimate Tic Tac Toe"
        description="Ultimate Tic-Tac-Toe hebt das klassische Spiel auf die nächste Stufe: Ein 9x9 Raster aus neun 3x3 Spielfeldern stellt sicher, dass du nicht nur taktisch denkst, sondern auch deinen Gegner auf dem gesamten Brett herausforderst! Setze klug, denn dein Zug bestimmt, welches Spielfeld dein Gegner als Nächstes knacken muss!"
        hotseat="/gamehub/ultimate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

await navigateTo('/info');

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

const playerName = ref<string | null>(getItem('playerName'));
const playerNameInput = ref<string>('');

const saveName = () => {
  if (playerNameInput.value.trim() !== '') {
    playerName.value = playerNameInput.value;
    localStorage.setItem('playerName', playerNameInput.value);
  }
};
</script>
