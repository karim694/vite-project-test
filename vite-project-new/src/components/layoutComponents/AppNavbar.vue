<template>
  <nav class="fixed top-0 left-0 right-0 bg-gray-400 border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="text-2xl font-semibold text-white">VUE3</span>
      <ul class="flex gap-4 ">
        <li>
          <RouterLink  exact-active-class="bg-green-900 text-white rounded p-5" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink exact-active-class="bg-green-900 text-white rounded p-5" to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink exact-active-class="bg-green-900 text-white rounded p-5"  to="/settings">Settings</RouterLink>
        </li>
        <li>
          <RouterLink exact-active-class="bg-green-900 text-white rounded p-5 tet" to="/login">Login</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
