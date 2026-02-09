<template>
  <div class="mt-24 max-w-7xl mx-auto px-4 relative">
    <div class="aurora-bg"></div>
    <div class="hero-spotlight"></div>
    <!-- Header Section -->
    <div class="text-center mb-16 relative z-10">
      <h1 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        My Projects
      </h1>
      <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full section-divider mb-6"></div>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        A curated selection of AI, data, and software engineering projects focused on scalable systems,
        modern LLM workflows, and production-ready pipelines.
      </p>
      <div class="flex items-center justify-center mt-6 space-x-2 text-gray-500 dark:text-gray-400">
        <font-awesome-icon icon="fa-brands fa-github" class="text-xl" />
        <span>Fetched live from GitHub</span>
      </div>
    </div>

    <!-- Featured Projects Section -->
    <div v-if="featuredProjects.length > 0" class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
        <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500 mr-3" />
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div v-for="project in featuredProjects" :key="`featured-${project.id}`" 
             class="glass-panel rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200/60 dark:border-gray-700">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                <font-awesome-icon :icon="getProjectIcon(project)" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ formatProjectName(project.name) }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ formatDate(project.updated_at) }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span v-if="project.stargazers_count > 0" class="flex items-center text-yellow-500 text-sm">
                <font-awesome-icon icon="fa-solid fa-star" class="mr-1" />
                {{ project.stargazers_count }}
              </span>
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                {{ project.language || 'Code' }}
              </span>
            </div>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
            {{ project.description || 'A project showcasing technical skills and problem-solving abilities.' }}
          </p>
          
          <!-- Tech Stack -->
          <div v-if="getTechStack(project).length > 0" class="flex items-center space-x-2 mb-6">
            <div class="flex items-center space-x-3 flex-wrap gap-2">
              <img 
                v-for="tech in getTechStack(project).slice(0, 8)" 
                :key="tech.name"
                :src="tech.logo" 
                :alt="tech.name"
                :title="tech.name"
                class="w-7 h-7 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span v-if="project.forks_count > 0" class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-code-fork" class="mr-1" />
                {{ project.forks_count }}
              </span>
              <span class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-calendar" class="mr-1" />
                {{ formatDate(project.created_at) }}
              </span>
            </div>
            <a :href="project.html_url" target="_blank" 
              class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium btn-premium">
              <font-awesome-icon icon="fa-brands fa-github" class="mr-2" />
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-20">
      <Loader />
      <p class="mt-4 text-gray-600 dark:text-gray-400">Loading projects from GitHub...</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="text-center py-20">
      <div class="text-red-500 mb-4">
        <font-awesome-icon icon="fa-solid fa-exclamation-triangle" class="text-4xl" />
      </div>
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Unable to load projects</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
      <button @click="retryFetch" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 btn-premium">
        Try Again
      </button>
    </div>

    <!-- Projects Grid -->
    <div v-if="!loading && !error && filteredProjects.length > 0">
      <h2 class="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
        All Projects
      </h2>
      
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id" 
              class="group glass-panel rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/70 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
          
          <!-- Project Header -->
          <div class="p-6 border-b border-gray-100/70 dark:border-gray-700">
            <div class="flex items-start justify-between mb-3">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm">
                  <font-awesome-icon :icon="getProjectIcon(project)" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {{ formatProjectName(project.name) }}
                  </h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Updated {{ formatDate(project.updated_at) }}</p>
                </div>
              </div>
              <span v-if="project.language" 
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                {{ project.language }}
              </span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
              {{ project.description || 'A project showcasing technical expertise and innovation.' }}
            </p>
            
            <!-- Tech Stack -->
            <div v-if="getTechStack(project).length > 0" class="flex items-center space-x-2 mb-4">
              <div class="flex items-center space-x-2 flex-wrap">
                <img 
                  v-for="tech in getTechStack(project).slice(0, 6)" 
                  :key="tech.name"
                  :src="tech.logo" 
                  :alt="tech.name"
                  :title="tech.name"
                  class="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
            
            <!-- Project Stats -->
            <div class="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <span v-if="project.stargazers_count > 0" class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-star" class="mr-1 text-yellow-500" />
                {{ project.stargazers_count }}
              </span>
              <span v-if="project.forks_count > 0" class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-code-fork" class="mr-1" />
                {{ project.forks_count }}
              </span>
              <span class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-calendar" class="mr-1" />
                {{ formatDate(project.created_at) }}
              </span>
            </div>
          </div>
          
          <!-- Project Actions -->
          <div class="p-4 bg-white/70 dark:bg-gray-900/60">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span v-if="project.topics && project.topics.length > 0" 
                      v-for="topic in project.topics.slice(0, 2)" :key="topic"
                      class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {{ topic }}
                </span>
              </div>
              <a :href="project.html_url" target="_blank" 
                  class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm btn-premium">
                <font-awesome-icon icon="fa-brands fa-github" class="mr-1" />
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && !error && filteredProjects.length === 0" class="text-center py-20">
      <div class="text-gray-400 mb-4">
        <font-awesome-icon icon="fa-solid fa-folder-open" class="text-6xl" />
      </div>
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">No projects found</h3>
      <p class="text-gray-600 dark:text-gray-400">Try selecting a different category or check back later.</p>
    </div>

    <!-- Call to Action -->
    <div class="mt-20 text-center glass-panel rounded-2xl p-12">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Interested in Collaboration?</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        I'm always excited to work on new projects and explore innovative solutions. 
        Let's discuss how we can create something amazing together!
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <RouterLink to="/contact" 
                   class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 btn-premium">
          <font-awesome-icon icon="fa-solid fa-envelope" class="mr-2" />
          Get in Touch
        </RouterLink>
        <a href="https://github.com/namitkharade" target="_blank"
           class="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300 btn-premium">
          <font-awesome-icon icon="fa-brands fa-github" class="mr-2" />
          View All on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Loader from '../components/Loader.vue';

