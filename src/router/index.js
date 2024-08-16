import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'

const routes = [
    {
      path: '/home',
      name: 'home',
      components: () => import('../components/home.vue') 
    },
    {
      path: '/task',
      name: 'task',
      components: () => import('../components/Task.vue')
    },
  ];

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

  export default router;