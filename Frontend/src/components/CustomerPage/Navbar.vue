<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isLoggedIn = ref(false) // Nanti akan diganti dengan state management

const links = [
  { name: 'Home', path: '/' },
  { name: 'Produk', path: '/produk' },
  { name: 'Kontak', path: '/contact' },
  { name: 'Tentang', path: '/about' },
]
</script>

<template>
  <header class="bg-white sticky top-0 z-40 shadow-sm">
    <!-- Main Header -->
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo & Nav -->
        <div class="w-1/2 flex items-center">
          <RouterLink to="/" class="flex items-center">
            <img src="/SvgHeart.Com-378.png" alt="Logo" class="h-5 w-8 mr-3">
            <span class="text-2xl font-bold text-gray-800">Plastik Pucukgunung</span>
          </RouterLink>
          <div class="hidden md:flex items-center space-x-8 pl-8 pt-1">
            <RouterLink v-for="link in links" :key="link.name" :to="link.path" class="text-base text-gray-700 hover:text-blue-700 font-medium">{{ link.name }}</RouterLink>
          </div>
        </div>

        <!-- Search Bar -->
        <!-- <div class="w-1/3 hidden md:block">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Cari kebutuhan plastik Anda..." 
              class="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button class="absolute right-0 top-0 mt-1 mr-2 p-2 rounded-full hover:bg-gray-200">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
        </div> -->

        <!-- Icons -->
        <div class="w-auto flex items-center justify-end space-x-6">
          <template v-if="isLoggedIn">
            <RouterLink to="/wishlist" class="text-gray-600 hover:text-blue-500 relative">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </RouterLink>
            <RouterLink to="/keranjang" class="text-gray-600 hover:text-blue-500 relative">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
            </RouterLink>
            <RouterLink to="/akun" class="text-gray-600 hover:text-blue-500">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink to="/LoginPage" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Login
            </RouterLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>