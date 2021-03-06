import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register';
import TodoApp from '../components/TodoList';

Vue.use(Router)
const router = new Router({
  // base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/todo-app',
      name: 'TodoApp',
      component: TodoApp,
    },
  ]
});

export default router
