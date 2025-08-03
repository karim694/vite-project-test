<template>
  <div class="text-center mt-20 z-50 w-full h-full">
    <h2>Settings</h2>

    <div class="btns">
      <router-link  to="/settings/first">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          PRESS 1
        </button></router-link
      >

      <router-link  to="/settings/second">
        <button
          class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          PRESS 2
        </button></router-link
      >
      <router-link  to="/settings/third">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          PRESS 3
        </button></router-link
      >
      <router-link  to="/settings/fourth">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          PRESS 4
        </button></router-link
      >
    </div>

     <component :is="currentTabLayout">
      <router-view />
    </component>
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from "vue-router";
import { computed,watch } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

const route = useRoute()
watch(route, (newRoute) => {
  console.log('Current route:', newRoute)
  console.log('Route meta:', newRoute.meta)
}, { immediate: true })
const currentTabLayout = computed(() => {
  return route.meta.tabLayout === 'blank' ? BlankLayout : DefaultLayout
})
</script>
