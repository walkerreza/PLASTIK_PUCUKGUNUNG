import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded pages untuk performa
// Customer
const Home = () => import('../pages/customer/Home.vue')
const About = () => import('../pages/customer/About.vue')
const Contact = () => import('../pages/customer/Contact.vue')
const Produk = () => import('../pages/customer/Produk.vue')

// Owner
const HomeOwner = () => import('../pages/owner/HomeOwner.vue')
const OwnerReport = () => import('../pages/owner/OwnerReport.vue')
const LoginPage = () => import('../pages/Login/LoginPage.vue')
const RegisterPage = () => import('../pages/Login/RegisterPage.vue')
const routes = [
  { path: '/', name: 'home', component: Home, meta: { roles: ['customer', 'owner'] } },
  { path: '/about', name: 'about', component: About, meta: { roles: ['customer', 'owner'] } },
  { path: '/contact', name: 'contact', component: Contact, meta: { roles: ['customer', 'owner'] } },
  { path: '/produk', name: 'produk', component: Produk, meta: { roles: ['customer', 'owner'] } },

  // Owner
  { path: '/homeowner', name: 'homeowner', component: HomeOwner, meta: { requiresAuth: true, roles: ['owner'] } },
  { path: '/ownerreport', name: 'ownerreport', component: OwnerReport, meta: { requiresAuth: true, roles: ['owner'] } },

  {path: '/LoginPage', name: 'LoginPage', component:LoginPage, meta: { layout: 'AuthLayout' } },
  {path: '/registerPage',name: 'registerPage', component:RegisterPage, meta: { layout: 'AuthLayout' }}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

function getCurrentUserRole() {
  // TODO: ganti dengan sumber asli: Pinia/store, decode JWT, atau API /auth/me
  // Sementara pakai localStorage: set item 'role' = 'owner' atau 'customer'
  return localStorage.getItem('role') || null
}

router.beforeEach((to) => {
  const role =getCurrentUserRole()
  const requiresAuth = to.meta?.requiresAuth 
  const allowedRoles = to.meta?.roles

  if (requiresAuth && !role) {
    return { path: "/", query: {redirect: to.fullPath} }
  }

  if (Array.isArray(allowedRoles) && role && !allowedRoles.includes(role)) {
    return { path: "/"}
  }

  return true
})

export default router
