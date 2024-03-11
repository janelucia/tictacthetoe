<template>
  <div
    class="absolute bg- rounded flex flex-col items-center justify-center gap-4 w-[90vw] h-[90vw] sm:w-[50vw] sm:h-[50vw] lg:w-[40vw] lg:h-[40vw] z-10"
    style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
  >
    <p class="font-bold text-4xl">Player {{ player }} has won</p>
    <button class="rounded-box bg-primary px-4 py-2">Play again!</button>
  </div>
</template>
