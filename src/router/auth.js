export default [
  {
    path: '/login',
    name: 'VLogin',
    meta: {layout: 'empty'},
    component: () => import("../views/auth/VLogin/index.vue")
  },
  {
    path: '/register',
    name: 'VRegister',
    meta: {layout: 'empty'},
    component: () => import("../views/auth/VRegister/index.vue")
  },
  {
    path: '/register-full',
    name: 'VRegisterFull',
    meta: {layout: 'empty'},
    component: () => import("../views/auth/VRegisterFull/index.vue")
  },
  {
    path: '/reset-pwd',
    name: 'VResetPwd',
    meta: {layout: 'empty'},
    component: () => import("../views/auth/VResetPwd/index.vue")
  },
  {
    path: '/new-pwd',
    name: 'VNewPwd',
    meta: {layout: 'empty'},
    component: () => import("../views/auth/VNewPwd/index.vue")
  },
]
