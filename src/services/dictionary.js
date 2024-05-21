import http from "./interceptor";

const role = {
  getList: (params) => http.get('/roles', { params })
}

const regions = {
  getList: (params) => http.get('/regions', { params })
}

const courseCategories = {
  getList: () => http.get('/course-categories')
}


export default {
  role,
  regions,
  courseCategories
}
