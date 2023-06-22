import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Product/Product.vue'
import Category from '../views/Category/Category.vue'
import Employer from '../views/Employer/Employer.vue'
import Login from '../views/Login/Login.vue'
import ProductItem from '../views/Product/ProductItem.vue'
import Error from '../views/Error.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/product',
          name: 'Product',
          component: Product
        },
        {
          path: '/product/:id',
          name: 'ProductItem',
          component: ProductItem
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/employer',
          name: 'Employer',
          component: Employer
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: Error
    }
  ]
})

export default router
