<template>
  <div data-theme="gameTheme" class="h-screen flex flex-col">
    <header><NavBar /></header>
    <main class="p-4 flex-1">
      <slot />
    </main>
    <FooterBar />
  </div>
</template>
