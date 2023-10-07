import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import Home from '../views/Home.vue';

// Routes for the application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

// creating new router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
