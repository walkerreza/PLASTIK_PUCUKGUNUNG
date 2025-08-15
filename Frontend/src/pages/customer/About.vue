<script setup>
import { ref } from 'vue'

const role = ref(localStorage.getItem('role') || '(kosong)')
function setRole(v) {
  localStorage.setItem('role', v)
  role.value = v
}
function clearRole() {
  localStorage.removeItem('role')
  role.value = '(kosong)'
}
</script>

<template>
  <div class="mt-6 space-x-2">
    <span class="text-sm text-gray-600">Role sekarang: <b>{{ role }}</b></span>
    <button class="px-3 py-1 rounded bg-blue-600 text-white" @click="setRole('customer')">Set Customer</button>
    <button class="px-3 py-1 rounded bg-emerald-600 text-white" @click="setRole('owner')">Set Owner</button>
    <button class="px-3 py-1 rounded border" @click="clearRole">Hapus Role</button>
  </div>
</template>