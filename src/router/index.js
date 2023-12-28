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
            title: 'Namit Kharade',
            metaTags: [{
                name: 'Home page',
                content: 'Home page describing a short about me '}]
          }
    },
    {
        path: '/resume',
        name: 'Resume',
        component: ResumeView,
        meta: {
            title: 'Namit Kharade Resume',
            metaTags: [{
                name: 'Resume page',
                content: 'Resume page with detailed description about me'}]
          }
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectView,
        meta: {
            title: 'Namit Kharade Project List',
            metaTags: [{
                name: 'Projects page',
                content: 'Project list showing all my Github projects'}]
          }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            title: 'Namit Kharade Contact page',
            metaTags: [{
                name: 'Contact page',
                content: 'Contact form and my social links'}]
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
  

export default router