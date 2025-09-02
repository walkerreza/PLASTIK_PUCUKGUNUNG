<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
    <div class="absolute top-8 left-8">
      <RouterLink to="/" class="flex items-center">
        <img src="/SvgHeart.Com-378.png" alt="Logo" class="h-8 w-8 mr-2">
        <span class="text-xl font-bold text-gray-800">Plastik Pucukgunung</span>
      </RouterLink>
    </div>

    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
      <div class="text-left mb-8">
        <p class="text-sm text-gray-600">Please enter your details</p>
        <h1 class="text-3xl font-bold text-gray-900 mt-1">Welcome back</h1>
      </div>

      <form class="space-y-5">
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            autocomplete="email" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Email address"
          />
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            autocomplete="current-password" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Password"
          />
        </div>

        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-gray-900"> Remember for 30 days </label>
          </div>
          <RouterLink to="/forgot-password" class="font-medium text-blue-600 hover:text-blue-500"> Forgot password </RouterLink>
        </div>

        <div>
          <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Sign In
          </button>
        </div>

        <div>
          <button type="button" class="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg class="w-5 h-5 mr-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#E5E7EB"/>
                <path d="M43.6113 24H42V24H24V32H35.3033C33.655 35.655 30.0733 38 24 38C17.3733 38 12 32.6267 12 26C12 19.3733 17.3733 14 24 14C27.0567 14 29.8417 15.1867 31.9617 17.0383L37.6183 11.3817C34.0467 8.17167 29.2833 6 24 6C13.055 6 4.07333 14.1217 4.07333 24C4.07333 33.8783 13.055 42 24 42C34.945 42 43.9267 33.8783 43.9267 24C43.9267 22.6183 43.8017 21.3333 43.6113 20.0833V24Z" fill="#4285F4"/>
                <path d="M4.92969 18.0183L12.2114 23.3883C13.41 20.4433 16.2237 18 20 18C21.655 18 23.1887 18.6183 24.41 19.6183L29.9814 14.0467C27.23 11.7667 23.6387 10 20 10C13.3737 10 7.99969 15.3733 7.99969 22C7.99969 23.4283 8.24302 24.8017 8.68969 26.0783L4.92969 18.0183Z" fill="#DB4437"/>
                <path d="M20 42C25.1333 42 29.5 39.9183 32.4417 36.9183L26.785 31.2617C25.2133 32.5267 22.7133 33.5 20 33.5C16.2233 33.5 13.41 31.0567 12.2117 28.1117L4.92993 33.4817C7.99993 38.6267 13.3733 42 20 42Z" fill="#0F9D58"/>
                <path d="M43.6113 24H24V32H35.3033C34.51 34.245 32.8633 36.0817 30.6617 37.4283L36.3183 43.085C40.4433 40.3833 44 35.3833 44 29C44 26.845 43.8633 24.7633 43.6113 22.7817V24Z" fill="#F4B400"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </form>

      <div class="text-center text-sm text-gray-600 mt-8">
        <p>
          Already have account?
          <RouterLink to="/login" class="font-medium text-blue-600 hover:text-blue-500"> Log in </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling khusus bisa ditambahkan di sini jika diperlukan */
</style>
