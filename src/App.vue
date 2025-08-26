<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <div
      class="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 duration-500 transition-all ease-in-out">
      <div class="fixed top-4 right-4 z-50">
        <button @click="toggleDarkMode" class="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110">
          <font-awesome-icon :icon="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="text-xl text-amber-500 dark:text-blue-400" />
        </button>
      </div>
      <CardHeader />
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
      <CardFooter />
    </div>
  </div>
</template>

<script setup>
import ModeToggler from './components/ModeToggler.vue';
import CardHeader from './components/CardHeader.vue';
import CardFooter from './components/CardFooter.vue';


import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
})

const toggleDarkMode = () => {
  if (isDarkMode.value) {
    localStorage.theme = 'light';
    isDarkMode.value = false;
  } else {
    localStorage.theme = 'dark';
    isDarkMode.value = true;
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>



