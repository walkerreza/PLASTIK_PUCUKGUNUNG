<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
      <RouterLink to="/" class="text-base font-semibold text-gray-900">Plastik Pucuk Gunung</RouterLink>
      <nav class="flex items-center gap-4">
        <RouterLink to="/" class="text-sm text-gray-700 hover:text-blue-700">Home</RouterLink>
        <RouterLink to="/produk" class="text-sm text-gray-700 hover:text-blue-700">Produk</RouterLink>
        <RouterLink to="/contact" class="text-sm text-gray-700 hover:text-blue-700">Contact</RouterLink>
        <RouterLink to="/about" class="text-sm text-gray-700 hover:text-blue-700">About</RouterLink>
      </nav>
    </div>
  </header>
</template>