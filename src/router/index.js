import {createRouter, createWebHistory} from 'vue-router';
import {h} from "vue";
import Api from '../services/api.service';
import {useAuthStore} from "@/stores/auth";
import auth from './auth';
import cabinet from './cabinet';
import admin from './admin';


const routes = [
  {
    path: '/',
    render: () => {
      return h('router-view')
    },
    children: [
      {
        path: '',
        name: 'VLandingPage',
        meta: {layout: 'page'},
        component: () => import("../views/VLandingPage/index.vue")
      },
      ...auth,
      ...cabinet,
      ...admin
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  if(!store.isLoggedIn) {
    if(to.meta.layout === 'empty' || to.meta.layout === 'page') {
      next()
    } else {
      next('/')
    }
  } else {
    Api.auth.profile().then((res)=>{
      const role = res?.role_id;
      store.setUserRole(role);
      store.setUser(res)
    });
    if(to.name === 'VRegisterFull') {
      next()
    } else if (to.meta.layout === 'empty' && to.name !== 'VRegisterFull') {
      next('/')
    } else {
      next()
    }
  }
})

export default router
