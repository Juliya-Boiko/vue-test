//import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";

const routes = [
  { path: '/', name: 'Homepage', component: HomePage },
  { path: '/about', name: 'Aboutpage', component: AboutPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

//export default router;
