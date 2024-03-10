<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">
        <img src="~/public/logo-tic-tac-the-toe-white.png" alt="Logo, tic tac toe field with the name spelled out." class="w-16 md:w-20" />
      </NuxtLink>
    </div>
    <div class="navbar-end gap-4">
      <NuxtLink to="/">
        <Icon name="mdi:home" class="w-10 h-10 text-primary cursor-pointer"/>
      </NuxtLink>
      <NuxtLink to="/leaderboard">
        <Icon name="mdi:trophy" class="w-10 h-10 text-primary cursor-pointer"/>
      </NuxtLink>
      <NuxtLink to="">
        <Icon name="mdi:settings" class="w-10 h-10 text-primary cursor-pointer"/>
      </NuxtLink>
      <NuxtLink to="">
        <Icon name="mdi:logout" class="w-10 h-10 text-primary cursor-pointer"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
