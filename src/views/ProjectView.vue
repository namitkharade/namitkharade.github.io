<template>
  <div class="mt-24 max-w-7xl mx-auto px-4">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        My Projects
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        A collection of my work showcasing expertise in AI/ML, Data Science, Web Development, and more. 
        Each project represents a unique challenge and learning opportunity.
      </p>
      <div class="flex items-center justify-center mt-6 space-x-2 text-gray-500 dark:text-gray-400">
        <font-awesome-icon icon="fa-brands fa-github" class="text-xl" />
        <span>Fetched live from GitHub</span>
      </div>
    </div>

    <!-- Filter/Category Section -->
    <div class="mb-12">
      <div class="flex flex-wrap justify-center gap-2 sm:gap-4">
        <button 
          @click="selectedCategory = 'all'"
          :class="selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-blue-500 hover:text-white"
        >
          All Projects ({{ projects.length }})
        </button>
        <button 
          @click="selectedCategory = 'ai-ml'"
          :class="selectedCategory === 'ai-ml' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-purple-500 hover:text-white"
        >
          AI/ML
        </button>
        <button 
          @click="selectedCategory = 'web'"
          :class="selectedCategory === 'web' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-green-500 hover:text-white"
        >
          Web Dev
        </button>
        <button 
          @click="selectedCategory = 'data'"
          :class="selectedCategory === 'data' ? 'bg-orange-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-orange-500 hover:text-white"
        >
          Data Science
        </button>
      </div>
    </div>

    <!-- Featured Projects Section -->
    <div v-if="featuredProjects.length > 0 && selectedCategory === 'all'" class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
        <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500 mr-3" />
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="project in featuredProjects" :key="`featured-${project.id}`" 
             class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-gray-700">
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
               class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
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
      <button @click="retryFetch" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Try Again
      </button>
    </div>

    <!-- Projects Grid -->
    <div v-if="!loading && !error && filteredProjects.length > 0">
      <h2 v-if="selectedCategory !== 'all'" class="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
        {{ getCategoryTitle() }} Projects
      </h2>
      <h2 v-else class="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
        All Projects
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id" 
             class="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
          
          <!-- Project Header -->
          <div class="p-6 border-b border-gray-100 dark:border-gray-700">
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
          <div class="p-4 bg-gray-50 dark:bg-gray-900">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span v-if="project.topics && project.topics.length > 0" 
                      v-for="topic in project.topics.slice(0, 2)" :key="topic"
                      class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {{ topic }}
                </span>
              </div>
              <a :href="project.html_url" target="_blank" 
                 class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm">
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
    <div class="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-12">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Interested in Collaboration?</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        I'm always excited to work on new projects and explore innovative solutions. 
        Let's discuss how we can create something amazing together!
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <RouterLink to="/contact" 
                   class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
          <font-awesome-icon icon="fa-solid fa-envelope" class="mr-2" />
          Get in Touch
        </RouterLink>
        <a href="https://github.com/namitkharade" target="_blank"
           class="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300">
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
const selectedCategory = ref('all');

// Define featured project names (you can customize this list)
const featuredProjectNames = [
  'namitkharade.github.io',
  'data-driven-recruitment-strategy',
  'image-clustering-scan',
  'helmet-violation-detection',
  'covid-mask-detection'
];

const featuredProjects = computed(() => {
  return projects.value.filter(project => 
    featuredProjectNames.some(name => 
      project.name.toLowerCase().includes(name.toLowerCase())
    )
  ).slice(0, 4); // Limit to 4 featured projects
});

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects.value.filter(project => 
      !featuredProjects.value.some(featured => featured.id === project.id)
    );
  }
  
  return projects.value.filter(project => {
    const name = project.name.toLowerCase();
    const description = (project.description || '').toLowerCase();
    const topics = project.topics || [];
    
    switch (selectedCategory.value) {
      case 'ai-ml':
        return topics.some(topic => 
          ['machine-learning', 'deep-learning', 'artificial-intelligence', 'ml', 'ai', 'neural-network', 'tensorflow', 'pytorch'].includes(topic.toLowerCase())
        ) || name.includes('ml') || name.includes('ai') || description.includes('machine learning') || description.includes('deep learning');
        
      case 'web':
        return topics.some(topic => 
          ['vue', 'react', 'javascript', 'typescript', 'web', 'frontend', 'backend', 'html', 'css'].includes(topic.toLowerCase())
        ) || name.includes('website') || name.includes('web') || description.includes('web') || project.language === 'JavaScript' || project.language === 'TypeScript' || project.language === 'Vue';
        
      case 'data':
        return topics.some(topic => 
          ['data-science', 'data-analysis', 'pandas', 'numpy', 'analytics', 'visualization'].includes(topic.toLowerCase())
        ) || name.includes('data') || description.includes('data') || project.language === 'Python' && (description.includes('analysis') || description.includes('visualization'));
        
      default:
        return true;
    }
  });
});

const getCategoryTitle = () => {
  switch (selectedCategory.value) {
    case 'ai-ml': return 'AI & Machine Learning';
    case 'web': return 'Web Development';
    case 'data': return 'Data Science';
    default: return 'All';
  }
};

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

const fetchProjects = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    const response = await fetch('https://api.github.com/users/namitkharade/repos?sort=updated&per_page=100');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Filter out forks and sort by last updated
    projects.value = data
      .filter(project => !project.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      
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