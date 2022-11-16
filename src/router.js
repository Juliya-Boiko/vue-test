import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";

const routes = [
  { path: '/', name: 'homepage', component: HomePage },
  { path: '/apartment', name: 'apartment', component: ApartmentPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
