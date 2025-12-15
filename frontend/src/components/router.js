import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './LoginPage.vue';
import ConfirmationPage from './ConfirmationPage.vue';

const routes = [
  { path: '/', name: 'LoginPage', component: LoginPage },
  { path: '/confirm', name: 'ConfirmationPage', component: ConfirmationPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router