<template>
    <div class="fixed top-10 p-1 bg-[#e4eaeb] dark:bg-[#0F172A] bg-[#e4eaeb] dark:bg-[#0F172A] duration-500 transition-all ease-in-out">
      <ul class="flex justify-center">
        <li>
          <RouterLink to="/" class="nav-link">Me 😉</RouterLink>
         <RouterLink to="/resume" class="nav-link">Resume 📄</RouterLink>
        <RouterLink to="/project" class="nav-link">Projects 💼</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact 📨</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .nav-link {
    margin: 2px;
    padding: 4px 14px;
    border: 2px solid #3490dc;
    border-radius: 10px;
    transition: all 300ms;
    color: #000000;
  }
  
  .nav-link:hover {
    background-color: #3490dc;
    color: #fff;
  }

  :root {
    --text-color: #ffffff;
  }
  
  .dark .nav-link {
    color: #fff;
  }
  
  .dark .nav-link:hover {
    background-color: #4577b1;
    color: #000000;
  }
  </style>
  