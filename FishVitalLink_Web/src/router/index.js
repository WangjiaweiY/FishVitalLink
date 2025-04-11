import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/patient',
    name: 'PatientLayout',
    component: () => import('@/layouts/PatientLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'PatientDashboard',
        component: () => import('@/views/patient/Dashboard.vue')
      }
    ]
  },
  {
    path: '/doctor',
    name: 'DoctorLayout',
    component: () => import('@/layouts/DoctorLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'DoctorDashboard',
        component: () => import('@/views/doctor/Dashboard.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/admin/Dashboard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 