<script setup>
import AppFooter from '@/components/layoutComponents/AppFooter.vue';
import AppNavbar from '@/components/layoutComponents/AppNavbar.vue';
import AppSidebar from '@/components/layoutComponents/AppSidebar.vue';
</script>

<template>

  <div class="min-h-screen flex flex-col">
    <AppNavbar class="z-50" />

    <div class="flex flex-1">
      <AppSidebar class="mt-16" />
      <!-- <main class="flex-1 p-4">
        <RouterView />
      </main> -->
    </div>
 <div class="default-layout">
   <slot></slot>
  </div>
    <AppFooter class="z-50" />
  </div>


</template>
