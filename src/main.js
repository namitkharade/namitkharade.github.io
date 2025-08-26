import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { performanceMonitor } from './utils/analytics.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faEnvelope, faMoon, faSun, faUserSecret, 
  faDownload, faCode, faGraduationCap, 
  faBook, faBriefcase, faFile, faFileText,
  faLocationDot, faExternalLinkAlt, faPhone,
  faPaperPlane, faSpinner, faCheckCircle,
  faExclamationCircle, faEye, faEyeSlash,
  faArrowRight, faBrain, faDatabase, faRobot,
  faGlobe, faServer, faChartBar, faGamepad,
  faComments, faMobileAlt, faTimes
} from '@fortawesome/free-solid-svg-icons'

import { 
  faFacebook, faGithub, faInstagram, 
  faLinkedin, faTwitter, faJs, faPython,
  faJava, faVuejs, faReact
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret, faFacebook, faLinkedin, faInstagram, 
  faGithub, faTwitter, faMoon, faSun, faEnvelope,
  faDownload, faCode, faGraduationCap, faBook, 
  faBriefcase, faFile, faFileText, faLocationDot, faExternalLinkAlt,
  faPhone, faPaperPlane, faSpinner, faCheckCircle,
  faExclamationCircle, faEye, faEyeSlash, faArrowRight,
  faBrain, faDatabase, faRobot, faGlobe, faServer,
  faChartBar, faGamepad, faComments, faMobileAlt,
  faTimes, faJs, faPython, faJava, faVuejs, faReact
)

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, prompt user to refresh
              if (confirm('New content is available! Would you like to refresh?')) {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Initialize performance monitoring
performanceMonitor.measurePageLoad();
performanceMonitor.measureUserEngagement();

app.mount('#app');