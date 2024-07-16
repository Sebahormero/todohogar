import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import AdminView from '../views/AdminView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/productos', name: 'Productos', component: ProductsView },
  { path: '/admin', name: 'Admin', component: AdminView, meta: { requiresAuth: true }},
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/producto/:id', name: 'DetalleProducto', component: ProductDetailView },
  { path: '*', name: 'NotFound', component: NotFoundView }
];

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = localStorage.getItem('user');
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

