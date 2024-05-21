import {h} from "vue";
import {useAuthStore} from "@/stores/auth";

export default [
  {
    path: 'admin',
    render: () => {
      return h('router-view')
    },
    meta: {
      isAdminPage: true
    },
    beforeEnter: (to, from, next) => {
      const role = useAuthStore().getUser.role_id
      if(role === 1 || role === 2 || role === 3) {
        next()
      } else {
        next('/cabinet')
      }
    },
    children: [
      {
        path: '',
        name: 'VAdmin',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdmin')
      },
      {
        path: 'news',
        name: 'VAdminNews',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminNews'),
      },
      {
        path: 'news/add',
        name: 'VAdminNewsAdd',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminNews/VAdminNewsEdit'),
      },
      {
        path: 'news/edit/:id',
        name: 'VAdminNewsEdit',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminNews/VAdminNewsEdit'),
      },
      {
        path: 'users',
        name: 'VAdminUsers',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminUser')
      },
      {
        path: 'user/add',
        name: 'VAdminUserAdd',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminUser/VAdminUserEdit')
      },
      {
        path: 'user/edit/:id',
        name: 'VAdminUserEdit',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminUser/VAdminUserEdit')
      },
      {
        path: 'courses',
        name: 'VAdminCourse',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminCourse'),
      },
      {
        path: 'course/add',
        name: 'VAdminCourseAdd',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminCourse/VAdminCourseEdit'),
      },
      {
        path: 'course/view/:id',
        name: 'VAdminCourseView',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminCourse/VAdminCourseView'),
      },
      {
        path: 'course/view/:id/students',
        name: 'VAdminCourseStudents',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminCourse/VAdminCourseStudents'),
      },
      {
        path: 'course/view/:id/students/add',
        name: 'VAdminAddCourseStudents',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminCourse/VAdminCourseStudents/VAdminAddCourseStudents'),
      },
      {
        path: 'course/edit/:id',
        name: 'VAdminCourseEdit',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminCourse/VAdminCourseEdit'),
      },
      {
        path: 'lesson/add/:courseId/:chapterId',
        name: 'VAdminLessonAdd',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminLessons/VAdminLessonEdit'),
      },
      {
        path: 'lesson/:id',
        name: 'VAdminLessonEdit',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminLessons/VAdminLessonEdit'),
      },
      {
        path: 'lesson/:id/page',
        name: 'VAdminLessonPage',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminLessons/VAdminLessonPage'),
      },
      {
        path: 'task/add/:lessonId',
        name: 'VAdminTaskAdd',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminTask'),
      },
      {
        path: 'task/edit/:id',
        name: 'VAdminTaskEdit',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminTask'),
      },
      {
        path: 'task/:id/test',
        name: 'VAdminSingleAnswerTest',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminTask/VAdminSingleAnswerTest'),
      },
      {
        path: 'task/:id/multiple-test',
        name: 'VAdminMultipleAnswerTest',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminTask/VAdminMultipleAnswerTest'),
      },
      {
        path: 'task/:id/question',
        name: 'VAdminShortText',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminTask/VAdminShortText'),
      },
      {
        path: 'task/:id/audio',
        name: 'VAdminAudio',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminTask/VAdminAudio'),
      },
      {
        path: 'group/add/:courseId',
        name: 'VAdminGroupAdd',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminGroup/VAdminGroupEdit'),
      },
      {
        path: 'group/:id/:courseId',
        name: 'VAdminGroup',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminGroup'),
      },
      {
        path: 'group/edit/:id/:courseId',
        name: 'VAdminGroupEdit',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminGroup/VAdminGroupEdit'),
      },
      {
        path: 'group/edit/:id/students',
        name: 'VAdminGroupStudentList',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminGroup/VAdminGroupStudentList'),
      },
      {
        path: 'group/edit/:id/students/add',
        name: 'VAdminGroupStudentAdd',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminGroup/VAdminGroupStudentList/VAdminGroupStudentAdd'),
      },
      {
        path: 'settings',
        name: 'VAdminSettings',
        meta: { layout: 'main' },
        component: () => import('../views/cabinet/VSettings'),
      },
      {
        path: 'live',
        name: 'VAdminBroadcast',
        meta: { layout: 'main' },
        component: () => import('../views/admin/VAdminBroadcast'),
      },
      {
        path: 'live/add',
        name: 'VAdminBroadcastAdd',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminBroadcast/VAdminBroadcastEdit')
      },
      {
        path: 'live/:id',
        name: 'VAdminBroadcastEdit',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminBroadcast/VAdminBroadcastEdit')
      },
      {
        path: 'live/:id/members',
        name: 'VAdminBroadcastMemberList',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminBroadcast/VAdminBroadcastMemberList')
      },
      {
        path: 'live/:id/members/add',
        name: 'VAdminBroadcastMemberAdd',
        meta: {layout: 'main'},
        component: () => import('../views/admin/VAdminBroadcast/VAdminBroadcastMemberAdd')
      },
    ],
  },
]
