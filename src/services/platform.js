import http from "./interceptor";

const user = {
  getList: (params) => http.get('/users', { params }),
  getStudentList: (params) => http.get('/users/students', { params }),
  getUserById: (id) => http.get(`/users/${id}`),
  create: (data) => http.post(`/users`, data),
  edit: (id, data) => http.put(`/users/${id}`, data ),
  delete: (id) => http.delete(`/users/${id}`),
  searchByEmail: (data) => http.post(`/users/search`, data),
}

const course = {
  getList: () => http.get('/courses'),
  getStudentList: (id) => http.get(`/courses/${id}/students`),
  getByGroup: (id, groupId) => http.get(`/courses/${id}/by-group/${groupId}`),
  changeAccess: (id,data) => http.post(`courses/${id}/give-access`, data),
  getCourseById: (id) => http.get(`/courses/${id}`),
  create: (data) => http.post(`/courses`, data),
  edit: (id, data) => http.put(`/courses/${id}`, data ),
  delete: (id) => http.delete(`/courses/${id}`),
  getClientCourseList: () => http.get('/courses/my'),
  getClientCourseById: (id) => http.get(`/courses/my/${id}`),
}

const group = {
  getList: (params) => http.get('/groups', {params}),
  getGroupById: (id) => http.get(`/groups/${id}`),
  addUser: (id, data) => http.post(`/groups/${id}/add-user`,data),
  removeUser: (id, data) => http.post(`/groups/${id}/remove-user`,data),
  changeAccessStatus: (id, data) => http.post(`/groups/${id}/lesson-access`, data),
  create: (data) => http.post(`/groups`, data),
  edit: (id,data) => http.put(`/groups/${id}`, data ),
  delete: (id) => http.delete(`/groups/${id}`),
}

const chapter = {
  create: (id, data) => http.post(`/courses/${id}/add-chapter`, data),
  edit: (id, data) => http.put(`/course-chapters/${id}`, data),
  delete: (id) => http.delete(`/course-chapters/${id}`),
  changeDemoStatus: (courseId, chapterId, data) => http.post(`/courses/${courseId}/${chapterId}/demo-access`, data),
}

const lesson = {
  getList: () => http.get('/lessons'),
  getLessonById: (id) => http.get(`/lessons/${id}`),
  create: (data) => http.post(`/lessons`, data),
  edit: (id, data) => http.put(`/lessons/${id}`, data ),
  delete: (id) => http.delete(`/lessons/${id}`),
  addTask: (id, data) => http.post(`/lessons/${id}/add-tasks`, data),
  changeStatus: (courseId, lessonId, data) =>http.post(`/courses/${courseId}/lessons/${lessonId}/change-status`, data),
}

const page = {
  getList: (params) => http.get('/lesson-pages', {params}),
  getPageById: (id) => http.get(`/lesson-pages/${id}`),
  create: (data) => http.post(`/lesson-pages`, data),
  edit: (id, data) => http.put(`/lesson-pages/${id}`, data ),
  delete: (id) => http.delete(`/lesson-pages/${id}`),
  getClientPageList: (courseId, lessonId, params) => http.get(`/courses/${courseId}/lessons/${lessonId}/pages`, {params}),
}

const task = {
  getList: () => http.get('/tasks'),
  getTaskById: (id, params) => http.get(`/tasks/${id}`, {params}),
  create: (data) => http.post(`/tasks`, data),
  edit: (id, data) => http.put(`/tasks/${id}`, data ),
  delete: (id) => http.delete(`/tasks/${id}`),
  getTaskUsers: (id) => http.get(`/tasks/${id}/passed-users`),
  getClientTaskById: (courseId, lessonId, taskId) => http.get(`/courses/${courseId}/lessons/${lessonId}/tasks/${taskId}`,),
  sendAnswer: (id, data) => http.post(`tasks/${id}/give-question-answer`, data),
}

const question = {
  getTestById: (id) => http.get(`/questions/${id}`),
  create: (data) => http.post(`/questions`, data),
  delete: (id) => http.delete(`/questions/${id}`),
  edit: (id, data) => http.put(`questions/${id}`, data ),
}

const answer = {
  create: (data) => http.post(`/question-answers`, data),
  edit: (id, data) => http.put(`question-answers/${id}`, data ),
  delete: (id) => http.delete(`/question-answers/${id}`)
}

const news = {
  getList: (params) => http.get('/announcements', {params}),
  getNewsDetails: (id) => http.get('/announcements/' + id),
  create: (data) => http.post('/announcements', data),
  edit: (id, data) => http.put('/announcements/' + id, data),
  delete: (id) => http.delete('/announcements/' + id)
}

const applications = {
  getList: (params) => http.get('/applications', {params}),
  getNewsDetails: (id) => http.get('/applications/' + id),
  create: (data) => http.post('/applications', data),
  edit: (id, data) => http.put('/applications/' + id, data),
  delete: (id) => http.delete('/applications/' + id),
  changeStatus: (id, data) => http.post('/applications/' + id + '/change-status', data)
}

const broadcast = {
  getList: () => http.get('/streams'),
  create: (data) => http.post('/streams', data),
  getBroadcastById: (id) => http.get(`/streams/${id}`),
  edit: (id, data) => http.put(`/streams/${id}`, data),
  delete: (id) => http.delete(`/streams/${id}`),
  start: (id) => http.get(`/streams/${id}/start`),
  end: (id) => http.get(`/streams/${id}/end`),
  addMember: (id, data) => http.post(`/streams/${id}/add-users`, data),
  removeMember: (id, data) => http.post(`/streams/${id}/remove-users`, data),
}


export default {
  user,
  course,
  lesson,
  chapter,
  page,
  task,
  question,
  answer,
  news,
  applications,
  group,
  broadcast,
}
