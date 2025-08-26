import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faEnvelope, faMoon, faSun, faUserSecret, 
  faDownload, faCode, faGraduationCap, 
  faBook, faBriefcase, faFile,
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
  faBriefcase, faFile, faLocationDot, faExternalLinkAlt,
  faPhone, faPaperPlane, faSpinner, faCheckCircle,
  faExclamationCircle, faEye, faEyeSlash, faArrowRight,
  faBrain, faDatabase, faRobot, faGlobe, faServer,
  faChartBar, faGamepad, faComments, faMobileAlt,
  faTimes, faJs, faPython, faJava, faVuejs, faReact
)

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');