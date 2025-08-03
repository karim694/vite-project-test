<script setup>
import { RouterView} from 'vue-router';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import BlankLayout from './layouts/BlankLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  return route.meta.layout === 'blank' ? BlankLayout : DefaultLayout
})

</script>

<template>
  <div class="h-screen  ">


 <component :is="layoutComponent">
    <router-view />
  </component>





  </div>
</template>
