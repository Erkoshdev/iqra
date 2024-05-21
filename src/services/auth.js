import http from "./interceptor";
import { removeToken } from './interceptor'

const auth = {
  register: (data) => http.post('/auth/register', data),
  registerFull: (data) => http.put('/auth/me/update', data),
  login: (data) => http.post('/auth/login', data, {
    transformRequest: [removeToken]
  }),
  profile: () => http.get('/auth/me'),
  changePassword: (data) => http.post('/auth/change-password', data),
  logout: () => http.post('/auth/logout')
}


export default {
  auth,
}
