<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">
        <img src="~/public/tic-tac-toe.svg" alt="Logo, tic tac toe field with the name spelled out." class="w-8" />
      </NuxtLink>
    </div>
    <div class="navbar-center hidden md:flex">
      <div class="tabs">
        <NuxtLink
          v-for="nav in navigation"
          :key="nav.name"
          :to="nav.path"
          class="tab tab-bordered"
          :active-class="nav.current ? 'tab-active' : ''"
          >{{ nav.name }}</NuxtLink
        >
      </div>
    </div>
    <div class="navbar-end gap-4">
      <div class="avatar">
        <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="/images/jane.jpg" alt="profile picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const navigation = [
  { name: 'Home', path: '/', current: router.name === 'index' },
  { name: 'Gamehub', path: '/gamehub', current: router.name === 'Gamehub' },
  {
    name: 'Leaderboard',
    path: '/leaderboard',
    current: router.name === 'Leaderboard',
  },
];
</script>
