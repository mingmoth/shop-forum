import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/:id',
      name: 'products',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/carts',
      name: 'carts',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
      redirect: '/admin/products',
      children: [
        {
          path: '/admin/orders',
          name: 'admin-orders',
          component: () => import('../views/AdminOrders.vue')
        },
        {
          path: '/admin/newProduct',
          name: 'admin-new-product',
          component: () => import('../views/AdminProductNew.vue')
        },
        {
          path: '/admin/editProduct',
          name: 'admin-edit-product',
          component: () => import('../views/AdminProductEdit.vue')
        },
        {
          path: '/admin/products',
          name: 'admin-products',
          component: () => import('../views/AdminProducts.vue')
        },
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

export default router
