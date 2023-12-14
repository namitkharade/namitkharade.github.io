import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '../views/EducationView.vue'
import WorkView from '../views/WorkView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/education',
        name: 'Education',
        component: EducationView
    },
    {
        path: '/work',
        name: 'Work',
        component: WorkView
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectView
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