<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-800">Katalog Produk Kami</h1>
        <p class="text-lg text-gray-600 mt-2">Temukan semua kebutuhan plastik Anda di satu tempat.</p>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-20 z-30">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="relative w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Cari berdasarkan nama produk..." 
              class="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span class="absolute right-3 top-2.5 text-gray-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
          </div>
          <div class="w-full md:w-auto">
            <select class="w-full md:w-64 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">Semua Kategori</option>
              <option value="hd">Plastik HD</option>
              <option value="pp">Plastik PP</option>
              <option value="gelas">Gelas</option>
              <option value="sedotan">Sedotan</option>
              <option value="aksesoris">Aksesoris</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <!-- Contoh Product Card -->
        <div v-for="i in 12" :key="i" class="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div class="relative">
            <img :src="'https://picsum.photos/300/300?random=' + i" alt="Product Image" class="w-full h-56 object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full">Lihat Detail</button>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 truncate">Nama Produk {{ i }}</h3>
            <p class="text-sm text-gray-500 mt-1">Kategori Produk</p>
            <p class="text-xl font-bold text-blue-600 mt-2">Rp 15.000</p>
          </div>
        </div>
        <!-- End Product Card -->
      </div>

    </div>
  </div>
</template>

<script setup>
// Logika untuk fetch data produk dan filtering akan ditambahkan di sini nanti
</script>

<style scoped>
/* Styling khusus bisa ditambahkan di sini */
</style>