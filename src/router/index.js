import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/resume',
        name: 'Resume',
        component: ResumeView
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
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