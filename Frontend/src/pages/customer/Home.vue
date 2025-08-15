 <script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const categories = ref(['Semua', 'Plastik HD', 'Plastik PP', 'Gelas', 'Sedotan', 'Aksesoris'])
const activeCategory = ref('Semua')

const products = ref([
  { id: 1, name: 'Kantong Plastik HD 30x40', category: 'Plastik HD', price: 22000 },
  { id: 2, name: 'Kantong Plastik PP 0.03', category: 'Plastik PP', price: 18000 },
  { id: 3, name: 'Gelas Plastik 12oz', category: 'Gelas', price: 26000 },
  { id: 4, name: 'Sedotan Jumbo', category: 'Sedotan', price: 9000 },
  { id: 5, name: 'Klip Plastik 6x10', category: 'Aksesoris', price: 7500 },
  { id: 6, name: 'Kantong Plastik HD 40x60', category: 'Plastik HD', price: 35000 },
])

const filteredProducts = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return products.value.filter((p) =>
    (activeCategory.value === 'Semua' || p.category === activeCategory.value) &&
    (q === '' || p.name.toLowerCase().includes(q))
  )
})

const setCategory = (cat) => {
  activeCategory.value = cat
}

const formatRupiah = (n) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)

const onSearch = (e) => {
  e?.preventDefault?.()
  const el = document.getElementById('produk')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- Hero: katalog + pencarian -->
  <section class="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white">
    <div class="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:pt-24 sm:pb-16">
      <div class="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
        <div>
          <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">Katalog Barang</span>
          <h1 class="mt-4 text-4xl font-extrabold font-sans text-blue-900 tracking-tight sm:text-5xl ">
            Temukan kebutuhan plastikmu, cepat dan rapi
          </h1>
          <p class="mt-3 text-gray-600">
            Katalog barang Plastik Pucuk Gunung — pencarian cepat, kategori jelas, dan informasi harga ringkas.
          </p>

          <form class="mt-6" @submit="onSearch">
            <div class="flex gap-2">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari produk (mis. kantong plastik HD)"
                class="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              />
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cari
              </button>
            </div>
            <p class="mt-2 text-xs text-gray-500">Tekan Enter untuk menuju daftar produk</p>
          </form>

          <div class="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-3">
            <div class="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <div class="text-2xl">🧾</div>
              <p class="mt-1 text-sm font-medium text-gray-900">Harga Jelas</p>
            </div>
            <div class="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <div class="text-2xl">🗂️</div>
              <p class="mt-1 text-sm font-medium text-gray-900">Kategori Rapi</p>
            </div>
            <div class="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm">
              <div class="text-2xl">⚡</div>
              <p class="mt-1 text-sm font-medium text-gray-900">Akses Cepat</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="mx-auto h-72 w-full max-w-md rounded-2xl border border-blue-100 bg-white p-6 shadow-lg">
            <div class="h-full w-full rounded-xl bg-gradient-to-br from-blue-100 via-white to-blue-50" />
          </div>
          <div class="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-xl bg-blue-100/60 blur-2xl sm:block" />
        </div>
      </div>

      <div class="mt-10 grid grid-cols-3 divide-x divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white text-center shadow-sm sm:grid-cols-3">
        <div class="p-5">
          <div class="text-2xl font-bold text-gray-900">{{ products.length }}</div>
          <div class="text-xs text-gray-500">Produk</div>
        </div>
        <div class="p-5">
          <div class="text-2xl font-bold text-gray-900">{{ categories.length - 1 }}</div>
          <div class="text-xs text-gray-500">Kategori</div>
        </div>
        <div class="p-5">
          <div class="text-2xl font-bold text-gray-900">120+</div>
          <div class="text-xs text-gray-500">Mitra</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Kategori chips -->
  <section class="mx-auto max-w-7xl px-4 pt-4">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-900">Kategori</h2>
      <a href="#produk" class="text-sm font-medium text-blue-700 hover:text-blue-800">Lihat semua produk →</a>
    </div>
    <div class="-mx-1 flex gap-2 overflow-x-auto pb-1">
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        @click="setCategory(cat)"
        :aria-pressed="activeCategory === cat"
        :class="[
          'whitespace-nowrap rounded-full border px-4 py-2 text-sm transition',
          activeCategory === cat
            ? 'border-blue-600 bg-blue-50 text-blue-700'
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        ]"
      >
        {{ cat }}
      </button>
    </div>
  </section>

  <!-- Produk unggulan -->
  <section id="produk" class="mx-auto max-w-7xl px-4 py-10">
    <div class="mb-6 flex items-end justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Produk Unggulan</h2>
        <p class="mt-1 text-gray-600">Tersaring berdasarkan: <span class="font-medium">{{ activeCategory }}</span></p>
      </div>
      <RouterLink to="/about" class="hidden text-sm font-medium text-blue-700 hover:text-blue-800 sm:inline-flex">Tentang kami</RouterLink>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="p in filteredProducts"
        :key="p.id"
        class="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
      >
        <div class="relative h-40 w-full overflow-hidden rounded-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-white">
          <div class="absolute inset-0 flex select-none items-center justify-center text-5xl opacity-10">🛍️</div>
        </div>
        <div class="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 class="text-base font-semibold text-gray-900">
              <a href="#" class="outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">{{ p.name }}</a>
            </h3>
            <div class="mt-1 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700">{{ p.category }}</div>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-500">Mulai</div>
            <div class="text-lg font-bold text-gray-900">{{ formatRupiah(p.price) }}</div>
          </div>
        </div>
        <div class="mt-4 flex gap-2">
          <button type="button" class="inline-flex flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Lihat detail</button>
          <button type="button" class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">Pesan</button>
        </div>
      </article>
    </div>

    <div v-if="filteredProducts.length === 0" class="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-600">
      Tidak ada produk untuk kata kunci ini.
    </div>
  </section>

  <!-- Benefit / Kenapa kami -->
  <section class="mx-auto max-w-7xl px-4 py-12">
    <div class="mb-10 text-center">
      <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Kenapa memilih kami?</h2>
      <p class="mt-2 text-gray-600">Kecepatan stok, harga kompetitif, dan dukungan purna jual.</p>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">⚡</div>
        <h3 class="text-lg font-semibold text-gray-900">Proses Cepat</h3>
        <p class="mt-1 text-gray-600">Pencarian dan order ringkas, tidak ribet.</p>
      </div>
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">📦</div>
        <h3 class="text-lg font-semibold text-gray-900">Stok Terjaga</h3>
        <p class="mt-1 text-gray-600">Ketersediaan jelas, update berkala.</p>
      </div>
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">💬</div>
        <h3 class="text-lg font-semibold text-gray-900">Bantuan Respon Cepat</h3>
        <p class="mt-1 text-gray-600">Tim support siap menemani.</p>
      </div>
    </div>
  </section>

  <!-- Call To Action -->
  <section class="bg-blue-600">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:flex sm:items-center sm:justify-between">
      <div>
        <h3 class="text-2xl font-bold text-white">Siap belanja atau cek produk?</h3>
        <p class="mt-1 text-blue-100">Mulai telusuri katalog barang kami sekarang.</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <a
          href="#produk"
          class="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 font-medium text-blue-700 shadow hover:bg-blue-50"
        >
          Lihat Katalog
        </a>
      </div>
    </div>
  </section>

  <!-- Footer Minimal -->
  <footer class="border-t border-gray-200">
    <div class="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Plastik Pucuk Gunung. All rights reserved.
    </div>
  </footer>
</template>

