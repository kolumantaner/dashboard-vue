import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Buttons from './components/ui/Buttons'
import Typography from './components/ui/Typography'
import Charts from './components/menu-component/Charts'
import Forms from './components/menu-component/Forms'
import Icons from './components/menu-component/Icons'
import Tables from './components/menu-component/Tables'
import DashboardLayout from './components/Main'
import Login from './components/auth/Login'
import Errors from './components/other/Error'
import NotFound from './components/other/NotFound'
import Register from './components/auth/Register'
import Dropdowns from './components/ui/Dropdowns'
Vue.use(VueRouter)
let routes = [
  // Login
  {
    path: '/', component: DashboardLayout,
    children: [
      { path: '/', component: Home },
      { path: '/buttons', component: Buttons },
      { path: '/dropdowns', component: Dropdowns },
      { path: '/charts', component: Charts },
      { path: '/forms', component: Forms },
      { path: '/icons', component: Icons },
      { path: '/tables', component: Tables },
      { path: '/typography', component: Typography }
    ]
  }, {
    path: '/login', component: Login
  }, {
    path: '/register', component: Register
  }, {
    path: '/error', component: Errors
  }, {
    path: '/*', component: NotFound
  }

]
export const router = new VueRouter({
  base: 'public',
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
