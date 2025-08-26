import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Namit Kharade - AI Engineer & Data Scientist | Portfolio',
            description: 'Namit Kharade is an AI Engineer and Data Scientist with expertise in Machine Learning, Data Engineering, and Computer Vision. Currently pursuing MS in Data Science at Otto-von-Guericke University and working at AIME GmbH Berlin.',
            keywords: 'Namit Kharade, AI Engineer, Data Scientist, Machine Learning, Data Engineering, Computer Vision, NLP, Python, TensorFlow, PyTorch, Berlin, Germany',
            ogImage: 'https://namitkharade.github.io/src/assets/imgs/profile.jpg'
        }
    },
    {
        path: '/resume',
        name: 'Resume',
        component: ResumeView,
        meta: {
            title: 'Namit Kharade Resume - AI Engineer Experience & Education',
            description: 'View Namit Kharade\'s professional resume showcasing experience as AI Engineer at AIME GmbH, Data Engineer at ai-coustics, and Software Engineer at aiio GmbH. MS in Data Science from Otto-von-Guericke University.',
            keywords: 'Namit Kharade resume, AI Engineer experience, AIME GmbH, ai-coustics, aiio GmbH, Accenture, Otto-von-Guericke University, Data Science, Machine Learning experience',
            ogImage: 'https://namitkharade.github.io/src/assets/imgs/profile.jpg'
        }
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectView,
        meta: {
            title: 'Namit Kharade Projects - AI/ML, Computer Vision & Data Science',
            description: 'Explore Namit Kharade\'s portfolio of AI and Machine Learning projects including helmet detection, COVID mask detection, data engineering pipelines, and computer vision applications. GitHub projects showcase.',
            keywords: 'Namit Kharade projects, AI projects, Machine Learning projects, Computer Vision, helmet detection, COVID mask detection, data engineering, GitHub projects, Python projects',
            ogImage: 'https://namitkharade.github.io/src/assets/imgs/profile.jpg'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            title: 'Contact Namit Kharade - AI Engineer & Data Scientist',
            description: 'Get in touch with Namit Kharade for AI engineering opportunities, data science collaborations, or professional inquiries. Contact form and social media links.',
            keywords: 'Contact Namit Kharade, AI Engineer contact, Data Scientist contact, hire AI engineer, machine learning consultant, Berlin Germany',
            ogImage: 'https://namitkharade.github.io/src/assets/imgs/profile.jpg'
        }
    },
    {
        path : '/:catchAll(.*)',
        redirect : '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

// Update document title and meta tags based on route
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  
  // Update meta description
  if (to.meta && to.meta.description) {
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', to.meta.description);
    }
  }
  
  // Update meta keywords
  if (to.meta && to.meta.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', to.meta.keywords);
    }
  }
  
  // Update OG image
  if (to.meta && to.meta.ogImage) {
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', to.meta.ogImage);
    }
  }
  
  next();
});
  

export default router