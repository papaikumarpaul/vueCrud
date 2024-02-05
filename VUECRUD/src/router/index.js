import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import StudentCreact from '../views/Student/Creact.vue'
import StudentEdit from '../views/Student/Edit.vue'
import StudentView from '../views/Student/StudentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    }
  ]
})

export default router
