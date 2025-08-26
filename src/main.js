import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faEnvelope, faMoon, faSun, faUserSecret, 
  faDownload, faCode, faGraduationCap, 
  faBook, faBriefcase, faFile,
  faLocationDot, faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

import { 
  faFacebook, faGithub, faInstagram, 
  faLinkedin, faTwitter 
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUserSecret, faFacebook, faLinkedin, faInstagram, 
  faGithub, faTwitter, faMoon, faSun, faEnvelope,
  faDownload, faCode, faGraduationCap, faBook, 
  faBriefcase, faFile, faLocationDot, faExternalLinkAlt
)


const app = createApp(App);

// Add meta support
app.use(router);
app.use(createMetaManager());
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');