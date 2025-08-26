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
          <a href="mailto:namit.b.kharade@gmail.com" class="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            <font-awesome-icon icon="fa-solid fa-envelope" class="mr-2" />
            Contact Me
          </a>
          <a href="/resume" class="flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300">
            <font-awesome-icon icon="fa-solid fa-file" class="mr-2" />
            View Resume
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
      <h2 class="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Skills & Expertise
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transform transition hover:scale-105">
          <div class="text-2xl mb-2 text-blue-600 dark:text-blue-400">🧠</div>
          <div class="font-medium">AI/ML</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transform transition hover:scale-105">
          <div class="text-2xl mb-2 text-blue-600 dark:text-blue-400">🐍</div>
          <div class="font-medium">Python</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transform transition hover:scale-105">
          <div class="text-2xl mb-2 text-blue-600 dark:text-blue-400">📊</div>
          <div class="font-medium">Data Engineering</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transform transition hover:scale-105">
          <div class="text-2xl mb-2 text-blue-600 dark:text-blue-400">☁️</div>
          <div class="font-medium">GCP</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transform transition hover:scale-105">
          <div class="text-2xl mb-2 text-blue-600 dark:text-blue-400">⚛️</div>
          <div class="font-medium">Web Development</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center transform transition hover:scale-105">
          <div class="text-2xl mb-2 text-blue-600 dark:text-blue-400">🔍</div>
          <div class="font-medium">Data Analysis</div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mt-20 px-4">
      <h2 class="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Recent Experience
      </h2>
      <div class="space-y-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div class="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">AI Engineer (part-time)</h3>
              <h4 class="text-lg font-medium text-blue-600 dark:text-blue-400">AIME GmbH</h4>
            </div>
            <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
              November 2024 - Present
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Currently benchmarking AI models and implementing demonstrations for real-time applications.
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div class="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Data Engineer</h3>
              <h4 class="text-lg font-medium text-blue-600 dark:text-blue-400">ai-coustics GmbH</h4>
            </div>
            <div class="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 sm:mt-0">
              February 2024 - August 2024
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            Developed data pipelines using Apache Airflow and implemented automatic labeling plugins for audio files.
          </p>
        </div>
      </div>
      <div class="text-center mt-8">
        <RouterLink to="/resume" class="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
          View Full Resume
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import animatedGif from '../assets/imgs/Animoji_1.gif';
import staticImg from '../assets/imgs/memoji.png';

export default {
  data() {
    return {
      isHovered: false,
      animatedImage: animatedGif,
      staticImage: staticImg
    };
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
  },
};
</script>

<style scoped>
.bg-gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
