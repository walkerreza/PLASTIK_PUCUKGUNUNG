<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

const route = useRoute()

const layouts = {
  DefaultLayout,
  AuthLayout
}

const layoutComponent = computed(() => {
  const layoutName = route.meta.layout || 'DefaultLayout'
  return layouts[layoutName]
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
