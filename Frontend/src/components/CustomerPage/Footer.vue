<template>
  <footer class="bg-gray-800 text-white pt-12 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Kolom 1: Tentang Toko -->
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold mb-4">PLASTIK PUCUKGUNUNG</h2>
          <p class="text-gray-400">
            Menyediakan berbagai macam kebutuhan plastik berkualitas dengan harga terjangkau.
          </p>
        </div>

        <!-- Kolom 2: Navigasi Cepat -->
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-semibold mb-4">Jelajahi</h3>
          <ul>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Semua Produk</a></li>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
          </ul>
        </div>

        <!-- Kolom 3: Bantuan -->
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-semibold mb-4">Bantuan</h3>
          <ul>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Cara Belanja</a></li>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        <!-- Kolom 4: Kontak -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <p class="text-gray-400 mb-2">Jl. Raya Pucukgunung No. 123, Kec. Pucuk, Kab. Lamongan</p>
          <p class="text-gray-400 mb-2">Email: info@plastikpucukgunung.com</p>
          <p class="text-gray-400">Telepon: (0322) 123-456</p>
        </div>
      </div>

      <!-- Garis Pemisah -->
      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} Plastik Pucukgunung. All Rights Reserved.
        </p>
        <div class="flex space-x-4">
          <!-- Facebook Icon -->
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
          </a>
          <!-- Twitter Icon -->
          <a href="#" class="text-gray-400 hover:text-white">
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </a>
          <!-- Instagram Icon -->
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.161 2.043c-1.049.045-1.71.21-2.227.412a2.893 2.893 0 00-1.078.746 2.893 2.893 0 00-.746 1.078c-.202.517-.367 1.178-.412 2.227-.045 1.02-.056 1.355-.056 3.502s.011 2.482.056 3.502c.045 1.049.21 1.71.412 2.227a2.893 2.893 0 00.746 1.078 2.893 2.893 0 001.078.746c.517.202 1.178.367 2.227.412 1.02.045 1.355.056 3.502.056s2.482-.011 3.502-.056c1.049-.045 1.71-.21 2.227-.412a2.893 2.893 0 001.078-.746 2.893 2.893 0 00.746-1.078c.202-.517.367-1.178.412-2.227.045-1.02.056-1.355-.056-3.502s-.011-2.482-.056-3.502c-.045-1.049-.21-1.71-.412-2.227a2.893 2.893 0 00-.746-1.078 2.893 2.893 0 00-1.078-.746c-.517-.202-1.178-.367-2.227-.412-1.02-.045-1.355-.056-3.502-.056s-2.482.011-3.502.056zm4.654 7.21a3.587 3.587 0 10-7.174 0 3.587 3.587 0 007.174 0zM12 15.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zm5.003-8.43a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Tidak ada logic script yang dibutuhkan untuk footer statis ini
</script>

<style scoped>
/* Styling khusus bisa ditambahkan di sini jika diperlukan */
</style>