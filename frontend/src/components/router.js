import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './LoginPage.vue';
import ConfirmationPage from './ConfirmationPage.vue';
import HomePage from './HomePage.vue';

const routes = [
  { path: '/', name: 'LoginPage', component: LoginPage },
  { path: '/confirm', name: 'ConfirmationPage', component: ConfirmationPage },
  { path: '/home', name: 'HomePage', component: HomePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router