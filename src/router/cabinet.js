export default [
  {
    path: '/cabinet',
    name: 'VCabinet',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VCabinet/index.vue")
  },
  {
    path: '/my-courses',
    name: 'VMyCourses',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VMyCourses")
  },
  {
    path: '/course/:courseId',
    name: 'VCourse',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VCourse")
  },
  {
    path: '/lesson/:lessonId',
    name: 'VLesson',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VLesson"),
  },
  {
    path: '/broadcast',
    name: 'VBroadcast',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VBroadcast"),
  },
  {
    path: '/task/:taskId',
    name: 'VTask',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VTask")
  },
  {
    path: '/news',
    name: 'VNews',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VNews/index.vue")
  },
  {
    path: '/news/:id',
    name: 'VNewsDetail',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VNews/VNewsDetail")
  },
  {
    path: '/faq',
    name: 'VFaq',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VFaq")
  },
  {
    path: '/faq/id',
    name: 'VFaqDetail',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VFaq/VFaqDetail")
  },
  {
    path: '/faq/contact',
    name: 'VFaqContactForm',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VFaq/VFaqContactForm")
  },
  {
    path: '/rating',
    name: 'VRating',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VRating")
  },
  {
    path: '/settings',
    name: 'VSettings',
    meta: { layout: 'main' },
    component: () => import("../views/cabinet/VSettings")
  },

]
