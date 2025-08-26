<template>
  <header class="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md duration-500 transition-all ease-in-out">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-center h-16">
        <ul class="flex items-center space-x-1 sm:space-x-4">
          <li>
            <RouterLink to="/" class="nav-link">
              <span class="hidden sm:inline">Home</span>
              <span class="sm:hidden">🏠</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/resume" class="nav-link">
              <span class="hidden sm:inline">Resume</span>
              <span class="sm:hidden">📄</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/project" class="nav-link">
              <span class="hidden sm:inline">Projects</span>
              <span class="sm:hidden">💼</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-link">
              <span class="hidden sm:inline">Contact</span>
              <span class="sm:hidden">📨</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
<style scoped>
.nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  color: #374151;
  text-decoration: none;
}

.dark .nav-link {
  color: #e5e7eb;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #3b82f6;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link:hover::after {
  width: 70%;
}

.router-link-active {
  color: #3b82f6;
  font-weight: 600;
}

.router-link-active::after {
  width: 70%;
}

.dark .router-link-active,
.dark .nav-link:hover {
  color: #60a5fa;
}
</style>
  