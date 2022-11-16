import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage  from './pages/ErrorPage.vue';

const routes = [
  { path: '/', name: 'homepage', component: HomePage },
  { path: '/apartment/:id', name: 'apartment', component: ApartmentPage },
  { path: '/:catchAll(.*)', name: 'error-page',  component: ErrorPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
