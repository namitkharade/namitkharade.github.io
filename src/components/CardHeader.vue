<template>
    <div class="fixed top-10">
      <ul class="flex justify-center">
        <li>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/education" class="nav-link">Education</RouterLink>
         <RouterLink to="/work" class="nav-link">Work</RouterLink>
        <RouterLink to="/project" class="nav-link">Project</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .nav-link {
    margin: 2px;
    padding: 4px 16px;
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
  