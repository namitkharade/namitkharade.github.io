<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <div
      class="bg-[#e4eaeb] min-h-screen sm:p-10 p-5 flex flex-col justify-center dark:bg-[#0F172A] duration-500 transition-all ease-in-out">
      <button @click="toggleDarkMode" class="animate-pulse">
        <ModeToggler :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
      </button>
      <CardHeader />
      <RouterView />
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



