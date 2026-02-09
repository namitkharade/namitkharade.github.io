<template>
  <header class="fixed top-0 left-0 right-0 z-40 glass-panel shadow-md backdrop-blur-md duration-500 transition-all ease-in-out">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo/Name -->
        <RouterLink to="/" class="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          NK
        </RouterLink>
        
        <!-- Navigation Links -->
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
              <span class="sm:hidden">🚀</span>
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

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  mounted() {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('.scroll-link').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        
        if (href && href.includes('#')) {
          const targetId = href.split('#')[1];
          
          // If we're not on the home page, navigate there first
          if (this.$route.path !== '/') {
            this.router.push('/').then(() => {
              setTimeout(() => {
                this.scrollToSection(targetId);
              }, 100);
            });
          } else {
            this.scrollToSection(targetId);
          }
        }
      });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', this.highlightActiveSection);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.highlightActiveSection);
  },
  methods: {
    scrollToSection(targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80; // Account for fixed header
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    },
    highlightActiveSection() {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const link = document.querySelector(`a[href*="#${sectionId}"]`);
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link?.classList.add('active-section');
          } else {
            link?.classList.remove('active-section');
          }
        }
      });
    }
  }
};
</script>
  
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

.router-link-active,
.router-link-exact-active,
.active-section {
  color: #3b82f6 !important;
  font-weight: 600;
}

.router-link-active::after,
.router-link-exact-active::after,
.active-section::after {
  width: 70%;
}

.dark .router-link-active,
.dark .router-link-exact-active,
.dark .active-section,
.dark .nav-link:hover {
  color: #60a5fa;
}
</style>
  