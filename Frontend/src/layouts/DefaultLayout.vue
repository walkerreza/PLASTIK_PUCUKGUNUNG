<script setup>
import Navbar from '../components/CustomerPage/Navbar.vue'
import Footer from '../components/CustomerPage/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
