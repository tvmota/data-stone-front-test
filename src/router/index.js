import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Shop App',
      component: HomeView
    },
    {
      path: '/clients',
      name: 'cilents',
      component: () => import('../views/clients/ListClients.vue')
    },
    {
      path: '/clients-edit/:id?',
      name: 'cilents-edit',
      component: () => import('../views/clients/EditClients.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products/ListProducts.vue')
    },
    {
      path: '/products-edit/:id?',
      name: 'products-edit',
      component: () => import('../views/products/EditProducts.vue')
    },
    {
      path: '/associate/:clientId?',
      name: 'associateClientsProducts',
      component: () => import('../views/clients/AssociateProducts.vue')
    },
  ]
})

export default router
