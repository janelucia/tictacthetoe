<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/"
        >tictacthetoe</NuxtLink
      >
    </div>
    <div class="navbar-center">
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
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <div class="avatar">
        <div
          class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
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
