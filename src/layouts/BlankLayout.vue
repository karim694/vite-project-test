<template>
<AppNavbar/>
  <h1 class="text-center">This is Blank Page</h1>
   <div class="blank-layout">
    <slot></slot>
  </div>
        <!-- <RouterView /> -->
</template>
<script setup>
/* import { RouterView } from 'vue-router';

 */

import AppNavbar from '@/components/layoutComponents/AppNavbar.vue';
</script>