const projects = ref([]);
const loading = ref(false);
const error = ref(null);

// Define featured project names (you can customize this list)
const featuredProjectNames = [
  'namitkharade.github.io',
  'data-driven-recruitment-strategy',
  'image-clustering-scan',
  'helmet-violation-detection',
  'covid-mask-detection'
];

// Tech stack logo mapping using CDN links
const techLogos = {
  // Languages
  'python': { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  'javascript': { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  'typescript': { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  'java': { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  'c++': { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  'go': { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  'rust': { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
  'php': { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  'ruby': { name: 'Ruby', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  'html': { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  'css': { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  
  // Frameworks & Libraries
  'vue': { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  'react': { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  'angular': { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  'nodejs': { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  'express': { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  'django': { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  'flask': { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  'fastapi': { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  'nextjs': { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  'tailwind': { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  'bootstrap': { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  'nuxtjs': { name: 'Nuxt.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  
  // ML/AI
  'tensorflow': { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  'pytorch': { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  'opencv': { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  'keras': { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
  'scikit-learn': { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  
  // Data & Analytics
  'pandas': { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  'numpy': { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  'jupyter': { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  
  // Databases
  'mongodb': { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  'postgresql': { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  'mysql': { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  'redis': { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  'firebase': { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  'sqlite': { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  
  // DevOps & Tools
  'docker': { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  'kubernetes': { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  'git': { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  'github': { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  'aws': { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  'azure': { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  'gcp': { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  'jenkins': { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  'nginx': { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  'linux': { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  
  // Other
  'graphql': { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  'jest': { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  'webpack': { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  'vite': { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' },
  'electron': { name: 'Electron', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
};

const featuredProjects = computed(() => {
  return projects.value.filter(project => 
    featuredProjectNames.some(name => 
      project.name.toLowerCase().includes(name.toLowerCase())
    )
  ).slice(0, 4); // Limit to 4 featured projects
});

const filteredProjects = computed(() => {
  return projects.value.filter(project => 
    !featuredProjects.value.some(featured => featured.id === project.id)
  );
});

const formatProjectName = (name) => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/github\.io/i, 'Portfolio')
    .replace(/api/gi, 'API')
    .replace(/ui/gi, 'UI')
    .replace(/ai/gi, 'AI')
    .replace(/ml/gi, 'ML');
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }
};

const getProjectIcon = (project) => {
  const name = project.name.toLowerCase();
  const language = (project.language || '').toLowerCase();
  const topics = project.topics || [];
  
  // Check for specific project types
  if (name.includes('portfolio') || name.includes('website')) return 'fa-solid fa-globe';
  if (name.includes('api') || name.includes('server')) return 'fa-solid fa-server';
  if (name.includes('mobile') || name.includes('app')) return 'fa-solid fa-mobile-alt';
  if (name.includes('ai') || name.includes('ml') || name.includes('neural')) return 'fa-solid fa-brain';
  if (name.includes('data') || name.includes('analysis')) return 'fa-solid fa-chart-bar';
  if (name.includes('game')) return 'fa-solid fa-gamepad';
  if (name.includes('chat') || name.includes('bot')) return 'fa-solid fa-comments';
  
  // Check by language
  if (language === 'javascript' || language === 'typescript') return 'fa-brands fa-js';
  if (language === 'python') return 'fa-brands fa-python';
  if (language === 'java') return 'fa-brands fa-java';
  if (language === 'vue') return 'fa-brands fa-vuejs';
  if (language === 'react') return 'fa-brands fa-react';
  
  // Check by topics
  if (topics.includes('machine-learning') || topics.includes('deep-learning')) return 'fa-solid fa-brain';
  if (topics.includes('web') || topics.includes('frontend')) return 'fa-solid fa-globe';
  if (topics.includes('api') || topics.includes('backend')) return 'fa-solid fa-server';
  
  // Default icon
  return 'fa-solid fa-code';
};

const getTechStack = (project) => {
  const techStack = [];
  const seenTech = new Set();
  
  // Helper function to add tech if not already present
  const addTech = (techKey) => {
    if (techLogos[techKey] && !seenTech.has(techKey) && techStack.length < 8) {
      techStack.push(techLogos[techKey]);
      seenTech.add(techKey);
      return true;
    }
    return false;
  };
  
  // Get tech from primary language - always add main language first
  if (project.language) {
    const lang = project.language.toLowerCase();
    addTech(lang);
    
    // Add common companions for languages
    const languageCompanions = {
      'javascript': ['nodejs', 'html', 'css'],
      'typescript': ['nodejs', 'html', 'css'],
      'python': ['pandas', 'numpy'],
      'vue': ['javascript', 'html', 'css'],
      'html': ['css', 'javascript']
    };
    
    if (languageCompanions[lang]) {
      for (const companion of languageCompanions[lang]) {
        if (techStack.length >= 6) break;
        addTech(companion);
      }
    }
  }
  
  // Get tech from topics/tags
  if (project.topics && project.topics.length > 0) {
    // Direct matching and variations
    const topicVariations = {
      'machine-learning': 'tensorflow', 'deep-learning': 'pytorch',
      'ml': 'tensorflow', 'ai': 'tensorflow', 'artificial-intelligence': 'tensorflow',
      'node': 'nodejs', 'next': 'nextjs', 'nuxt': 'nuxtjs',
      'tailwindcss': 'tailwind', 'vuejs': 'vue', 'reactjs': 'react',
      'angularjs': 'angular', 'postgres': 'postgresql', 'mongo': 'mongodb',
      'k8s': 'kubernetes', 'cv': 'opencv', 'computer-vision': 'opencv',
      'neural-network': 'tensorflow', 'data-science': 'pandas', 'data-analysis': 'pandas'
    };
    
    for (const topic of project.topics) {
      if (techStack.length >= 8) break;
      const topicLower = topic.toLowerCase();
      
      // Try direct match first, then variation
      if (!addTech(topicLower) && topicVariations[topicLower]) {
        addTech(topicVariations[topicLower]);
      }
    }
  }
  
  // Quick keyword inference from name and description
  const searchText = `${project.name} ${project.description || ''}`.toLowerCase();
  const keywords = {
    'detection': ['opencv', 'tensorflow'], 'vision': ['opencv'],
    'mask': ['opencv', 'tensorflow'], 'helmet': ['opencv', 'tensorflow'],
    'clustering': ['pandas'], 'recruitment': ['pandas'],
    'portfolio': ['vue'], 'django': ['django'], 'flask': ['flask']
  };
  
  for (const [keyword, techs] of Object.entries(keywords)) {
    if (techStack.length >= 8) break;
    if (searchText.includes(keyword)) {
      for (const tech of techs) {
        if (techStack.length >= 8) break;
        addTech(tech);
      }
    }
  }
  
  return techStack;
};

const fetchProjects = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    // Use GitHub API v3 with accept header to get topics
    const response = await fetch('https://api.github.com/users/namitkharade/repos?sort=updated&per_page=100', {
      headers: {
        'Accept': 'application/vnd.github.mercy-preview+json'
      }
    });
    
    if (!response.ok) {
      // Handle rate limiting
      if (response.status === 403) {
        const rateLimitReset = response.headers.get('X-RateLimit-Reset');
        if (rateLimitReset) {
          const resetTime = new Date(parseInt(rateLimitReset) * 1000);
          const now = new Date();
          const minutesUntilReset = Math.ceil((resetTime - now) / 60000);
          throw new Error(`GitHub API rate limit exceeded. Please try again in ${minutesUntilReset} minutes.`);
        }
        throw new Error('GitHub API rate limit exceeded. Please try again later.');
      }
      
      throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Filter out forks and sort by creation date (latest to oldest)
    projects.value = data
      .filter(project => !project.fork)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      
  } catch (ex) {
    console.error('Error fetching projects:', ex);
    error.value = ex.message || 'Unable to load projects. Please try again later.';
  } finally {
    loading.value = false;
  }
};

const retryFetch = () => {
  fetchProjects();
};

onMounted(() => {
  fetchProjects();
});
</script>