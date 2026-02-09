<template>
  <div id="home" class="mt-20 sm:mt-16 relative">
    <div class="aurora-bg"></div>
    <div class="hero-spotlight"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto relative z-10">
      <div class="order-2 md:order-1 text-left px-4">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Namit Bhalendra Kharade
        </h1>
        <h2 class="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          AI & Software Engineer (M.Sc.) @ AIME GmbH
        </h2>
        <div class="flex items-center mb-6 text-gray-600 dark:text-gray-300">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />
          <span>Berlin, Germany</span>
        </div>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          3+ years of experience building scalable backend infrastructure for Generative AI. Specialized in GraphRAG systems, LLM inference optimization, and automated evaluation pipelines.
        </p>
        <div class="flex flex-wrap gap-4">
          <RouterLink
            to="/contact" 
            @click="trackContactClick('email')"
            class="group relative flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden btn-premium"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <font-awesome-icon icon="fa-solid fa-envelope" class="mr-3 text-lg relative z-10" />
            <span class="font-semibold relative z-10">Contact Me</span>
          </RouterLink>
          <RouterLink
            to="/resume" 
            @click="trackResumeView"
            class="group relative flex items-center px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-blue-300 rounded-xl hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <font-awesome-icon icon="fa-solid fa-file-text" class="mr-3 text-lg relative z-10" />
            <span class="font-semibold relative z-10">View Resume</span>
          </RouterLink>
        </div>
      </div>
      <div class="order-1 md:order-2 flex justify-center">
        <div class="relative w-64 h-64 sm:w-80 sm:h-80">
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-cyan-400/30 blur-2xl"></div>
          <img
            :src="isHovered ? animatedImage : staticImage"
            alt="Profile"
            class="w-full h-full rounded-full object-cover shadow-xl border-4 border-white/80 dark:border-gray-800/80 transition-all duration-300 transform hover:scale-105 relative z-10"
            @mouseover="handleMouseOver"
            @mouseout="handleMouseOut"
          />
          <div class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
            <span class="text-2xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>

    <!-- What I Do -->
    <div id="about" class="max-w-6xl mx-auto mt-20 px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          What I Do
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full section-divider"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 border border-blue-100 dark:border-gray-700">
          <div class="text-5xl mb-4">🤖</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">AI & LLM Systems</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Building production-ready LLM applications with GraphRAG, evaluation pipelines, and scalable inference</p>
        </div>
        <div class="group bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 border border-purple-100 dark:border-gray-700">
          <div class="text-5xl mb-4">🧱</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Data Engineering</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Designing ETL pipelines, automating data workflows, and building robust data infrastructure</p>
        </div>
        <div class="group bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 border border-green-100 dark:border-gray-700">
          <div class="text-5xl mb-4">☁️</div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">MLOps & Cloud</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Deploying ML models at scale on cloud platforms with containerization and orchestration</p>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div id="skills" class="max-w-6xl mx-auto mt-16 px-4">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="text-center">
          <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3+</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Years</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">15+</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Projects</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">50%</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Time Saved</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">2</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Publications</div>
        </div>
      </div>
    </div>

    <!-- Current Work -->
    <div id="experience" class="max-w-6xl mx-auto mt-24 px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Currently At
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full section-divider"></div>
      </div>
      <div class="max-w-4xl mx-auto">
        <div class="group relative bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div class="flex items-center space-x-4 mb-4 sm:mb-0">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <font-awesome-icon icon="fa-solid fa-brain" class="text-2xl" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">AI Engineer</h3>
                <a href="https://aime.info" target="_blank" class="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  AIME GmbH →
                </a>
              </div>
            </div>
            <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-gray-600">
              Oct 2024 - Present
            </div>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Building production-ready AI systems with GraphRAG, LLM evaluation pipelines, and scalable inference on GPU Cloud.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">GraphRAG</span>
            <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">LLM Inference</span>
            <span class="px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">MLOps</span>
            <span class="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">Python</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <RouterLink 
          to="/resume" 
          @click="trackResumeView"
          class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-2xl hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl btn-premium"
        >
          <font-awesome-icon icon="fa-solid fa-file-alt" class="mr-3 text-lg" />
          <span class="font-semibold text-lg">View Full Experience & Resume</span>
        </RouterLink>
      </div>
    </div>

    <!-- Contact CTA Section -->
    <div id="contact" class="max-w-4xl mx-auto mt-24 px-4 mb-16">
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h2 class="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
        <p class="text-lg mb-8 text-blue-100">
          Interested in collaborating? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/contact" 
            @click="trackContactClick('email')"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            <font-awesome-icon icon="fa-solid fa-envelope" class="mr-3 text-lg" />
            Get In Touch
          </RouterLink>
          <a 
            href="https://www.linkedin.com/in/namit-k/" 
            target="_blank"
            class="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" class="mr-3 text-lg" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animatedGif from '../assets/imgs/Animoji_1.gif';
import staticImg from '../assets/imgs/memoji.png';
import { portfolioEvents } from '../utils/analytics.js';

export default {
  data() {
    return {
      isHovered: false,
      animatedImage: animatedGif,
      staticImage: staticImg
    };
  },
  mounted() {
    // Track page view
    portfolioEvents.pageView('Home');
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
    trackContactClick(method) {
      portfolioEvents.contactClick(method);
    },
    trackResumeView() {
      portfolioEvents.resumeView();
    },
    trackSkillHover(skillName) {
      portfolioEvents.skillHover(skillName);
    }
  },
};
</script>

<style scoped>
/* Enhanced gradient text effects */
.bg-gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* Smooth animations for better UX */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Enhanced typography with better contrast */
h1, h2, h3 {
  letter-spacing: -0.025em;
  line-height: 1.2;
}

/* Better text contrast for accessibility */
.text-enhanced {
  color: #1f2937;
  font-weight: 500;
}

.dark .text-enhanced {
  color: #f9fafb;
}

/* Improved button hover states */
.btn-enhanced {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-enhanced:hover::before {
  left: 100%;
}

/* Card hover effects with shadows */
.card-enhanced {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-enhanced:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient borders for modern appeal */
.gradient-border {
  position: relative;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
  padding: 2px;
  border-radius: 16px;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: white;
  border-radius: 14px;
  z-index: -1;
}

.dark .gradient-border::before {
  background: #1f2937;
}

/* Enhanced scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}

.dark ::-webkit-scrollbar-track {
  background: #374151;
}

/* Performance optimizations */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus states for keyboard navigation */
.focus-enhanced:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 8px;
}

/* Text shadow for better readability */
.text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dark .text-shadow {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
</style>
