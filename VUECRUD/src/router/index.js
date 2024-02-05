import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginLogout/Login.vue'
import RegisterView from '../views/LoginLogout/Register.vue'
import StudentCreact from '../views/Student/Creact.vue'
import StudentEdit from '../views/Student/Edit.vue'
import StudentView from '../views/Student/StudentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    
      component:AboutView
    },{
      path: '/students',
      name: 'student',
      component: StudentView
    },
    {
      path: '/students/creact',
      name: 'studentCreact',
      component: StudentCreact
    },
    {
      path: '/students/:_id/edit',
      name: 'studentEdit',
      component: StudentEdit
    },{
      path: '/',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path:'/login',
      name:'LoginView',
      component: LoginView
    }
  ]
})

export default router
