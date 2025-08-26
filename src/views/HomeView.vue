<template>
  <div class="mt-20 sm:mt-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
      <div class="order-2 md:order-1 text-left px-4">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Namit Bhalendra Kharade
        </h1>
        <h2 class="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          AI Engineer @ AIME GmbH, Berlin
        </h2>
        <div class="flex items-center mb-6 text-gray-600 dark:text-gray-300">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />
          <span>Berlin, Germany</span>
        </div>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Data Science professional with expertise in AI, ML, and Data Engineering. Currently pursuing a Master's degree in Data and Knowledge Engineering while working as an AI Engineer at AIME GmbH.
        </p>
        <div class="flex flex-wrap gap-4">
          <a 
            href="mailto:namit.b.kharade@gmail.com" 
            @click="trackContactClick('email')"
            class="group relative flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <font-awesome-icon icon="fa-solid fa-envelope" class="mr-3 text-lg relative z-10" />
            <span class="font-semibold relative z-10">Contact Me</span>
          </a>
          <a 
            href="/resume" 
            @click="trackResumeView"
            class="group relative flex items-center px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-blue-300 rounded-xl hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <font-awesome-icon icon="fa-solid fa-file-text" class="mr-3 text-lg relative z-10" />
            <span class="font-semibold relative z-10">View Resume</span>
          </a>
        </div>
      </div>
      <div class="order-1 md:order-2 flex justify-center">
        <div class="relative w-64 h-64 sm:w-80 sm:h-80">
          <img
            :src="isHovered ? animatedImage : staticImage"
            alt="Profile"
            class="w-full h-full rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800 transition-all duration-300 transform hover:scale-105"
            @mouseover="handleMouseOver"
            @mouseout="handleMouseOut"
          />
          <div class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
            <span class="text-2xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mt-20 px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div 
          @mouseenter="trackSkillHover('AI/ML')"
          class="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-blue-100 dark:border-gray-700"
        >
          <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🧠</div>
          <div class="font-semibold text-gray-800 dark:text-white">AI/ML</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Expert</div>
        </div>
        <div 
          @mouseenter="trackSkillHover('Python')"
          class="group bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-green-100 dark:border-gray-700"
        >
          <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🐍</div>
          <div class="font-semibold text-gray-800 dark:text-white">Python</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Expert</div>
        </div>
        <div 
          @mouseenter="trackSkillHover('Data Engineering')"
          class="group bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-purple-100 dark:border-gray-700"
        >
          <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">📊</div>
          <div class="font-semibold text-gray-800 dark:text-white">Data Engineering</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Advanced</div>
        </div>
        <div 
          @mouseenter="trackSkillHover('GCP')"
          class="group bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-yellow-100 dark:border-gray-700"
        >
          <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">☁️</div>
          <div class="font-semibold text-gray-800 dark:text-white">GCP</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Advanced</div>
        </div>
        <div 
          @mouseenter="trackSkillHover('Web Development')"
          class="group bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-teal-100 dark:border-gray-700"
        >
          <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">⚛️</div>
          <div class="font-semibold text-gray-800 dark:text-white">Web Development</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Intermediate</div>
        </div>
        <div 
          @mouseenter="trackSkillHover('Data Analysis')"
          class="group bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-orange-100 dark:border-gray-700"
        >
          <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🔍</div>
          <div class="font-semibold text-gray-800 dark:text-white">Data Analysis</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Expert</div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mt-24 px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Recent Experience
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>
      <div class="space-y-8">
        <div class="group relative bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-blue-100 dark:border-gray-700 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div class="relative z-10">
            <div class="flex flex-wrap justify-between items-start mb-6">
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <font-awesome-icon icon="fa-solid fa-brain" class="text-xl" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">AI Engineer (part-time)</h3>
                  <h4 class="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AIME GmbH</h4>
                </div>
              </div>
              <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-gray-600">
                November 2024 - Present
              </div>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Currently benchmarking AI models and implementing demonstrations for real-time applications on cutting-edge infrastructure.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">AI Benchmarking</span>
              <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Real-time AI</span>
              <span class="px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Documentation</span>
            </div>
          </div>
        </div>
        
        <div class="group relative bg-gradient-to-br from-white via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-green-100 dark:border-gray-700 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div class="relative z-10">
            <div class="flex flex-wrap justify-between items-start mb-6">
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <font-awesome-icon icon="fa-solid fa-database" class="text-xl" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Data Engineer</h3>
                  <h4 class="text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ai-coustics GmbH</h4>
                </div>
              </div>
              <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-green-200 dark:border-gray-600">
                February 2024 - August 2024
              </div>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Developed robust data pipelines using Apache Airflow and implemented automatic labeling plugins, achieving 50% performance improvement.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Apache Airflow</span>
              <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">GCP</span>
              <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Audio Processing</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <RouterLink 
          to="/resume" 
          @click="trackResumeView"
          class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-2xl hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <font-awesome-icon icon="fa-solid fa-file-alt" class="mr-3 text-lg group-hover:rotate-12 transition-transform duration-300" />
          <span class="font-semibold text-lg">View Full Resume</span>
          <div class="ml-3 w-2 h-2 bg-current rounded-full animate-pulse"></div>
        </RouterLink>
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
