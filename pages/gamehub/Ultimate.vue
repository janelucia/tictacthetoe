<template>
    <div class='md:w-1/2 mx-auto flex gap-12 h-full flex-col'>
      <div class="border-x border-b border-solid border-secondary px-4 pb-4 rounded-br-box rounded-bl-box flex flex-col gap-2">
        <h2 class="font-bold text-2xl">
          Welcome player X
        </h2>
        <div class="flex justify-between">
          <p>
            Player 1
          </p>
          <p>
            X
          </p>
        </div>
        <div class="flex justify-between">
          <p>
            Player 2
          </p>
          <p>
            O
          </p>
        </div>
      </div>
      <div class="w-full">
        <Gamefield :field="big" />
      </div>
    </div>
</template>

<script setup lang="ts">
import {Field} from '@/components/gamefield';

function initializeGame() {
  return new Field(() => new Field(() => '_'));
}

let big = initializeGame();

onMounted(() => {
  setInterval(() => {
    console.log(big.getRows());
  }, 20000);
});


</script>
